document.querySelector('.smooth-scroll').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = this.getAttribute('href');
    
    // Optionally, scroll to a specific part of the page after loading
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});