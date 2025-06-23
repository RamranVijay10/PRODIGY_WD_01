
const navLinks = document.querySelectorAll('.navbar a');

const LoginBox = document.querySelector('.login-box');
const LoginLink = document.querySelector('.login-link');
const RegisterLink = document.querySelector('.register-link');


navLinks.forEach(link => {
    link.addEventListener('click', function () {

        navLinks.forEach(item => item.classList.remove('active'));


        this.classList.add('active');
    });
});

RegisterLink.addEventListener('click', () => {
    LoginBox.classList.add('active');
});
LoginLink.addEventListener('click', () => {
    LoginBox.classList.remove('active');
});