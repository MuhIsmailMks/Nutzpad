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

menu_drop.addEventListener('click', (e) => {
    // if (e.target.tagName === 'A') {
    //     e.preventDefault(); 
    //     menu_drop.classList.remove('active');
    // }
});


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

    { selector: ".ballon_left", duration: 4000, x: -100, y:200},  
    { selector: ".ballon_right", duration: 4000, x: 100, y:200},  

    { selector: ".token1", duration: 4000, x: 150, y:200},  
    { selector: ".token2", duration: 4000, x: -150, y:200},  
    { selector: ".token3", duration: 4000, x: 150, y:-200},  
    { selector: ".token4", duration: 4000, x: -150, y:-200},  

    { selector: ".image_roadmap_title", duration: 4000, x: 0, y:200},  
    { selector: ".image_roadmap", duration: 4000, x: 0, y:300},  
    { selector: ".map1", duration: 4000, x: 0, y:-500},  
    { selector: ".map2", duration: 4500, x: 0, y:-400},  
    { selector: ".map3", duration: 5000, x: 0, y:-300},    

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
window.addEventListener('resize', () => {
    requestAnimationFrame(adjustXValue);
});

animations.forEach(animation => { 
    var tweenParams = { 
        duration: 1000,  
        // ease: "power1"  
        ease: "power1"
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
        sceneParams.offset = animation.offset;  
    }

    var scene = new ScrollMagic.Scene({
      triggerElement: animation.selector,
      duration: animation.duration, 
    })
    .setTween(tween)
    .addTo(controller);
});





// memes
const randomBtn = document.querySelector(".cards_random");
const cards = document.querySelectorAll(".card .card-inner"); 
const imageCards = document.querySelectorAll(".card .card-back");
const aboutCards = document.querySelectorAll(".about_card");
const cards_container_slide = document.querySelector(".cards_container_slide");

const card1 = document.querySelector(".card._1 .card-back img");
const card2 = document.querySelector(".card._2 .card-back img");
const card3 = document.querySelector(".card._3 .card-back img");
const card4 = document.querySelector(".card._4 .card-back img");

const close_popUp = document.querySelector(".close_popUp");
const popUp_image = document.querySelector(".popUp_image");
const image_popUp = document.querySelector(".image_popUp");
  

let isClickable = true;
const debounceTime = 1000; // 5 seconds

// card random function
window.addEventListener('DOMContentLoaded', () => {
   
    let cardImages = [
        './static/images/meme/8-min.jpg', 
        './static/images/meme/9-min.jpg', 
        './static/images/meme/10-min.jpg', 
        './static/images/meme/11-min.jpg', 
        './static/images/meme/13-min.jpg', 
        './static/images/meme/14-min.jpg', 
        './static/images/meme/15-min.jpg', 
        './static/images/meme/16-min.jpg', 
        './static/images/meme/17-min.jpg', 
        './static/images/meme/18-min.jpg', 
        './static/images/meme/19-min.jpg', 
        './static/images/meme/20-min.jpg', 
        './static/images/meme/21-min.jpg', 
        './static/images/meme/24-min.jpg', 
        './static/images/meme/browser1.jpg', 
        './static/images/meme/browser2.png', 
        './static/images/meme/browser3.png', 
        './static/images/meme/browser4.png', 
        './static/images/meme/browser5.png', 
        './static/images/meme/browser6.jpg', 
        './static/images/meme/browser6.png', 
        './static/images/meme/gallery1.jpg', 
        './static/images/meme/gallery2.png', 
        './static/images/meme/token_right.jpg', 
    ];
  
    function cardRandom(){

        function shuffle(array) {
                let currentIndex = array.length, randomIndex;
            
                while (currentIndex != 0) {
            
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex--;
            
                    [array[currentIndex], array[randomIndex]] = [
                        array[randomIndex], array[currentIndex]];
                }

                    return array;
        } 
        

        let shuffledCardImage = shuffle(cardImages);
        let selectedImages = shuffledCardImage.slice(0, 4);

        cards_container_slide.classList.toggle('remove');

        if(cards_container_slide.classList.contains('remove')){
            cards_container_slide.style.transform = "translateX(-110%)";
            
        } else {
            cards_container_slide.style.transform = "translateX(0%)"; 

            cards.forEach(card => { 
                    let cardClosest = card.closest('.card')
                    cardClosest.classList.remove('is-flipped');   
            })
            

            card1.src = selectedImages[0]
            card2.src = selectedImages[1]
            card3.src = selectedImages[2]
            card4.src = selectedImages[3]   
            
             aboutCards.forEach((cardBtn,i) => { 
                cardBtn.dataset.set = selectedImages[i];
            })
        }

    }
 

    setTimeout(()=>{
        cards_container_slide.style.transform = "translateX(0%)"; 
    },1000)

    randomBtn.addEventListener('click', () => {
              
        if (!isClickable) return;
        isClickable = false;

           setTimeout(() => {
            isClickable = true;
        }, debounceTime); 
        cardRandom()

    
    });

    cards.forEach(card => {
            card.addEventListener('click', () => {
                let cardClosest = card.closest('.card')
                const cardAttr = cardClosest.getAttribute('data-set'); 
                cardClosest.classList.add('is-flipped');
                
                console.log(cardAttr);
 
 
                popUp_image.classList.remove('hidden');
                image_popUp.setAttribute('src', cardAttr)

            })
    });

   

    close_popUp.addEventListener('click', () => {
      popUp_image.classList.add('hidden')
    })
 
})