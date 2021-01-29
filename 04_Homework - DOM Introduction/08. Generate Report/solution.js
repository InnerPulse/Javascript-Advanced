function generateReport() {
   const output = document.getElementById("output");
   const headers = document.querySelectorAll("thead th");
   const rows = [...document.querySelectorAll("tbody tr")];
   const checkButtons = [...document.querySelectorAll("thead th input")];

   const result = [];
   const indexes = [];

   checkButtons.forEach((b, index) => {
      if (b.checked == true) {
         indexes.push(index);
      }
   });

   for (const row of rows) {
      const obj = {};
      for (const i of indexes) {
         const value = row.children[i].textContent;
         const title = headers[i].textContent.toLowerCase().trim();
         obj[title] = value;
      }
      result.push(obj);
   }

   output.value = JSON.stringify(result, null, 2);
}
