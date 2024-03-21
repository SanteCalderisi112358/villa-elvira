const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  ScrollReveal().reveal(".header__container .section__subheader", {
    ...scrollRevealOption,
  });
  
  ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".header__container h2", {
    ...scrollRevealOption,
    delay: 1000,
  });
  
  
  
  
  
  
  ScrollReveal().reveal("#card-1", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal("#card-2", {
    ...scrollRevealOption,
    delay: 1500,
  });
  ScrollReveal().reveal("#card-3", {
    ...scrollRevealOption,
    delay: 2000,
  });
  ScrollReveal().reveal("#card-4", {
    ...scrollRevealOption,
    delay: 2500,
  });

  