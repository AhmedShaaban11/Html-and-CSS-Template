window.onload = () => {

  "use strict";

  // Functions
  const show = (variable) => variable.style.animation = "show 1s ease-out forwards";
  
  const fadeIn = (variable) => variable.style.animation = "fade-in 1s linear forwards";

  const arrFadeIn = (variable) => {
    let i = 0;
    variable.forEach((elem) => {
      elem.style.animation = `fade-in ${i}ms linear forwards`;
      i += 150;
    });
  };

  const linksActive = (arr) => {
    arr.forEach((elem) => {
      elem.onclick = () => {
        arr.forEach((e) => {
          e.classList.remove("active");
        });
        elem.classList.add("active");
      };
    });
  };

  

  // Active on Nav links
  const navLinks = document.querySelectorAll(".nav-links .link");
  linksActive(navLinks);

  // About-us section animation
  const aboutUs = document.getElementById("about-us");
  show(aboutUs);

  // Features section animation
  const featuresSection = document.getElementById("features"),
        features = document.querySelectorAll(".feature");  
  arrFadeIn(features);

  // Gallery section animation
  const gallery = document.getElementById("gallery");
  fadeIn(gallery);

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
