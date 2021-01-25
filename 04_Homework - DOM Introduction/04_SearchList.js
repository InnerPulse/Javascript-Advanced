function search() {
  const matches = [];
  const towns = [...document.getElementById("towns").children];
  const userInput = document.getElementById("searchText").value;
  const displayResult = document.getElementById("result");

  for (const town of towns) {
    if (
      userInput &&
      town.textContent.toLowerCase().includes(userInput.toLowerCase())
    ) {
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
      matches.push(town);
      displayResult.textContent = `${matches.length} matches found`;
    } else {
      town.style.fontWeight = "";
      town.style.textDecoration = "";
    }
  }
}
