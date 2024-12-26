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






