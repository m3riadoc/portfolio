const data = {
    "english": {
        "home": { content: "Home", useInnerHTML: false },
        "about": { content: "About", useInnerHTML: false },
        "portfolio": { content: "Portfolio", useInnerHTML: false },
        "contact": { content: "Contact", useInnerHTML: false },
        "text-about": { 
            content: `Hello, I'm <br />
                      <span class="highlight">Bartosz </span><br />Junior Front-End
                      Developer`, 
            useInnerHTML: true 
        },
        "contact-text": { content: "CONTACT ME", useInnerHTML: false },
        "about-text": { content: "ABOUT ME", useInnerHTML: false },
        "aboutParagraph": {
            content: "As a young, self-taught front-end developer, I am deeply committed to crafting clear and functional websites. Passionate about learning and innovation, I strive to make the web more accessible and enjoyable for everyone.",
            useInnerHTML: false
        },
        "cv-button": { content: "VIEW MY RESUME", useInnerHTML: false },
        "skillsText": { content: "MY SKILLS", useInnerHTML: false },
        "liveViewText": { content: "Live View", useInnerHTML: false },
        "codeText": { content: "Code", useInnerHTML: false },
        "inTouchText": { content: "GET IN TOUCH", useInnerHTML: false },
        "input-name": { content: "Your Name", useInnerHTML: false },
        "input-email": { content: "Your Email", useInnerHTML: false },
        "input-phone": { content: "Phone Number", useInnerHTML: false },
        "form-text": { content: "Your message", useInnerHTML: false },
        "submitButton": { content: "Submit", useInnerHTML: false },
    },
    "polish": {
        "home": { content: "Strona główna", useInnerHTML: false },
        "about": { content: "O mnie", useInnerHTML: false },
        "portfolio": { content: "Portfolio", useInnerHTML: false },
        "codeText": { content: "Skrypt", useInnerHTML: false },
        "contact": { content: "Kontakt", useInnerHTML: false },
        "text-about": { 
            content: `Cześć, Jestem <br />
                      <span class="highlight">Bartosz </span><br />Junior Front-End
                      Developer`, 
            useInnerHTML: true 
        },
        "contact-text": { content: "KONTAKT", useInnerHTML: false },
        "about-text": { content: "O MNIE", useInnerHTML: false },
        "aboutParagraph": {
            content: "Samodzielnie uczę się, aby zostać front-end developerem. W swoich projektach skupiam się przede wszystykim na przejrzystości i funkcjonalności stron. Staram się, aby były one intuicyjne i komfortowe w użytkowaniu.",
            useInnerHTML: false
        },
        "cv-button": { content: "MOJE CV", useInnerHTML: false },
        "skillsText": { content: "UMIEJĘTNOŚCI", useInnerHTML: false },
        "liveViewText": { content: "Podgląd", useInnerHTML: false },
        "inTouchText": { content: "Napisz do mnie ", useInnerHTML: false },
        "input-name": { content: "Imie i nazwisko" },
        "input-email": { content: "Email", useInnerHTML: false },
        "input-phone": { content: "Numer telefonu", useInnerHTML: false },
        "form-text": { content: "Wiadomość", useInnerHTML: false },
         "submitButton": { content: "Wyślij", useInnerHTML: false },
    }
    






};


const langSec = document.querySelector('.language-section');

langSec.addEventListener('click', (event) => {
    const element = event.target.closest('.language-eng, .language-pl');
    if (!element) return;

    event.preventDefault();
    langSec.querySelector('.active')?.classList.remove('active');
    element.classList.add('active');

    updateLanguage(element.getAttribute('language'));
});

function updateLanguage(language) {
    Object.keys(data[language]).forEach(key => {
        const elements = document.querySelectorAll('.' + key);
        elements.forEach(element => {
            const item = data[language][key];
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                // Aktualizacja placeholdera dla inputów
                element.placeholder = item.content;
            } else if (item.useInnerHTML) {
                // innerHTML dla treści zawierających HTML
                element.innerHTML = item.content;
            } else {
                // Dla innych elementów textContent
                element.textContent = item.content;
            }
        });
    });
}

document.querySelector('.language-eng').classList.add('active');
updateLanguage('english');