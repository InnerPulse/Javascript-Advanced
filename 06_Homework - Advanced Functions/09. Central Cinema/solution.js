function solve() {
    const movieList = document.querySelector("#movies > ul");
    const archiveList = document.querySelector("#archive > ul");
    const clearButton = document.querySelector("#archive > ul");
    const onScreenButton = document.querySelector("#container > button");

    // clearButton.addEventListener("click", () => (archiveList.innerHTML = ""));
    clearButton.addEventListener("click", () => (archiveList.innerHTML = ""));
    onScreenButton.addEventListener("click", addMovie);

    function addMovie(ev) {
        const [name, hall, price] = [...document.querySelectorAll("#container > input")].map(
            (el) => el.value
        );
        ev.preventDefault();

        if (isValid(name, hall, price)) {
            createLi(name, hall, price);
            clearInputs();
        } else return;

        function createLi(name, hall, price) {
            const liElement = createElement("li", null, null);
            // apppend to movieSection
            const spanElement = createElement("span", name, null);
            // append to liElement
            const strongElement1 = createElement("strong", `Hall: ${hall}`, null);
            // append to liElement
            const divElement = createElement("div", null, null);
            // append to liElement
            const strongElement2 = createElement("strong", Number(price).toFixed(2), null);
            // append to divElement
            const inputElement = createElement("input", null, ["placeholder", "Ticket Sold"]);
            // append to divElement
            const buttonElement = createElement("button", "Archive", null);
            buttonElement.addEventListener("click", archiveMovie);

            // append all elements

            [strongElement2, inputElement, buttonElement].forEach((el) => divElement.appendChild(el));
            [spanElement, strongElement1, divElement].forEach((el) => liElement.appendChild(el));

            // append final element
            movieList.appendChild(liElement);

            function archiveMovie() {
                const soldTickets = inputElement.value;
                inputElement.value = "";

                if (typeof Number(soldTickets) == "number" && Number(soldTickets) > 0) {
                    liElement.removeChild(strongElement1);
                    liElement.removeChild(divElement);

                    const totalBill = createElement(
                        "strong",
                        `Total amount: ${(Number(price) * Number(soldTickets)).toFixed(2)}`,
                        null
                    );

                    const deleteBtn = createElement("button", "Delete", null);
                    deleteBtn.addEventListener("click", () => liElement.remove());

                    liElement.appendChild(totalBill);
                    liElement.appendChild(deleteBtn);

                    archiveList.appendChild(liElement);
                } else return;
            }
        }

        function createElement(type, txt, attribute) {
            const el = document.createElement(type);
            if (txt) el.textContent = txt;
            if (attribute) el.setAttribute(attribute[0], attribute[1]);

            return el;
        }

        function isValid(name, hall, price) {
            return name != "" && hall != "" && typeof Number(price) == "number" && Number(price) > 0
                ? true
                : false;
        }

        function clearInputs() {
            [...document.querySelectorAll("#container input")].forEach((el) => (el.value = ""));
        }
    }
}
