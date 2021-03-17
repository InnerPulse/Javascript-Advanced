function getArticleGenerator(elements) {
    const output = document.getElementById('content');

    return function showNext() {
        if (elements.length) {
            const article = document.createElement('article');
            article.textContent = elements.shift();
            output.appendChild(article);
        }
    };
}
