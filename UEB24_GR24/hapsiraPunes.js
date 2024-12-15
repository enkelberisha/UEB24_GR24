
function toggleNavOnScroll() {
    const nav = document.querySelector('nav');
    const hero = document.querySelector('.hero');

    window.addEventListener('scroll', () => {
        if (window.scrollY > hero.offsetHeight - nav.offsetHeight) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

}
document.addEventListener('DOMContentLoaded', toggleNavOnScroll);

function changeValueOnSlider() {
    const slider = document.getElementById('slider');
    const rangeValue = document.getElementById('rangeValue');
    rangeValue.textContent = slider.value;

}
document.getElementById('slider').addEventListener('input', changeValueOnSlider);

document.addEventListener('DOMContentLoaded', () => {
    const images = [
        //shto imazhe per slideshow ketu:
        'img/slideshow/slide-show-hangar1.jpg',
        'img/slideshow/slide-show-plane2.avif',
        'img/slideshow/slide-show-inside3.jpg',
        'img/slideshow/slide-show-plane4.jpg',
        '/UEB24_GR24/img/slideshow/sidle-show-plane5.jpg',
    ];
    let currentIndex = 0;

    const slideshowImage = document.getElementById('slideshow-image');

    const showNextImage = () => {
        currentIndex = (currentIndex + 1) % images.length;
        slideshowImage.src = images[currentIndex];
    };

   
    setInterval(showNextImage, 3000);
});


