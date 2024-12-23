const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        
        if (answer.classList.contains('open')) {
            answer.classList.remove('open');
        } else {
            answer.classList.add('open');
        }
    });
});



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




var body = document.querySelector("body");
document.getElementById('log-inOrsign-up').addEventListener('click', function () {
    document.querySelector('.popup').style.display = 'flex';
    body.classList.add('body-special');
})

document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.popup').style.display = 'none';
    body.classList.remove('body-special');

})

var btn_login = document.getElementById("button-login");
var btn_signup = document.getElementById("button-signup");

var login = document.getElementById("log-in");
var signup = document.getElementById("sign-up");

btn_login.addEventListener('click', function () {
    signup.style.display = 'none';
    login.style.display = 'block';

})
btn_signup.addEventListener('click', function () {
    login.style.display = 'none';
    signup.style.display = 'block';
})