// Example using Intersection Observer API for scroll-based animations
const sections = document.querySelectorAll('section');

const options = {
    threshold: 0.2 // Trigger animation when 20% of the section is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Add submit event listener to contact form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent!');
});
