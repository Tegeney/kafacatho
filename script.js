// Sample data for students
const students = {
    grade6: [
        {
            name: "Betelhem",
            rank: "1st - Top in Math",
            description: "Betelhem excels in mathematics, solving complex problems with ease. She loves tutoring peers and aspires to be an engineer.",
            image: "images/k.jpg"
        },
        {
            name: "Dawit",
            rank: "2nd - Highest Overall",
            description: "Dawit shines in all subjects, always eager to learn more. He enjoys science experiments and dreams of becoming a doctor.",
            image: "images/k.jpg"
        },
        {
            name: "Meron",
            rank: "3rd - Top in English",
            description: "Meron is a star in English, writing amazing essays. She loves reading novels and wants to be a journalist.",
            image: "images/k.jpg"
        }
    ],
    grade8: [
        {
            name: "Lidya",
            rank: "1st - Top in Science",
            description: "Lidya is a science star, fascinated by biology and chemistry. She leads class projects and wants to be a researcher.",
            image: "images/k.jpg"
        },
        {
            name: "Samuel",
            rank: "2nd - Best Effort",
            description: "Samuel puts in amazing effort, improving every day. He's passionate about art and history, often sketching Ethiopian landmarks.",
            image: "images/k.jpg"
        },
        {
            name: "Helen",
            rank: "3rd - Top in Math",
            description: "Helen excels in math, tackling equations with confidence. She loves puzzles and dreams of being a mathematician.",
            image: "images/k.jpg"
        }
    ]
};

// Sample data for news
const newsItems = [
    {
        title: "Annual Science Fair 2025",
        date: "April 15, 2025",
        description: "Join us for an exciting day of experiments and discoveries at our Annual Science Fair. Students will showcase innovative projects in biology, chemistry, and physics.",
        image: "images/k.jpg"
    },
    {
        title: "Graduation Ceremony",
        date: "June 20, 2025",
        description: "Celebrating our Grade 8 stars as they complete their primary education journey. Join us for this special occasion!",
        image: "images/k.jpg"
    },
    {
        title: "Parent-Teacher Meetings",
        date: "May 5-7, 2025",
        description: "Schedule your appointment to discuss your child's progress and achievements. Your involvement makes a difference!",
        image: "images/k.jpg"
    }
];

// Sample data for gallery
const galleryItems = [
    {
        image: "images/k.jpg",
        caption: "Students in Science Class"
    },
    {
        image: "images/k.jpg",
        caption: "School Sports Day"
    },
    {
        image: "images/k.jpg",
        caption: "School Library"
    },
    {
        image: "images/k.jpg",
        caption: "Cultural Day Celebration"
    },
    {
        image: "images/k.jpg",
        caption: "Mathematics Competition"
    },
    {
        image: "images/k.jpg",
        caption: "Art Exhibition"
    }
];

// DOM Elements
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const skipLink = document.querySelector('.skip-link');
const mainContent = document.querySelector('main');
const contactForm = document.querySelector('.contact-form');
const gradeTabs = document.querySelectorAll('.tab-btn');
const studentCards = document.querySelectorAll('.student-card');
const header = document.querySelector('.main-header');

// Mobile Menu Toggle
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (mobileMenuBtn && navLinks) {
        if (!e.target.closest('.nav-links') && !e.target.closest('.mobile-menu-btn')) {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    }
});

// Skip Link Functionality
if (skipLink && mainContent) {
    skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        mainContent.focus();
        mainContent.scrollIntoView({ behavior: 'smooth' });
    });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking a link
            if (mobileMenuBtn && navLinks) {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
            }
        }
    });
});

// Form Validation and Submission
if (contactForm) {
    const formInputs = contactForm.querySelectorAll('input, textarea');
    
    // Real-time validation
    formInputs.forEach(input => {
        input.addEventListener('input', () => {
            validateInput(input);
        });
        
        input.addEventListener('blur', () => {
            validateInput(input);
        });
    });
    
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        let isValid = true;
        formInputs.forEach(input => {
            if (!validateInput(input)) {
                isValid = false;
            }
        });
        
        if (isValid) {
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            try {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Sending...';
                
                // Simulate form submission
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                showNotification('Message sent successfully!', 'success');
                contactForm.reset();
            } catch (error) {
                showNotification('Error sending message. Please try again.', 'error');
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        }
    });
}

// Input Validation Helper
function validateInput(input) {
    const errorElement = input.parentElement.querySelector('.error-message');
    let isValid = true;
    let errorMessage = '';
    
    if (input.required && !input.value.trim()) {
        isValid = false;
        errorMessage = 'This field is required';
    } else if (input.type === 'email' && input.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
            isValid = false;
            errorMessage = 'Please enter a valid email address';
        }
    }
    
    if (errorElement) {
        errorElement.textContent = errorMessage;
        input.classList.toggle('error', !isValid);
    }
    
    return isValid;
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Trigger reflow
    notification.offsetHeight;
    
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Grade Tabs Functionality
if (gradeTabs.length > 0) {
    gradeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            gradeTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Filter student cards based on grade
            const grade = tab.dataset.grade;
            studentCards.forEach(card => {
                if (grade === 'all' || card.dataset.grade === grade) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Intersection Observer for Animations
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.1
});

// Add animation classes to elements
document.querySelectorAll('.program-card, .facility-card, .student-card, .news-card').forEach(element => {
    animateOnScroll.observe(element);
});

// Lazy Loading Images
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));

// Header Scroll Effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll Down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll Up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Add active class to current navigation item
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
    
    // Initialize first grade tab
    if (gradeTabs.length > 0) {
        gradeTabs[0].click();
    }
    
    // Add loading="lazy" to all images that don't have it
    document.querySelectorAll('img:not([loading])').forEach(img => {
        img.setAttribute('loading', 'lazy');
    });
}); 