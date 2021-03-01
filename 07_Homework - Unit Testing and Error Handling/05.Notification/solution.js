function notify(message) {
    const notification = document.querySelector('#notification');

    notification.textContent = message;
    notification.style.display = 'block';
    notification.addEventListener('click', (ev) => {
        ev.target.style.display = 'none';
    });
}
