const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

document.getElementById("nav").addEventListener("click", () => {
  document.getElementById("nav-area").style.transform = "translate(0)";
  document.getElementById("nav-overlay").style.display = "block";
});

document.getElementById("nav-overlay").addEventListener("click", async () => {
  document.getElementById("nav-area").style.transform = "translate(100%)";
  await sleep(500);
  document.getElementById("nav-overlay").style.display = "none";
});

document.getElementById("cross").addEventListener("click", async () => {
  document.getElementById("nav-area").style.transform = "translate(100%)";
  await sleep(500);
  document.getElementById("nav-overlay").style.display = "none";
});






let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

document.querySelectorAll(".image-slider img").forEach((images) => {
  images.onclick = () => {
    var src = images.getAttribute("src");
    document.querySelector(".main-home-image").src = src;
  };
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
  },
});