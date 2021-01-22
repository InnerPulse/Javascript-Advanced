function extractText() {
  const liElements = document.getElementsByTagName("li");
  const content = [...liElements].map((el) => el.textContent);
  document.getElementById("result").value = content.join("\n");
}
