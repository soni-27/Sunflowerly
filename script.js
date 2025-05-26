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
  const nav = document.getElementById("menu");
  nav.classList.toggle("hidden");
}

// Hover effect that follows cursor
document.addEventListener("mousemove", function(e) {
  document.body.style.setProperty('--mouseX', `${e.clientX}px`);
  document.body.style.setProperty('--mouseY', `${e.clientY}px`);
});