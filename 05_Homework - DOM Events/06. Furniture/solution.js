function solve() {
    const [generateButton, buyButton] = document.getElementsByTagName("button");
    const [input, output] = document.querySelectorAll("textarea");
    const table = document.querySelector("#exercise table tbody");
    generateButton.addEventListener("click", generate);
    buyButton.addEventListener("click", buy);

    function generate() {
        const products = JSON.parse(input.value);
        input.value = "";

        products.forEach((product) => {
            const { img, name, price, decFactor } = product;
            const row = document.createElement("tr");

            // image
            const imgTd = document.createElement("td");
            const imgSrc = document.createElement("img");
            imgSrc.setAttribute("src", img);
            imgTd.appendChild(imgSrc);

            // name
            const nameTd = document.createElement("td");
            const nameP = document.createElement("p");
            nameP.textContent = name;
            nameTd.appendChild(nameP);

            // name
            const priceTd = document.createElement("td");
            const priceP = document.createElement("p");
            priceP.textContent = price;
            priceTd.appendChild(priceP);

            // decoration
            const decorationTd = document.createElement("td");
            const decorationP = document.createElement("p");
            decorationP.textContent = decFactor;
            decorationTd.appendChild(decorationP);

            // checkbox
            const inputTd = document.createElement("td");
            const input = document.createElement("input");
            input.setAttribute("type", "checkbox");
            inputTd.appendChild(input);

            row.appendChild(imgTd);
            row.appendChild(nameTd);
            row.appendChild(priceTd);
            row.appendChild(decorationTd);
            row.appendChild(inputTd);

            table.appendChild(row);
        });
    }
    function buy() {
        const cart = { products: [], totalBill: 0, decFactor: [] };
        const checkboxes = [...document.querySelectorAll("#exercise input")];

        checkboxes.forEach((box) => {
            if (box.checked) {
                const productName = box.parentNode.parentNode.children[1].textContent;
                const price = Number(box.parentNode.parentNode.children[2].textContent);
                const decFactor = Number(box.parentNode.parentNode.children[3].textContent);

                cart.totalBill += price;
                cart.decFactor.push(decFactor);
                cart.products.push(productName);
            }
        });

        output.value = `Bought furniture: ${cart.products.join(", ")}\n`;
        output.value += `Total price: ${cart.totalBill.toFixed(2)}\n`;
        output.value += `Average decoration factor: ${
            cart.decFactor.reduce((a, c) => a + c, 0) / cart.decFactor.length
        }`;
    }
}
