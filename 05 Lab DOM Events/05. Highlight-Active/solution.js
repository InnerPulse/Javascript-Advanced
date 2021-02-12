function focus() {
   document.querySelectorAll("input").forEach((i) => {
      i.addEventListener("focus", onFocus);
      // Without blur event, the focus event will be fired on all of the elements
      i.addEventListener("blur", onBlur);
   });

   function onFocus(ev) {
      ev.target.parentNode.className = "focused";
   }

   function onBlur(ev) {
      ev.target.parentNode.className = "";
   }
}
