document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const responseDiv = document.getElementById('response');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate form fields
        if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
            responseDiv.textContent = 'Please fill in all fields.';
            responseDiv.style.color = 'red';
            return;
        }

        // Simulate form submission (you can replace this with actual form submission logic)
        setTimeout(function() {
            responseDiv.textContent = 'Message sent successfully!';
            responseDiv.style.color = 'green';
            contactForm.reset();
        }, 1000);
    });
});
