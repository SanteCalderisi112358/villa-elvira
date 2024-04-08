const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");
const serviziEl = document.querySelector('.servizi-details')

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

  async function getAppartamenti(){
const response = await fetch("./apartments.json");
const data = await response.json();
console.log(data)


}

  getAppartamenti()

  serviziEl.addEventListener("click", function(e) {
    if (e.target.classList.contains('servizio-button')) {
        let buttonData = e.target.dataset.button;
        let servizioItemEL = document.querySelector(`.servizi-item[data-service="${buttonData}"]`);
        let servizioImageEl = servizioItemEL.querySelector('div div')
        let servizioTitleToShow = document.querySelector(`.servizio-title[data-description="${buttonData}"]`);
        if (servizioTitleToShow) {
          console.log(servizioImageEl)
          console.log(servizioItemEL)
            let serviziTitles = document.querySelectorAll('.servizio-title');
            let buttonsEls = document.querySelectorAll('.servizio-button');
            buttonsEls.forEach(btn =>{
              if(btn.dataset.button!=buttonData){
                btn.style.display = "block"
              }
            })
            serviziTitles.forEach(function(servizioTitle) {
                servizioTitle.style.display = 'none';                
            });
            servizioTitleToShow.style.display = 'block'; 
            e.target.style.display = 'none'
            
        }
    }
});


console.log(serviziEl)

function googleTranslateElementInit(){
  new google.translate.TranslateElement(
    {pageLanguage:'it'},
    'google_translate_element'
  )
}