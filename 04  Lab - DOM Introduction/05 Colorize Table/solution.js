function colorize() {
    [...document.querySelectorAll('table tr:nth-child(even)')].forEach(
        (el) => (el.style.backgroundColor = 'teal')
    );
}
