function validate() {
    document.getElementById('email').addEventListener('blur', (ev) => {
        ev.target.className = /[a-z0-9]+@[a-z0-9\.]+[a-z]/g.test(
            ev.target.value
        )
            ? 'valid'
            : 'error';
    });
}
