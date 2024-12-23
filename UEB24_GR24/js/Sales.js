function changeImage(element) {
    // Get the main image element by ID
    var mainImage = document.getElementById('mainImage');
    
    // Update the main image source with the clicked image's source
    var tempImage=mainImage.src;
    mainImage.src = element.src;
element.src=tempImage;
}



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