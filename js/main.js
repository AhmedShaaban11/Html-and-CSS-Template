class ResNav {
  constructor (nav, links, button, overlay) {
    this.nav = nav;
    this.links = links;
    this.button = button;
    this.overlay = document.getElementById("body-overlay");
  }
  responsive() {
    this.button.onclick = () => {
      if (this.links.style.display === "") {
        this.links.style.display = "none";
      }
      if (this.links.style.display === "none") {
        this.nav.classList.add("fixed");
        this.links.style.display = "block";
        this.overlay.style.display = "block";
      } else {
        this.links.style.display = "none";
        this.overlay.style.display = "none";
        this.position();
      }
    };
  }
  position() {
    if (window.pageYOffset < 200 && this.links.style.display === "block") {
      this.nav.classList.add("fixed");
    } else if (window.pageYOffset > 200) {
      this.nav.classList.add("fixed");
    } else {
      this.nav.classList.remove("fixed");
    }
  }
  fixed() {
    window.addEventListener("load", () => this.position());
    window.addEventListener("scroll", () => this.position());
  }
}

// Active on Nav links
const navLinks = document.querySelectorAll(".nav-links .link");
navLinks.forEach((link) => {
  link.onclick = () => {
    navLinks.forEach((l) => {
      l.classList.remove("active");
    });
    link.classList.add("active");
  };
});

// Toggle menu in small screens
const menu = new ResNav();
menu.nav = document.getElementById("header-nav");
menu.links = document.getElementById("nav-links");
menu.button = document.getElementById("toggler");
menu.responsive();
menu.fixed();

// Gallery section animation
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
