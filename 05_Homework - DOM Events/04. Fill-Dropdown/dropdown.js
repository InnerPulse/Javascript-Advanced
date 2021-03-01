function addItem() {
    const menu = document.getElementById('menu');
    const text = document.getElementById('newItemText');
    const value = document.getElementById('newItemValue');

    const newOption = document.createElement('option');
    newOption.value = value.value;
    newOption.textContent = text.value;

    menu.appendChild(newOption);

    text.value = '';
    value.value = '';
}
