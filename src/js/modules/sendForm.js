export default async function sendForm(inputsValues, errors) {
    const isErrors = !!Object.keys(errors).length
    const loader = document.getElementById('loader-container')

    function showLoader(loader) {
        loader.classList.remove('hidden')
    }

    function hideLoader(loader) {
        loader.classList.add('hidden')
    }

    try {
        showLoader(loader)
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputsValues),
        });
        hideLoader(loader)
        if (response.ok && !isErrors) {
            return JSON.stringify({
                status: "success",
                msg: "Ваша заявка успешно отправлена"
            })
        }
        return JSON.stringify({
            status: "error",
            fields: errors
        })
    } catch (error) {
        hideLoader(loader)
        console.error('Ошибка отправки формы', error)
    }
}
