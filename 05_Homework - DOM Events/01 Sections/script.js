function create(arr) {
    const content = document.getElementById('content');

    arr.forEach((section) => {
        const p = document.createElement('p');
        const div = document.createElement('div');

        p.textContent = section;
        p.style.display = 'none';
        div.appendChild(p);
        content.appendChild(div);

        div.addEventListener('click', (ev) => {
            ev.target.children[0].style.display = 'block';
        });
    });
}
