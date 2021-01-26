function deleteByEmail() {
   const rows = [...document.querySelectorAll("tbody tr")];
   const resultElement = document.getElementById("result");
   const input = document.querySelector('input[name="email"]');

   const emailToDelete = input.value;
   input.value = "";

   const matches = rows.filter((r) => r.children[1].textContent == emailToDelete);
   if (matches.length > 0) {
      row.parentNode.removeChild(row);
      resultElement.textContent = "Deleted.";
   } else {
      resultElement.textContent = "Not found.";
   }
}
