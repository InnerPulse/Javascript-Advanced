function toggle() {
  const extraText = document.getElementById("extra");
  const button = document.getElementsByClassName("button")[0];

  const isHidden = button.textContent === "More";
  extraText.style.display = isHidden ? "block" : "none";
  button.textContent = isHidden ? "Less" : "More";
}
