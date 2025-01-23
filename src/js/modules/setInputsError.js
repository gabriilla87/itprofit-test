export default function setInputsError(errors, inputs, errorElements) {
   Object.entries(errors).forEach(([inputName, value]) => {
        const errorElement = errorElements[inputName]
        const input = inputs[inputName]

        if (errorElement && input) {
            errorElement.style.display = "block"
            input.style.borderColor = "red"
            input.style.outlineColor = "red"
            errorElement.textContent = value;
        }
    });
}