export default async function sendForm(inputsValues, errors) {
    const isErrors = !!Object.keys(errors).length

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputsValues),
        });
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
        console.error('Ошибка отправки формы', error)
    }
}
