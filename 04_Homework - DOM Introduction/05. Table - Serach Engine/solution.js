function searchEngine() {
    function getMatches(trs, userInput) {
        return trs.filter((tr) => {
            const tds = Array.from(tr.children);
            const match = tds.find(
                (td) =>
                    userInput &&
                    td.textContent
                        .toLowerCase()
                        .includes(userInput.toLowerCase())
            );
            return match;
        });
    }

    const userInput = document.getElementById('searchField');
    const searchButton = document.getElementById('searchBtn');
    const trs = Array.from(document.querySelectorAll('tbody tr'));

    searchButton.addEventListener('click', function () {
        // remove selected indications
        trs.forEach((tr) => tr.classList.remove('select'));

        getMatches(trs, userInput.value).forEach((tr) => {
            tr.classList.add('select');
        });

        userInput.value = null;
    });
}
