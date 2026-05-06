let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

document.querySelector('#info-btn').onclick = () =>{
    contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
    contactInfo.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    contactInfo.classList.remove('active');
}

// ============================
// CURSOR GLOW SYSTEM
// ============================

const glow = document.createElement("div");
glow.className = "cursor-glow";
document.body.appendChild(glow);

let x = 0, y = 0;

document.addEventListener("mousemove", (e) => {
  x = e.clientX;
  y = e.clientY;
});

function animateCursor() {
  glow.style.left = x + "px";
  glow.style.top = y + "px";
  requestAnimationFrame(animateCursor);
}

animateCursor();

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    }
  });
}, {
  threshold: 0.25
});

sections.forEach(sec => observer.observe(sec));

document.addEventListener("mousemove", (e) => {
  document.body.style.setProperty("--x", e.clientX + "px");
  document.body.style.setProperty("--y", e.clientY + "px");
});

// ============================
// ELITE PARALLAX ENGINE
// ============================

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  document.querySelectorAll(".home .slide").forEach((slide) => {
    slide.style.transform = `scale(1.05) translateY(${value * 0.2}px)`;
  });

  document.querySelectorAll("section").forEach((sec, i) => {
    sec.style.transform = `translateY(${value * (0.02 * i)}px)`;
  });
});

var swiper = new Swiper(".home-slider", {
  loop: true,
  centeredSlides: true,
  autoplay:{ delay: 3500,},
  grabCursor: true,
  speed: 1400,
  spaceBetween: 40,
  effect: "slide",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

var reviews = new Swiper(".reviews-slider", {
  loop: true,
  centeredSlides: true,
  autoplay:{ delay: 3500,},
  spaceBetween: 30,
  speed: 1000,
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 2.2 }
  }
});

var logo = new Swiper(".logo-slider", {
  loop: true,
  autoplay:{ delay: 3500,},
  centeredSlides: true,
  spaceBetween: 10,
  speed: 1000,
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 2.2 }
  }
});

var swiper = new Swiper(".blogs-slider", {
    loop:true,
    autoplay:{ delay: 3500,},
    grabCursor:true,
    centeredSlides: true,
    spaceBetween: 10,
    breakpoints:{
        640:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        991:{
            slidesPerView: 3,
        },
    },
});

var homeSwiper = new Swiper(".home-slider", {
    loop: true,
    autoplay: {
        delay: 3500,
    },
    on: {
        slideChange: function () {
            // document.querySelectorAll('.bg-video').forEach(video => {
            //     video.pause();
            // });

            let activeSlide = document.querySelector('.swiper-slide-active .bg-video');
            if (activeSlide) activeSlide.play();
        }
    }
});

window.addEventListener("load", () => {
    document.querySelectorAll(".bg-video").forEach(video => {
        video.muted = true;
        video.play().catch(() => {});
    });
});

var projectBg = new Swiper(".project-bg", {
    loop: true,
    effect: "fade",
    autoplay: {
        delay: 300,
        disableOnInteraction: false,
    },
});