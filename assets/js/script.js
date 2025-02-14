// script.js

// Ejecutar cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
  // Funcionalidad: Ocultar la navbar al hacer scroll hacia abajo y mostrarla al subir
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

  // Inicializar el carrusel de Swiper
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 5000, // 5 segundos entre slides
      disableOnInteraction: false,
    },
    effect: 'fade', // Efecto de desvanecimiento
    fadeEffect: {
      crossFade: true
    },
  });
});
