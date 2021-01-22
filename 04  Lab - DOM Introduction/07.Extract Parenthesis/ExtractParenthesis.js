function extract(id) {
  const extracted = [];
  const regExp = new RegExp(/\((.+?)\)/, "g");
  const text = document.getElementById(id).textContent;
  let match = regExp.exec(text);
  while (match) {
    extracted.push(match[1]);
    match = regExp.exec(text);
  }
  const result = extracted.join("; ");
  return result;
}
