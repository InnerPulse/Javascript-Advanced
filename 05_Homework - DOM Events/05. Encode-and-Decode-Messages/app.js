function encodeAndDecodeMessages() {
   const [input, output] = document.querySelectorAll("textarea");
   const [encodeButton, decodeButton] = document.querySelectorAll("button");
   encodeButton.addEventListener("click", encodeMessage);
   decodeButton.addEventListener("click", decodeMessage);

   function encodeMessage() {
      const encoded = input.value
         .split("")
         .map((ch) => ch.charCodeAt())
         .map((ch) => String.fromCharCode(ch + 1))
         .join("");

      input.value = "";
      output.value = encoded;
   }
   function decodeMessage() {
      const decoded = output.value
         .split("")
         .map((ch) => ch.charCodeAt())
         .map((ch) => String.fromCharCode(ch - 1))
         .join("");

      output.value = decoded;
   }
}
