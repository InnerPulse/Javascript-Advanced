function validate() {
   // Select input field and add event listener
   document.getElementById("email").addEventListener("change", onChange);

   function onChange(ev) {
      const email = ev.target.value;
      if (/^[a-z]+@[a-z]+\.[a-z]+$/.test(email)) {
         // If valid
         ev.target.className = "";
      } else {
         ev.target.className = "error";
      }
   }
}
