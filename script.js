//Toggling mobile menu

const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle){ navToggle.addEventListener('click', () => { navMenu.classList.add('show-menu')})};
if(navClose){ navClose.addEventListener('click', () => { navMenu.classList.remove('show-menu')})};

//Remove menu mobile when a link is clicked

const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

//GSAP

gsap.from('.home-img11', 1, {opacity: 0, y: 200, delay: .1});
gsap.from('.home-img14', 1, {opacity: 0, y: 200, delay: .5});
gsap.from('.home-img15', 1, {opacity: 0, y: 200, delay: .8});
gsap.from('.home-img16', 1, {opacity: 0, y: 200, delay: 1.1});
gsap.from('.home-img10', 1, {opacity: 0, y: 200, delay: 1.5, ease: "back.out(1.2)"});
gsap.from('.home-img5', 1, {opacity: 0, y: 200, delay: 2, ease: "bounce.out"});
gsap.from('.home-img8', 1, {opacity: 0, y: 200, delay: 2.5, ease: "bounce.out"});
gsap.from('.home-img3', 1, {opacity: 0, x: -100, rotation: -20, delay: 3, ease: "back.out(1.2)"});
gsap.from('.home-img2', 1, {opacity: 0, x: -100, rotation: -20, delay: 3.5, ease: "back.out(1.2)"});
gsap.from('.home-img1', 1, {opacity: 0, x: -100, rotation: -20, delay: 4, ease: "back.out(1.2)"});
gsap.from('.home-img6', 1, {opacity: 0, x: 100, rotation: 20, delay: 3.5, ease: "back.out(1.2)"});
gsap.from('.home-img9', 1, {opacity: 0, x: 100, rotation: 20, delay: 4, ease: "back.out(1.2)"});
gsap.from('.home-img7', 1, {opacity: 0, y: 200, delay: 4.5, ease: "bounce.out"});
gsap.from('.home-img4', 1, {opacity: 0, y: 200, delay: 5, ease: "bounce.out"});
gsap.from('.home-img13', 1, {opacity: 0, y: 200, delay: 5.5, ease: "back.out(1.2)"});
gsap.from('.home-img12', 1, {opacity: 0, y: 200, delay: 5.5, ease: "back.out(1.2)"});
gsap.from('.home-title', 1, {opacity: 0, y: 200, delay: 6, ease: "back.out(1.2)"});

/* 🎁 Drop-in Wishlist after animation */
setTimeout(() => {
    let wl = document.getElementById("wishlist");
    wl.style.opacity = "1";
    wl.style.pointerEvents = "auto";
    gsap.from(".wishlist-tags li", {
        y: -120,
        opacity: 0,
        duration: 1.2,
        ease: "bounce.out",
        stagger: 0.2,
    });
}, 6500);
