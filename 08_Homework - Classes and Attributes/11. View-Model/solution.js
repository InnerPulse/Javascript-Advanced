class TextBox {
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
