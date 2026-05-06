// menu button
let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menuBtn.onclick = () => {
    navbar.classList.toggle('active');
};

// search form toggle
let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.search-form');

searchBtn.onclick = () => {
    searchForm.classList.toggle('active');
};

//  login form toggle
let loginBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form');

loginBtn.onclick = () => {
    loginForm.classList.toggle('active');
};

// contact info toggle
let infoBtn = document.querySelector('#info-btn');
let contactInfo = document.querySelector('.contact-info');
let closeBtn = document.querySelector('#close-contact-info');

infoBtn.onclick = () => {
    contactInfo.classList.add('active');
};

closeBtn.onclick = () => {
    contactInfo.classList.remove('active');
};

// close everything on scroll
window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
};

// swiper sliders
var homeSwiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var reviewSwiper = new Swiper(".reviews-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    }
});

var blogSwiper = new Swiper(".blogs-slider", {
    loop: true,
    spaceBetween: 20,
    breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    }
});

let counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    let update = () => {
        let target = +counter.getAttribute('data-target');
        let current = +counter.innerText;

        let increment = target / 100;

        if(current < target){
            counter.innerText = Math.ceil(current + increment);
            setTimeout(update, 20);
        } else {
            counter.innerText = target;
        }
    };

    update();
});

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.style.transform = "scale(0.95)";
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 100);
    });
});


document.addEventListener("mousemove", (e) => {
  const glow = document.createElement("div");
  glow.style.position = "fixed";
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
  glow.style.width = "10px";
  glow.style.height = "10px";
  glow.style.background = "#00f5ff";
  glow.style.borderRadius = "50%";
  glow.style.pointerEvents = "none";
  glow.style.opacity = "0.5";
  document.body.appendChild(glow);

  setTimeout(() => glow.remove(), 300);
});

window.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});

