function solve() {
    const onScreenButton = document.querySelector("form div button");
    const [nameElement, hallElement, ticketPriceElement] = Array.from(
        document.querySelectorAll("form div input")
    );

    const addedMoviesList = document.querySelector("section#movies ul");
    const archivedMoviesList = document.querySelector("section#archive ul");
    const clearButton = document.querySelector("section#archive button");

    clearButton.addEventListener("click", () => {
        archivedMoviesList.innerHTML = "";
    });

    onScreenButton.addEventListener("click", addMovie);

    function addMovie(event) {
        event.preventDefault();

        const name = nameElement.value;
        nameElement.value = "";

        const hall = hallElement.value;
        hallElement.value = "";

        if (!name || !hall) {
            return;
        }

        let ticketPrice = ticketPriceElement.value;
        ticketPriceElement.value = "";
        if (ticketPrice === "" || Number.isNaN(Number(ticketPrice))) {
            return;
        }

        ticketPrice = Number(ticketPrice);

        // name
        let titleElement = document.createElement("span");
        titleElement.textContent = name;

        // hall
        let strongHallElement = document.createElement("strong");
        strongHallElement.textContent = `Hall: ${hall}`;

        // price
        let priceElement = document.createElement("strong");
        priceElement.textContent = ticketPrice.toFixed(2);

        // tickets sold input
        let soldTicketsInput = document.createElement("input");
