import sendForm from "./sendForm";
import setInputsError from "./setInputsError";
import setOnChangeRemoveErrors from "./setOnChangeRemoveErrors";

export default async function validateForm(form) {
    const errors = {};
    const modal = document.getElementById('modal')
    const modalText = document.getElementById('modal-text')
    const inputs = {
        name: form.querySelector('#name'),
        email: form.querySelector('#email'),
        phone: form.querySelector('#phone'),
        message: form.querySelector('#message')
    }
    const inputsValues = {
        name: inputs.name.value.trim(),
        email: inputs.email.value.trim(),
        phone: inputs.phone.value.trim(),
        message: inputs.message.value.trim()
    }
    const errorElements = {
        name: document.getElementById('name-error'),
        email: document.getElementById('email-error'),
        phone: document.getElementById('phone-error'),
        message: document.getElementById('message-error')
    }

    setOnChangeRemoveErrors(inputs, errorElements)

    function addError(input, errorMsg) {
        errors[input.id] = errorMsg
    }

    if (!inputsValues.name) {
        addError(inputs.name, 'Имя обязательно')
    }
    if (!inputsValues.email || !/^\S+@\S+\.\S+$/.test(inputsValues.email)) {
        addError(inputs.email, 'Некорректный email')
    }
    if (!inputsValues.phone || inputsValues.phone.length < 19) {
        addError(inputs.phone, 'Некорректный номер телефона')
    }
    if (!inputsValues.message)  {
        addError(inputs.message, 'Сообщение обязательно')
    }

    if (Object.keys(errors).length) {
        setInputsError(errors, inputs, errorElements)
    }

    const response = await sendForm(form, errors)
    const parsedResponse = JSON.parse(response)

    if (parsedResponse.status === "success") {
        modalText.textContent = parsedResponse.msg
        modal.classList.remove('hidden')
        console.log(parsedResponse.msg)
        form.reset()
    } else {
        console.log(parsedResponse.fields)
    }
}
