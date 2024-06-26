const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links"); 
const menuBtnIcon = menuBtn.querySelector("i"); 
const serviziEl = document.querySelector('.servizi-details')
const langMenuEl = document.querySelector('.selected-lang')
let langMenu = document.querySelector('.lang-menu'); 
let langEl = document.querySelector('.lang')
let isLangSelected = false; 
let googleTranslateEl = document.getElementById('google_translate_element'); 
menuBtn.addEventListener("click", (e) => { navLinks.classList.toggle("open"); const isOpen = navLinks.classList.contains("open"); menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line"); }); navLinks.addEventListener("click", (e) => {
    console.log(e.target); if (!e.target.closest(".lang-menu")) { navLinks.classList.remove("open"); menuBtnIcon.setAttribute("class", "ri-menu-line"); }
    if (!e.target.closest("#google_translate_element")) { navLinks.classList.remove("open"); menuBtnIcon.setAttribute("class", "ri-menu-line"); }
}); langMenuEl.addEventListener("click", (e) => { e.stopPropagation(); googleTranslateEl.classList.toggle('open'); }); function getSelectedLanguageCode() { var selectedLanguageElement = document.querySelector('.goog-te-combo option:checked'); var selectedLanguageCode = selectedLanguageElement.getAttribute('value'); isLangSelected = true; return selectedLanguageCode; }
const scrollRevealOption = { distance: "150px", origin: "bottom", duration: 1500, }; 
ScrollReveal().reveal(".header__container .section__subheader", { ...scrollRevealOption, }); 
ScrollReveal().reveal(".header__container h1", { ...scrollRevealOption, delay: 500, }); 
ScrollReveal().reveal(".header__container h2", { ...scrollRevealOption, delay: 500, }); 
ScrollReveal().reveal("#appartamenti h2", { ...scrollRevealOption, delay: 500, }); 
ScrollReveal().reveal("#card-1", { ...scrollRevealOption, delay: 500, }); 
ScrollReveal().reveal("#card-2", { ...scrollRevealOption, delay: 500, }); 
ScrollReveal().reveal("#card-3", { ...scrollRevealOption, delay: 500, }); 
ScrollReveal().reveal("#card-4", { ...scrollRevealOption, delay: 500, }); 
ScrollReveal().reveal("#servizi h2", { ...scrollRevealOption, delay: 500, }); 
ScrollReveal().reveal(".servizio-image-1", { ...scrollRevealOption, delay: 500, }); 
ScrollReveal().reveal(".servizio-image-2", { ...scrollRevealOption, delay: 700, }); 
ScrollReveal().reveal(".servizio-image-3", { ...scrollRevealOption, delay: 900, }); 
ScrollReveal().reveal("#prodotti h2", { ...scrollRevealOption, delay: 500, }); 
ScrollReveal().reveal("#flip-card-1", { ...scrollRevealOption, delay: 700, }); 
ScrollReveal().reveal("#flip-card-2", { ...scrollRevealOption, delay: 900, }); 
ScrollReveal().reveal("#flip-card-3", { ...scrollRevealOption, delay: 1100, }); 
ScrollReveal().reveal("#flip-card-4", { ...scrollRevealOption, delay: 1300, }); 
ScrollReveal().reveal("#escursioni h2", { ...scrollRevealOption, delay: 500, }); 
ScrollReveal().reveal("#escursione-passione_mare", { ...scrollRevealOption, delay: 700, }); 
ScrollReveal().reveal("#escursione-a_tutta_natura", { ...scrollRevealOption, delay: 900, });
ScrollReveal().reveal("#yoga-angelica", { ...scrollRevealOption, delay: 1100, });

 serviziEl.addEventListener("click", function (e) {
    if (e.target.classList.contains('servizio-button')) {
        let buttonData = e.target.dataset.button; let servizioItemEL = document.querySelector(`.servizi-item[data-service="${buttonData}"]`); let servizioImageEl = servizioItemEL.querySelector('div div')
        let servizioTitleToShow = document.querySelector(`.servizio-title[data-description="${buttonData}"]`); if (servizioTitleToShow) {
            console.log(servizioImageEl)
            console.log(servizioItemEL)
            let serviziTitles = document.querySelectorAll('.servizio-title'); let buttonsEls = document.querySelectorAll('.servizio-button'); buttonsEls.forEach(btn => { if (btn.dataset.button != buttonData) { btn.style.display = "block" } })
            serviziTitles.forEach(function (servizioTitle) { servizioTitle.style.display = 'none'; }); servizioTitleToShow.style.display = 'block'; e.target.style.display = 'none'
        }
    }
}); console.log(serviziEl)
function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'it', includedLanguages: 'en,de,fr,es,nl,it' }, 'google_translate_element') }


