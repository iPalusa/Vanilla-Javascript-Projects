const next = document.getElementById('next');
const previous = document.getElementById('previous');
const slider = document.getElementById('slider');
const slide = document.querySelectorAll('.slide');

let currentIndex = 0;
const length = slide.length;

const showSlide = (index) => {
    if (index < 0){
        currentIndex = length - 1;
    } else if (index >= length){
        currentIndex = 0;
    } else currentIndex = index;

    const offset = -currentIndex * 100  + '%';
    slider.style.transform = 'translateX(' + offset + ')';
}

const nextSlide = () => {
    showSlide(currentIndex + 1);
}

const previousSlide = () => {
    showSlide(currentIndex - 1);
}