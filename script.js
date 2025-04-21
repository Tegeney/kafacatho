// Color Switcher Functionality
const styleSwitcherToggler = document.querySelector('.style-switcher-toggler');
const styleSwitcher = document.querySelector('.style-switcher');
const colorItems = document.querySelectorAll('.color-item');

// Toggle style switcher
styleSwitcherToggler.addEventListener('click', () => {
    styleSwitcher.classList.toggle('open');
});

// Hide style switcher on scroll
window.addEventListener('scroll', () => {
    if(styleSwitcher.classList.contains('open')) {
        styleSwitcher.classList.remove('open');
    }
});

// Theme Colors
function setActiveColorItem() {
    colorItems.forEach(item => {
        item.classList.remove('active');
        if(item.dataset.theme === document.body.dataset.theme) {
            item.classList.add('active');
        }
    });
}

// Set initial theme
const savedTheme = localStorage.getItem('theme') || 'default';
document.body.dataset.theme = savedTheme;
setActiveColorItem();

// Theme color change
colorItems.forEach(item => {
    item.addEventListener('click', () => {
        const theme = item.dataset.theme;
        document.body.dataset.theme = theme;
        localStorage.setItem('theme', theme);
        setActiveColorItem();
    });
});

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

// Mobile Menu Toggle with Touch Support
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('menu-open');
        
        // Update ARIA attributes
        const isExpanded = mobileMenuBtn.classList.contains('active');
        mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
    });
    
    // Add touch event for better mobile experience
    mobileMenuBtn.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent double-tap zoom on mobile
    });
}

// Close mobile menu when clicking outside or on a link
document.addEventListener('click', (e) => {
    if (mobileMenuBtn && navLinks) {
        if (!e.target.closest('.nav-links') && !e.target.closest('.mobile-menu-btn')) {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    }
});

// Close mobile menu when clicking a link
if (navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
    });
}

// Skip Link Functionality with Focus Management
if (skipLink && mainContent) {
    skipLink.addEventListener('click', (e) => {
        e.preventDefault();
        mainContent.focus();
        mainContent.scrollIntoView({ behavior: 'smooth' });
        
        // Add focus styles temporarily
        mainContent.classList.add('focus-visible');
        setTimeout(() => {
            mainContent.classList.remove('focus-visible');
        }, 2000);
    });
}

// Smooth Scroll with Offset for Fixed Header
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = header ? header.offsetHeight : 0;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu after clicking a link
            if (mobileMenuBtn && navLinks) {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        }
    });
});

// Form Validation and Submission with Mobile Keyboard Support
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
        
        // Prevent zoom on focus for iOS
        if (input.type === 'text' || input.type === 'email' || input.type === 'tel') {
            input.style.fontSize = '16px';
        }
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
                
                // Scroll to top of form on mobile
                if (window.innerWidth < 768) {
                    contactForm.scrollIntoView({ behavior: 'smooth' });
                }
            } catch (error) {
                showNotification('Error sending message. Please try again.', 'error');
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        }
    });
}

// Input Validation Helper with Mobile-Friendly Messages
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
    } else if (input.type === 'tel' && input.value) {
        const phoneRegex = /^[0-9+\-\s()]{10,}$/;
        if (!phoneRegex.test(input.value)) {
            isValid = false;
            errorMessage = 'Please enter a valid phone number';
        }
    }
    
    if (errorElement) {
        errorElement.textContent = errorMessage;
        input.classList.toggle('error', !isValid);
        
        // Announce error to screen readers
        if (!isValid) {
            const announcement = document.createElement('div');
            announcement.setAttribute('aria-live', 'polite');
            announcement.setAttribute('aria-atomic', 'true');
            announcement.textContent = errorMessage;
            document.body.appendChild(announcement);
            setTimeout(() => announcement.remove(), 1000);
        }
    }
    
    return isValid;
}

// Notification System with Mobile Positioning
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Position notification based on screen size
    if (window.innerWidth < 768) {
        notification.style.bottom = '20px';
        notification.style.left = '50%';
        notification.style.transform = 'translateX(-50%)';
    } else {
        notification.style.top = '20px';
        notification.style.right = '20px';
    }
    
    document.body.appendChild(notification);
    
    // Trigger reflow
    notification.offsetHeight;
    
    notification.classList.add('show');
    
    // Add touch event for mobile dismissal
    notification.addEventListener('touchstart', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Grade Tabs Functionality with Touch Support
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
        
        // Add touch event for better mobile experience
        tab.addEventListener('touchstart', (e) => {
            e.preventDefault(); // Prevent double-tap zoom
        });
    });
}

// Intersection Observer for Animations with Mobile Optimization
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Optimize for mobile by reducing animation complexity
            if (window.innerWidth < 768) {
                entry.target.style.transition = 'opacity 0.5s ease';
            }
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px' // Adjust for mobile viewport
});

// Add animation classes to elements
document.querySelectorAll('.program-card, .facility-card, .student-card, .news-card').forEach(element => {
    animateOnScroll.observe(element);
});

// Lazy Loading Images with Mobile Optimization
const lazyImages = document.querySelectorAll('img[data-src]');
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            
            // Add loading animation
            img.style.opacity = '0';
            
            // Load image
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            
            // Fade in image when loaded
            img.onload = () => {
                img.style.opacity = '1';
                img.style.transition = 'opacity 0.5s ease';
            };
            
            observer.unobserve(img);
        }
    });
}, {
    rootMargin: '50px 0px' // Load images slightly before they come into view
});

lazyImages.forEach(img => imageObserver.observe(img));

// Header Scroll Effect with Mobile Optimization
let lastScroll = 0;
let scrollTimeout;

window.addEventListener('scroll', () => {
    // Clear previous timeout
    clearTimeout(scrollTimeout);
    
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
    
    // Add a class after scrolling stops (for mobile)
    scrollTimeout = setTimeout(() => {
        header.classList.add('scroll-end');
    }, 150);
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
    
    // Add touch-action to improve scrolling on mobile
    document.body.style.touchAction = 'manipulation';
    
    // Add passive event listeners for better scroll performance
    window.addEventListener('scroll', () => {}, { passive: true });
    window.addEventListener('touchmove', () => {}, { passive: true });

    // Add fade-in class to important elements
    const fadeElements = document.querySelectorAll('.hero, .features, .welcome, .top-students, .school-building, .learning-stories');
    fadeElements.forEach(element => {
        element.classList.add('fade-in');
    });

    // Create an array of promises for all images to load
    const imagePromises = Array.from(document.images).map(img => {
        if (img.complete) {
            return Promise.resolve();
        } else {
            return new Promise(resolve => {
                img.addEventListener('load', resolve);
                img.addEventListener('error', resolve); // Handle error cases as well
            });
        }
    });

    // Wait for all images to load
    Promise.all(imagePromises)
        .then(() => {
            // Remove loader
            const loader = document.querySelector('.loader-wrapper');
            loader.classList.add('fade-out');
            
            // Show body content
            document.body.classList.add('loaded');

            // Add visible class to fade-in elements with delay
            setTimeout(() => {
                fadeElements.forEach((element, index) => {
                    setTimeout(() => {
                        element.classList.add('visible');
                    }, index * 200); // Stagger the animations
                });
            }, 500);

            // Remove loader from DOM after animation
            setTimeout(() => {
                loader.remove();
            }, 1000);
        });
});

// Intersection Observer for fade-in elements
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once visible
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
}); 