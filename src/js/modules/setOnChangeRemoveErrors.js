export default function setOnChangeRemoveErrors(inputs, errorElements) {
    Object.entries(inputs).forEach(([inputName, input]) => {
        input.addEventListener('keydown', () => {
            errorElements[inputName].style.display = "none"
            input.style.borderColor = "#000"
            input.style.outlineColor = "#000"
        })
    })
}
