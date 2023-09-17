"use strict";

// Classes
class Animations {
  constructor (element) {
    this.element = element;
  }
  sectionPosition(e, animationName) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > (e.offsetTop + e.offsetHeight - window.innerHeight)) {
        e.style.animation = animationName;
      }
    });
  }
  fadeIn() {
    if (this.element.constructor === HTMLElement) {
      this.sectionPosition(this.element, "fade-in 1s linear forwards");
    } else {
      this.element.forEach((elem) => {
        this.sectionPosition(elem, "fade-in 1s linear forwards");
      });
    }
  }
}

class Counter {
  constructor (elements) {
    this.elements = elements;
  }
  counter() {
    this.elements.forEach((elem) => {
      let i = 0;
      let limit = +(elem.getAttribute("data-num"));
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > (elem.offsetTop + elem.offsetHeight - window.innerHeight)) {
          setInterval(() => {
            if (i < limit) {
              i++;
              elem.textContent = i;
            }
          }, 100);
        }
      });
    });    
  }
}

class ActiveLinks {
  constructor (elements) {
    this.elements = elements;
  }
  active() {
    this.elements.forEach((elem) => {
      elem.onclick = () => {
        this.elements.forEach((e) => {
          e.classList.remove("active");
        });
        elem.classList.add("active");
      };
    });
  }
}

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

class Gallery extends Animations {
  constructor (element, images, button, arrowIcon, toggleName) {
    super(element);
    this.images = images;
    this.button = button;
    this.arrowIcon = arrowIcon;
    this.toggleName = toggleName;
  }
  show() {
    this.button.onclick = () => {
      this.images.forEach((img) => {
        if (img.style.display === "") {
          img.style.display = "none";
        }
        if (img.style.display === "none") {
          img.style.display = "inline";
          this.arrowIcon.classList.replace("fa-arrow-down", "fa-arrow-up");
          this.toggleName.textContent = "Show Less";
        } else {
          img.style.display = "none";
          this.arrowIcon.classList.replace("fa-arrow-up", "fa-arrow-down");
          this.toggleName.textContent = "Show More";
        }
      });
    };
  }
}

// Active on Nav links
const navLinks = new ActiveLinks();
navLinks.elements = document.querySelectorAll(".nav-links .link");
navLinks.active();

// Toggle menu in small screens
const menu = new ResNav();
menu.nav = document.getElementById("header-nav");
menu.links = document.getElementById("nav-links");
menu.button = document.getElementById("toggler");
menu.responsive();
menu.fixed();

// Features section animation
const features = new Animations();
features.element = document.querySelectorAll(".feature");
features.fadeIn();

// Gallery section animation
const gallery = new Gallery();
gallery.element = document.getElementById("gallery");
gallery.images = document.querySelectorAll(".photo-hidden-sm");
gallery.button = document.getElementById("toggle-button");
gallery.arrowIcon = document.getElementById("arrow");
gallery.toggleName = document.getElementById("toggle-name");
gallery.fadeIn();
gallery.show();

// Progress section animation
const progress = new Counter();
progress.elements = document.querySelectorAll(".counter");
progress.counter();

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
