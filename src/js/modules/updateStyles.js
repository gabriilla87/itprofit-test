export default function updateStyles() {
    const body = document.body;
    const isTall = document.body.scrollHeight > window.innerHeight;

    if (isTall) {
        body.classList.add("page-tall");
    } else {
        body.classList.remove("page-tall");
    }
}