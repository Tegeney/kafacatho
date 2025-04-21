// Sample data for students
const students = {
    grade6: [
        {
            name: "Betelhem",
            rank: "1st - Top in Math",
            description: "Betelhem excels in mathematics, solving complex problems with ease. She loves tutoring peers and aspires to be an engineer.",
            image: "images/students/betelhem.jpg"
        },
        // Add more students here
    ],
    grade8: [
        {
            name: "Lidya",
            rank: "1st - Top in Science",
            description: "Lidya is a science star, fascinated by biology and chemistry. She leads class projects and wants to be a researcher.",
            image: "images/students/lidya.jpg"
        },
        // Add more students here
    ]
};

// Sample data for news
const newsItems = [
    {
        title: "Annual Science Fair 2025",
        date: "April 15, 2025",
        description: "Join us for an exciting day of experiments and discoveries at our Annual Science Fair.",
        image: "images/news/science-fair.jpg"
    },
    {
        title: "Graduation Ceremony",
        date: "June 20, 2025",
        description: "Celebrating our Grade 8 stars as they complete their primary education journey.",
        image: "images/news/graduation.jpg"
    },
    {
        title: "Parent-Teacher Meetings",
        date: "May 5-7, 2025",
        description: "Schedule your appointment to discuss your child's progress and achievements.",
        image: "images/news/meeting.jpg"
    }
];

// Sample data for gallery
const galleryItems = [
    {
        image: "images/gallery/classroom.jpg",
        caption: "Students in Science Class"
    },
    {
        image: "images/gallery/sports.jpg",
        caption: "School Sports Day"
    },
    {
        image: "images/gallery/library.jpg",
        caption: "School Library"
    },
    // Add more gallery items here
];

// Function to populate student cards
function populateStudentCards() {
    const grade6Container = document.querySelector('#students .grade-section:first-child .rank-group');
    const grade8Container = document.querySelector('#students .grade-section:last-child .rank-group');

    students.grade6.forEach((student, index) => {
        const card = createStudentCard(student, index + 1);
        grade6Container.appendChild(card);
    });

    students.grade8.forEach((student, index) => {
        const card = createStudentCard(student, index + 1);
        grade8Container.appendChild(card);
    });
}

// Function to create a student card
function createStudentCard(student, rank) {
    const card = document.createElement('div');
    card.className = 'student-card';
    
    if (rank <= 3) {
        const badge = document.createElement('div');
        badge.className = 'top-3-badge';
        badge.textContent = rank;
        card.appendChild(badge);
    }

    card.innerHTML += `
        <div class="student-img-container">
            <img src="${student.image}" alt="${student.name}" class="student-img" loading="lazy">
        </div>
        <h3 class="student-name">${student.name}</h3>
        <p class="student-rank">${student.rank}</p>
        <p class="description">${student.description}</p>
    `;

    return card;
}

// Function to populate news section
function populateNews() {
    const newsContainer = document.querySelector('.news-grid');
    
    newsItems.forEach(news => {
        const card = document.createElement('div');
        card.className = 'news-card';
        card.innerHTML = `
            <img src="${news.image}" alt="${news.title}" class="news-image">
            <div class="news-content">
                <h3>${news.title}</h3>
                <span class="news-date">${news.date}</span>
                <p>${news.description}</p>
            </div>
        `;
        newsContainer.appendChild(card);
    });
}

// Function to populate gallery
function populateGallery() {
    const galleryContainer = document.querySelector('.gallery');
    
    galleryItems.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.caption}">
            <div class="gallery-caption">${item.caption}</div>
        `;
        galleryContainer.appendChild(galleryItem);
    });
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', Object.fromEntries(formData));
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateStudentCards();
    populateNews();
    populateGallery();
    
    // Add form submission handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Add scroll event listener for navbar
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.nav');
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // Add mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}); 