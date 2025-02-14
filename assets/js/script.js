// script.js

// Funcionalidad: Ocultar la navbar al hacer scroll hacia abajo y mostrarla al subir
document.addEventListener("DOMContentLoaded", function() {
  let prevScrollPos = window.pageYOffset;
  const header = document.querySelector('header');

  window.addEventListener('scroll', function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      // Al subir, se muestra la navbar
      header.style.top = "0";
    } else {
      // Al bajar, se oculta la navbar (ajusta el valor si la altura cambia)
      header.style.top = "-80px";
    }
    prevScrollPos = currentScrollPos;
  });
});
