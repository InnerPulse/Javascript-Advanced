function solve() {
  const text = document
    .getElementById("input")
    .value.split(".")
    .filter((el) => el);

  const appendTo = document.getElementById("output");
  makeParagraphs(text);

  function makeParagraphs(textArr) {
    const paragraphs = [];
    while (textArr.length > 0) {
      paragraphs.push(textArr.splice(0, 3).join(".") + ".");
    }
    // Beware of XSS attacks when using innerHTML!
    paragraphs.forEach((p) => (appendTo.innerHTML += `<p>${p}</p>`));
  }
}
