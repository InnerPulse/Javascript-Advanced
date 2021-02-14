(function () {
  class Textbox {
    _value;
    constructor(selector, regex) {
      this.selector = selector;
      this._invalidSymbols = regex;
      this._elements = Array.from(document.querySelectorAll(selector));
      this._elements.forEach(
        (el) => (el.oninput = () => (this.value = el.value))
      );
    }

    get elements() {
      return this._elements;
    }

    get value() {
      return this._value;
    }

    set value(value) {
      this._elements.forEach((el) => (el.value = value));
      this._value = value;
    }

    isValid() {
      return !this.value.match(this._invalidSymbols);
    }
  }

  class Form {
    constructor(...textboxes) {
      if (textboxes.some((t) => !(t instanceof Textbox))) {
        throw new Error('Some of the constructor arguments are not a Textbox');
      } else {
        this._textboxes = textboxes;
        this._element = $('<div>').addClass('form');
        for (let textbox of textboxes) {
          this._element.append($(textbox.selector));
        }
      }
    }

    submit() {
      let allValid = true;
      for (let textbox of this._textboxes) {
        if (textbox.isValid()) {
          $(textbox.selector).css('border', '2px solid green');
        } else {
          $(textbox.selector).css('border', '2px solid red');
          allValid = false;
        }
      }
      return allValid;
    }

    attach(selector) {
      $(selector).append($(this._element));
    }
  }

  return {
    Textbox: Textbox,
    Form: Form,
  };
})();
