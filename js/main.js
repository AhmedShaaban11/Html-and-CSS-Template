window.onload = () => {

  "use strict";

  // Classes
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
    constructor (nav, button) {
      this.nav = nav;
      this.button = button;
    }
    responsive() {
      this.button.onclick = () => {
        if (this.nav.style.display === "") {
          this.nav.style.display = "none";
        }
        if (this.nav.style.display === "none") {
          this.nav.style.display = "block";
          this.button.classList.add("arrow");
        } else {
          this.nav.style.display = "none";
          this.button.classList.remove("arrow");
        }
      };
    }
  }

  class Animations {
    constructor (element) {
      this.element = element;
    }
    showFromLeft() {
      this.element.style.animation = "show 1s ease-out forwards";
    }
    fadeIn() {
      if (this.element.constructor === HTMLElement) {
        this.element.style.animation = "fade-in 1s linear forwards";
      } else {
        this.element.forEach((elem) => {
          elem.style.animation = "fade-in 1s linear forwards";
        });
      }
    }
  }
  
  // Active on Nav links
  const navLinks = new ActiveLinks(document.querySelectorAll(".nav-links .link"));
  navLinks.active();
  
  // Toggle menu in small screens
  const menu = new ResNav(document.getElementById("nav-links"), document.getElementById("toggler"));
  menu.responsive();
  
  // About-us section animation
  const aboutUs = new Animations(document.getElementById("about-us"));
  aboutUs.showFromLeft();
  
  // Features section animation
  const features = new Animations(document.querySelectorAll(".feature"));
  features.fadeIn();

  // Gallery section animation
  const gallery = new Animations(document.getElementById("gallery"));
  gallery.fadeIn();

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

};
