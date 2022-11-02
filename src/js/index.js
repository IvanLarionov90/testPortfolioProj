'use strict';

const hamburger = document.querySelector('.hamburger'),
      menuClose = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
});
menuClose.addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
});

const expItems = document.querySelectorAll('.scale__fill'),
      percents = document.querySelectorAll('.percent');

expItems.forEach((el, i) => {
    el.style.width = percents[i].textContent;
});

