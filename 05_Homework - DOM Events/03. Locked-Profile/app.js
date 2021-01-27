function lockedProfile() {
   const main = document.querySelectorAll("main div");
   document.querySelectorAll("button").forEach((b) => b.addEventListener("click", showMore));

   function showMore(ev) {
      const hidden = ev.target.parentNode.children[9];
      const unlocked = ev.target.parentNode.children[4].checked;

      if (unlocked) {
         const isHidden = ev.target.textContent === "Show more";
         hidden.style.display = isHidden ? "block" : "none";
         ev.target.textContent = isHidden ? "Hide it" : "Show more";
      }
   }
}
