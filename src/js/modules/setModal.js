import {wait} from "./feauters";

export default function setModal() {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text')

    function closeModal() {
        modal.classList.add('hidden')
        document.body.classList.remove('modal-open')
        wait(500).then(() => modalText.textContent = "Это модальное окно")
    }

    document.getElementById('open-modal').addEventListener('click', () => {
        modal.classList.remove('hidden')
        document.body.classList.add('modal-open')
    });
    document.getElementById('close-modal').addEventListener('click', () => {
        closeModal()
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal()
        }
    })
}