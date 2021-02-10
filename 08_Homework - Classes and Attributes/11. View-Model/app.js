class Textbox {
  constructor(selector, invalidSymbols) {
    this._elements = Array.from(document.querySelectorAll(selector));
    for (let i = 0; i < this._elements.length; i++) {
      $(selector)
        .eq(i)
        .on('input', () => {
          let val = $(selector).eq(i).val();
          this.value = val;
        });
    }
    this._invalidSymbols = invalidSymbols;
  }

  get elements() {
    return this._elements;
  }

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.elements.map((el) => {
      el.value = val;
    });
  }

  isValid() {
    return !this.value.match(this._invalidSymbols);
  }
}

let textbox = new Textbox('.textbox', /[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input', function () {
  console.log(textbox.value);
});
