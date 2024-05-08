document.addEventListener('DOMContentLoaded', function () {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarLinks = document.querySelector('.navbar-links');
    
    
    // Function to toggle the visibility of the navbar links
    function toggleNavbar() {
        navbarLinks.classList.toggle('open');
    }
    
    // Event listener to toggle the navbar links when the toggle button is clicked
    navbarToggle.addEventListener('click', function () {
        toggleNavbar();
    });
    
    // Event listener to close the navbar links when a link is clicked (optional)
    navbarLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            if (navbarLinks.classList.contains('open')) {
                toggleNavbar();
            }
        });
    });
});