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


// TIMELINE 

$(function(){

    window.sr = ScrollReveal();
  
    if ($(window).width() < 768) {
  
        if ($('.timeline-content').hasClass('js--fadeInLeft')) {
            $('.timeline-content').removeClass('js--fadeInLeft').addClass('js--fadeInRight');
        }
  
        sr.reveal('.js--fadeInRight', {
          origin: 'right',
          distance: '300px',
          easing: 'ease-in-out',
          duration: 200,
        });
  
    } else {
        
        sr.reveal('.js--fadeInLeft', {
          origin: 'left',
          distance: '300px',
            easing: 'ease-in-out',
          duration: 800,
        });
  
        sr.reveal('.js--fadeInRight', {
          origin: 'right',
          distance: '300px',
          easing: 'ease-in-out',
          duration: 800,
        });
  
    }
    
    sr.reveal('.js--fadeInLeft', {
          origin: 'left',
          distance: '300px',
            easing: 'ease-in-out',
          duration: 800,
        });
  
        sr.reveal('.js--fadeInRight', {
          origin: 'right',
          distance: '300px',
          easing: 'ease-in-out',
          duration: 800,
        });
  
  
  });