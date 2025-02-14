// script.js

document.addEventListener("DOMContentLoaded", function() {
  // Navbar: ocultar al hacer scroll hacia abajo y mostrar al subir
  let prevScrollPos = window.pageYOffset;
  const header = document.querySelector('header');

  window.addEventListener('scroll', function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      header.style.top = "0";
    } else {
      header.style.top = "-80px";
    }
    prevScrollPos = currentScrollPos;
  });

  // No se requiere inicialización adicional para el mosaico, ya que se mueve con CSS.
});
