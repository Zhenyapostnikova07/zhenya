// Тексты на двух языках
const texts = {
    ru: {
        greeting: "Привет! Я Женя",
        telegram: "Телеграм",
        whatsapp: "Ватсап",
        instagram: "Инстаграм",
        audio: "Аудио",
        dark: "Темный режим",
        language: "English"
    },
    en: {
        greeting: "Hello! I'm Zhenya",
        telegram: "Telegram",
        whatsapp: "WhatsApp",
        instagram: "Instagram",
        audio: "Audio",
        dark: "Dark mode",
        language: "Русский"
    }
};

// Элементы страницы
const greeting = document.getElementById('greeting');
const telegramBtn = document.getElementById('telegram-btn');
const whatsappBtn = document.getElementById('whatsapp-btn');
const instagramBtn = document.getElementById('instagram-btn');
const audioBtn = document.getElementById('audio-btn');
const darkBtn = document.getElementById('dark-btn');
const languageBtn = document.getElementById('language-btn');
const audioElement = document.getElementById('greeting-audio');

// Текущий язык (по умолчанию русский)
let currentLanguage = 'ru';

// Функция смены языка
languageBtn.addEventListener('click', function() {
    if (currentLanguage === 'ru') {
        currentLanguage = 'en';
    } else {
        currentLanguage = 'ru';
    }
    updateTexts();
});

function updateTexts() {
    greeting.textContent = texts[currentLanguage].greeting;
    telegramBtn.textContent = texts[currentLanguage].telegram;
    whatsappBtn.textContent = texts[currentLanguage].whatsapp;
    instagramBtn.textContent = texts[currentLanguage].instagram;
    audioBtn.textContent = texts[currentLanguage].audio;
    darkBtn.textContent = texts[currentLanguage].dark;
    languageBtn.textContent = texts[currentLanguage].language;
}

// Аудиоприветствие
audioBtn.addEventListener('click', function() {
    audioElement.play();
});

// Темный режим
darkBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark');
});
