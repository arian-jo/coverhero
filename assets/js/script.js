// script.js

document.addEventListener("DOMContentLoaded", function() {
  // Navbar: ocultar al hacer scroll hacia abajo y mostrar al subir
  let prevScrollPos = window.pageYOffset;
  const header = document.querySelector('header');

  window.addEventListener('scroll', function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      // Al subir, se muestra la navbar
      header.style.top = "0";
    } else {
      // Al bajar, se oculta la navbar
      header.style.top = "-80px";
    }
    prevScrollPos = currentScrollPos;
  });

  // Aquí NO usamos Swiper, porque el efecto es un mosaico animado con CSS
  // No es necesaria ninguna inicialización adicional para el mosaico.
});
