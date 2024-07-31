//  scroll animation Effect
AOS.init({
    once: true
});

// nav handler
const menu_btn = document.getElementById('menu_btn');
const close_menu = document.getElementById('close_menu');
const menu_drop = document.querySelector('.menu_drop');

menu_btn.addEventListener('click', () => {
    menu_btn.classList.toggle('active')
    menu_drop.classList.toggle('active')
})

close_menu.addEventListener('click', () => {
    menu_drop.classList.remove('active')
})



// swiper js
const swiper1 = new Swiper('#swiper1', {
    direction: 'horizontal',
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Menambahkan efek fade
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    }
});


// copy address

const copyAddress = document.querySelector('.copy-box');
let text = document.querySelector('.copy-box__text');
let btn = document.querySelector('.copy-box__btn');
let btnText = btn.textContent;
let timeout;

copyAddress.addEventListener('click', () => {
    navigator.clipboard.writeText(text.textContent).then(function () {
        btn.textContent = 'Copied';

        clearTimeout(timeout);
        timeout = setTimeout(function () {
            btn.textContent = btnText;
        }, 2000);
    }).catch(function (err) {
        console.error('Failed to copy text: ', err);
    });

})
