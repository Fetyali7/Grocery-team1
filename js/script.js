let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');

    cart.classList.remove('active');
    navbar.classList.remove('active');
    login.classList.remove('active');
}

let cart = document.querySelector('.cart');

document.querySelector('#cart-btn').onclick = () => {
    cart.classList.toggle('active');

    searchForm.classList.remove('active');
    navbar.classList.remove('active');
    login.classList.remove('active');
}

let login = document.querySelector('.login-form');

document.querySelector('#log-btn').onclick = () => {
    login.classList.toggle('active');

    searchForm.classList.remove('active');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');

    searchForm.classList.remove('active');
    cart.classList.remove('active');
    login.classList.remove('active');
}

let aisle = document.querySelector('.aisles-menu');

document.querySelector('#aisles-btn').onclick = () => {
    aisle.classList.toggle('active');

    searchForm.classList.remove('active');
    cart.classList.remove('active');
    login.classList.remove('active');
}









// date
const date = document.querySelector("#date");
date.innerHTML = new Date().getFullYear();