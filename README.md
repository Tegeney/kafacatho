# Kafa Catholic Martyrs Memorial Primary School Website

A modern, responsive website for Kafa Catholic Martyrs Memorial Primary School, showcasing student achievements, school news, and providing a platform for community engagement.

## Features

- Modern, responsive design
- Dynamic student showcase
- News and events section
- Image gallery
- Contact form
- Mobile-friendly navigation
- Smooth scrolling and animations
- Accessibility features

## Technologies Used

- HTML5
- CSS3 (with modern features like CSS Grid and Flexbox)
- JavaScript (ES6+)
- Font Awesome icons
- Google Fonts

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/kafacatho.git
   cd kafacatho
   ```

2. Create the following directory structure:
   ```
   kafacatho/
   ├── images/
   │   ├── students/
   │   ├── news/
   │   └── gallery/
   ├── index.html
   ├── styles.css
   ├── script.js
   └── README.md
   ```

3. Add your images to the appropriate directories:
   - Student photos in `images/students/`
   - News images in `images/news/`
   - Gallery images in `images/gallery/`

4. Open `index.html` in your web browser to view the website.

## Customization

### Adding Students
Edit the `students` object in `script.js` to add or modify student information:
```javascript
const students = {
    grade6: [
        {
            name: "Student Name",
            rank: "Rank - Achievement",
            description: "Student description",
            image: "images/students/student-image.jpg"
        }
    ]
};
```

### Adding News
Edit the `newsItems` array in `script.js` to add or modify news items:
```javascript
const newsItems = [
    {
        title: "News Title",
        date: "Date",
        description: "News description",
        image: "images/news/news-image.jpg"
    }
];
```

### Adding Gallery Items
Edit the `galleryItems` array in `script.js` to add or modify gallery items:
```javascript
const galleryItems = [
    {
        image: "images/gallery/image.jpg",
        caption: "Image caption"
    }
];
```

## Browser Support

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any queries or support, please contact:
- Email: info@kafacatholic.edu.et
- Phone: +251 XXX XXX XXX
- Address: Kafa Catholic Martyrs Memorial Primary School, Kafa, Ethiopia