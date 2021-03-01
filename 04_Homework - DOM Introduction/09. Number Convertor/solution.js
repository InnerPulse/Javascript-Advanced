function solve() {
    const output = document.getElementById('result');
    const binaryOption = document.createElement('option');
    const hexadecimalOption = document.createElement('option');
    const selectMenu = document.getElementById('selectMenuTo');
    binaryOption.textContent = 'Binary';
    binaryOption.setAttribute('value', 'binary');
    hexadecimalOption.textContent = 'Hexadecimal';
    hexadecimalOption.setAttribute('value', 'hexadecimal');
    selectMenu.appendChild(binaryOption);
    selectMenu.appendChild(hexadecimalOption);

    document.querySelector('button').addEventListener('click', () => {
        const value = Number(document.getElementById('input').value);

        const convert = {
            binary: (x) => {
                output.value = Number(Number(x)).toString(2);
            },
            hexadecimal: (x) => {
                output.value = Number(Number(x)).toString(16).toUpperCase();
            },
        };
        const convertTo = convert[selectMenu.value];
        convertTo(value);
    });
}
