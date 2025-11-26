// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations on sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Mobile navigation toggle
const nav = document.querySelector('nav');
const navButtons = document.querySelector('.buttons');
const logo = document.querySelector('.logo');

// Create hamburger button
const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = '<span></span><span></span><span></span>';
nav.appendChild(hamburger);

// Toggle menu on hamburger click
hamburger.addEventListener('click', () => {
    navButtons.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when a link is clicked (for mobile)
document.querySelectorAll('.buttons a').forEach(link => {
    link.addEventListener('click', () => {
        navButtons.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Add some responsive behavior for window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navButtons.classList.remove('active');
        hamburger.classList.remove('active');
    }
});
