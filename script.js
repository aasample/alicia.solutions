// Mobile Menu Toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileToggle.addEventListener('click', () => {
    mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
    
    // Animate hamburger
    const spans = mobileToggle.querySelectorAll('span');
    if (mobileMenu.style.display === 'block') {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    }
});

// Close mobile menu when clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
        const spans = mobileToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileMenu.style.display = 'none';
        const spans = mobileToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with animate-on-scroll class
document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Navbar scroll effect
let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.padding = '0.5rem 0';
        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.padding = '1rem 0';
        nav.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Add stagger delay to value cards
document.querySelectorAll('.value-card').forEach((card, index) => {
    card.style.setProperty('--delay', `${index * 0.1}s`);
});

// Add stagger delay to stat boxes
document.querySelectorAll('.stat-box').forEach((box, index) => {
    box.style.setProperty('--delay', `${index * 0.1}s`);
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
        const spans = mobileToggle.querySelectorAll('span');
        spans[0].style.transform = '';
        spans[1].style.opacity = '1';
        spans[2].style.transform = '';
    }
});

// Preload critical fonts
if ('fonts' in document) {
    Promise.all([
        document.fonts.load('800 1em Inter'),
        document.fonts.load('700 1em Inter'),
        document.fonts.load('600 1em Inter'),
        document.fonts.load('400 1em Inter')
    ]).then(() => {
        document.body.classList.add('fonts-loaded');
    });
}

// Add hover effect to cards
document.querySelectorAll('.value-card, .stat-box').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Console easter egg
console.log('%c👋 Hey there!', 'font-size: 24px; font-weight: bold; color: #6366f1;');
console.log('%c🚀 This site was vibe coded with Claude!', 'font-size: 16px; color: #64748b;');
console.log('%c📧 Want to chat? aasample@gmail.com', 'font-size: 14px; color: #8b5cf6;');

// Parallax effect for hero images (subtle)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImages = document.querySelectorAll('.hero-image');
    
    heroImages.forEach(img => {
        const speed = 0.3;
        img.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Add loading state
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScroll = debounce(() => {
    // Any heavy scroll calculations go here
}, 100);

window.addEventListener('scroll', optimizedScroll);
