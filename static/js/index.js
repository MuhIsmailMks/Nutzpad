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

    { selector: ".ballon_left", duration: 4000, x: 100, y:200},  
    { selector: ".ballon_right", duration: 4000, x: -100, y:200},  

    { selector: ".token1", duration: 4000, x: 150, y:200},  
    { selector: ".token2", duration: 4000, x: -150, y:200},  
    { selector: ".token3", duration: 4000, x: 150, y:-200},  
    { selector: ".token4", duration: 4000, x: -150, y:-200},  
  
    { selector: ".stickyside", duration: 4000, x: 0, y:400},  

    { selector: ".image_roadmap", duration: 4000, x: 0, y:300},  
    { selector: ".map1", duration: 4000, x: 0, y:-500},  
    { selector: ".map2", duration: 4500, x: 0, y:-400},  
    { selector: ".map3", duration: 5000, x: 0, y:-300},  
    
    
    { selector: ".card_container", duration: 7000, x: -850, y:0, offset: -200 },  


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

// adjustXValue();
// window.addEventListener('resize', adjustXValue);

adjustXValue();
window.addEventListener('resize', () => {
    requestAnimationFrame(adjustXValue);
});

animations.forEach(animation => { 
    var tweenParams = { 
        duration: 1000, 
        // ease: "power2.inOut" 
    };

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

    let sceneParams = {
        triggerElement: animation.selector,
        duration: animation.duration
    };

    if (animation.hasOwnProperty('offset')) {
        sceneParams.offset = animation.offset; // Menambahkan offset jika ada
    }

    var scene = new ScrollMagic.Scene({
      triggerElement: animation.selector,
      duration: animation.duration, 
    })
    .setTween(tween)
    .addTo(controller);
});
 