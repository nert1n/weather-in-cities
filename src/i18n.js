import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "en": "en",
            "Created by": "Created by",
            "Light": "Light",
            "Dark": "Dark",
            "Profile": "Profile",
            "My profile": "My profile",
            "Exit": "Exit",
            "Page not found": "Page not found",
            "Return back": "Return back",
            "Error": "Error",
            "Register": "Register",
            "Login": "Login",
            "Email": "Email",
            "Password": "Password",
            "Agree password": "Agree password",
            "I have an account": "I have an account",
            "I don't have an account": "I have an account",
            "Forgot password": "Forgot password",
            "Ukraine": "Ukraine",
            "Kiev": "Kiev",
            "Cherkasy": "Cherkasy",
            "Dnepro": "Dnepro",
        }
    },
    ua: {
        translation: {
            "en": "ua",
            "Created by": "Створено",
            "Light": "Світла",
            "Dark": "Темна",
            "Profile": "Профіль",
            "My profile": "Мій профіль",
            "Exit": "Вийти",
            "Page not found": "Сторінка не знайдена",
            "Return back": "Повернутися назад",
            "Error": "Помилка",
            "Register": "Регістрація",
            "Login": "Логін",
            "Email": "Пошта",
            "Password": "Пароль",
            "Agree password": "Підтвердження паролю",
            "I have an account": "У мене є аккаунт",
            "I don't have an account": "У мене намає аккаунту",
            "Forgot password": "Забув пароль",
            "Ukraine": "Україна",
            "Kiev": "Київ",
            "Cherkassy": "Черкаси",
            "Dnepro": "Дніпро",
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en", 

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;