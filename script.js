let index = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    index += direction;

    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }

    const carousel = document.querySelector('.carousel');
    const offset = -index * 100;  // Desplazar la imagen al siguiente índice
    carousel.style.transform = `translateX(${offset}%)`;
}
