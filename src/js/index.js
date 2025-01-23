import "../styles/styles.scss"
import IMask from 'imask';
import validateForm from './modules/validateForm.js';
import setModal from "./modules/setModal";
import updateStyles from "./modules/updateStyles";

setModal()

window.addEventListener("load", updateStyles)
window.addEventListener("resize", updateStyles)

// Маска для телефона
const phoneInput = document.getElementById('phone')
IMask(phoneInput, { mask: '+{375} (00) 000-00-00' })

// Валидация и отправка формы
const form = document.getElementById('feedback-form')
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    validateForm(form)
})

