function getArticleGenerator(elemets) {
    const output = document.getElementById("content");

    return function showNext() {
        if (elemets.length) {
            const article = document.createElement("article");
            article.textContent = elemets.shift();
            output.appendChild(article);
        }
    };
}
