function solve() {
  const source = document.getElementById("text").value.split(" ");
  const toType = document.getElementById("naming-convention").value;
  const assignTo = document.getElementById("result");
  assignTo.textContent = convert(source, toType);

  function convert(content, toType) {
    switch (toType) {
      case "Camel Case":
        return content
          .map((el) => el.toLowerCase())
          .reduce((a, c, i) => {
            i === 0 ? c : (c = c[0].toUpperCase() + c.slice(1));
            return a + c;
          }, "");
      // break; - No need of break operator as we return the value.

      case "Pascal Case":
        return content
          .map((el) => el.toLowerCase())
          .reduce((a, c) => {
            return a + (c[0].toUpperCase() + c.slice(1));
          }, "");
      // break; - No need of break operator as we return the value.

      default:
        return "Error!";
      // break; - No need of break operator as we return the value and also beacause it's last case.
    }
  }
}
