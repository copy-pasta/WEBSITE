document.querySelectorAll('.transition-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent immediate navigation
        const body = document.body;
        body.classList.add('fade-out'); // Add the fade-out effect
        setTimeout(() => {
            window.location.href = this.href; // Navigate to the new page
        }, 500); // Match CSS transition duration
    });
});