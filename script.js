document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    document.querySelector('.menu-toggle').addEventListener('click', () => {
      navbar.classList.toggle('hidden');
    });
  
    const sunflowers = document.querySelectorAll('.sunflower');
  
    sunflowers.forEach(sunflower => {
      sunflower.addEventListener('mouseenter', () => {
        sunflower.style.transform = 'scale(1.1)';
      });
  
      sunflower.addEventListener('mouseleave', () => {
        sunflower.style.transform = 'scale(1)';
      });
    });
  });
  
  // script.js

    function toggleMenu() {
        const nav = document.getElementById("main-nav");
        nav.classList.toggle("hidden");
    }
  