function addItem() {
    const liElement = document.createElement('li');
    liElement.textContent = document.getElementById('newItemText').value;
    document.getElementById('items').appendChild(liElement);
    document.getElementById('newItemText').value = '';
}
