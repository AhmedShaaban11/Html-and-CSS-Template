// Nav functionalities
const nav = document.getElementById("header-nav");
const navList = document.getElementById("nav-list");
const menuToggler = document.getElementById("toggler");
const bodyOverlay = document.getElementById("body-overlay");

// Fixed nav on scroll
function fixedPosition() {
  if (window.pageYOffset > 100 || navList.style.display === "block") {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
}

addEventListener("load", fixedPosition);
addEventListener("scroll", fixedPosition);

// Menu toggler on sm screens
menuToggler.addEventListener("click", () => {
  if (!navList.style.display || navList.style.display === "none") {
    nav.classList.add("fixed");
    navList.style.display = "block";
    bodyOverlay.style.display = "block";
  } else {
    navList.style.display = "none";
    bodyOverlay.style.display = "none";
    fixedPosition();
  }
});

bodyOverlay.addEventListener("click", () => {
  menuToggler.click();
});

// Active toggling between nav links
const navLinks = document.querySelectorAll(".nav-list .link");
navLinks.forEach((link) => {
  link.onclick = () => {
    navLinks.forEach((li) => {
      li.classList.remove("active");
    });
    link.classList.add("active");
  };
});

// Gallery show more button on sm screens
const gallery = {};
const galleryImages = document.querySelectorAll(".photo-hidden-sm");
const galleryToggleButton = document.getElementById("toggle-button");
galleryToggleButton.addEventListener("click", () => {
  galleryImages.forEach((img) => {
    if (!img.style.display || img.style.display === "none") {
      img.style.display = "inline";
      galleryToggleButton.querySelector("i").classList.replace("fa-arrow-down", "fa-arrow-up");
    } else {
      img.style.display = "none";
      galleryToggleButton.querySelector("i").classList.replace("fa-arrow-up", "fa-arrow-down");
    }
  });
});

// Testimonials section swiper
const swiper = new Swiper(".swiper-container", {
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
