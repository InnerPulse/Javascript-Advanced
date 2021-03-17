function addItem() {
    // Create <li>
    const input = document.getElementById('newText');
    let liElement = createElement('li', input.value);

    // Add delete link
    // The problem require us to do next step with link instead of a button
    const deleteBtn = createElement('a', '[Delete]');
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', (event) => {
        event.target.parentNode.remove();
    });

    liElement.appendChild(deleteBtn);

    // Add the new <li> to document
    document.getElementById('items').appendChild(liElement);
    input.value = '';

    function createElement(type, content) {
        const element = document.createElement(type);
        element.textContent = content;
        return element;
    }
}
