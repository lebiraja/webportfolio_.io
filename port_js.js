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
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetch form data
    const formData = new FormData(this);

    // Send form data to PHP script
    fetch('send_email.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Display success or error message
        if (data.status === 'success') {
            alert('Message sent successfully!');
            // Optionally, clear form fields
            this.reset();
        } else {
            alert('Failed to send message. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});
