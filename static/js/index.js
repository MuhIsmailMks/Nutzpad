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



// animation

// animation scroll effect
// controller ScrollMagic
let controller = new ScrollMagic.Controller();
const animations = [ 
    { selector: ".plane_animation", duration: 4000, x: -200},  
    // { selector: ".token_images", duration: 4000, x: -100},   
];

function adjustXValue() {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1200) { 
      animations.forEach(animation => {
        if (animation.hasOwnProperty('x')) {  
          animation.x = animation.x * 4;
        }
        if (animation.hasOwnProperty('y')) { 
          animation.y = animation.y * 2;
        } 
        if (animation.hasOwnProperty('rotate')) {
          animation.rotate = animation.rotate * 1; 
        }
      });
    }
}

adjustXValue();
window.addEventListener('resize', adjustXValue);

animations.forEach(animation => { 
    var tweenParams = { duration: 300 };
    if (animation.hasOwnProperty('x')) {
      tweenParams.x = animation.x;
    }
    if (animation.hasOwnProperty('y')) {
      tweenParams.y = animation.y;
    }
    if (animation.hasOwnProperty('rotate')) {
      tweenParams.rotate = animation.rotate;
    }
    
    var tween = gsap.to(animation.selector, tweenParams);

    var scene = new ScrollMagic.Scene({
      triggerElement: animation.selector,
      duration: animation.duration
    })
    .setTween(tween)
    .addTo(controller);
});

