

var body = document.querySelector("body");
document.getElementById('log-inOrsign-up').addEventListener('click', function () {
    document.querySelector('.popup').style.display = 'flex';
    body.classList.add('body-special');
})

document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.popup').style.display = 'none';
    body.classList.remove('body-special');

})



const btnLogin = document.getElementById("button-login");
const btnSignup = document.getElementById("button-signup");
const login = document.getElementById("log-in");
const signup = document.getElementById("sign-up");

const spanLogin = document.querySelector(".button-login-span");
const spanSignup = document.querySelector(".button-signup-span");


function toggleActiveButton(activeButton, inactiveButton) {
    activeButton.classList.add("active");
    inactiveButton.classList.remove("active");
}


btnLogin.addEventListener("click", () => {
    login.style.display = "flex";
    signup.style.display = "none";
    toggleActiveButton(btnLogin, btnSignup);
});

btnSignup.addEventListener("click", () => {
    signup.style.display = "flex";
    login.style.display = "none";
    toggleActiveButton(btnSignup, btnLogin);
});


spanLogin.addEventListener("click", () => {
    login.style.display = "flex";
    signup.style.display = "none";
    toggleActiveButton(btnLogin, btnSignup);
});

spanSignup.addEventListener("click", () => {
    signup.style.display = "flex";
    login.style.display = "none";
    toggleActiveButton(btnSignup, btnLogin);
});



var inputEl = document.querySelector("#li-password");
var showEl = document.querySelector(".fa-eye");
var hideEl = document.querySelector(".fa-eye-slash");

showEl.addEventListener('click', () => {
    inputEl.type = "text";
    hideEl.classList.remove('hide');
    showEl.classList.add('hide');
});

hideEl.addEventListener('click', () => {
    inputEl.type = "password";
    hideEl.classList.add('hide');
    showEl.classList.remove('hide');
});



var su_inputEl = document.querySelector("#su-password");
var su_showEl = document.querySelector(".su-eye");
var su_hideEl = document.querySelector(".su-eye-slash");

su_showEl.addEventListener('click', () => {
    su_inputEl.type = "text";
    su_hideEl.classList.remove('su-hide');
    su_showEl.classList.add('su-hide');
});

su_hideEl.addEventListener('click', () => {
    su_inputEl.type = "password";
    su_hideEl.classList.add('su-hide');
    su_showEl.classList.remove('su-hide');
});