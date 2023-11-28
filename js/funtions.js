let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function mostrarSlide(index) {
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    slides[slideIndex].style.display = 'block';
}

function cambiarSlide(n) {
    mostrarSlide(slideIndex += n);
}

function iniciarSliderAutomatico() {
    setInterval(() => {
        cambiarSlide(1);
    }, 4000); // Cambiar slide cada 4 segundos
}

mostrarSlide(slideIndex);
iniciarSliderAutomatico();