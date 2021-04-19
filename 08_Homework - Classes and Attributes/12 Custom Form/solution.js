(function () {
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

    class Form {
        constructor(...textBoxes) {
            if (textBoxes.some((t) => !(t instanceof TextBox))) {
                throw new Error(
                    'Some of the constructor arguments are not a Textbox'
                );
            } else {
                this._textBoxes = textBoxes;
                this._element = $('<div>').addClass('form');
                for (let textBox of textBoxes) {
                    this._element.append($(textBox.selector));
                }
            }
        }

        submit() {
            let allValid = true;
            for (let textBox of this._textBoxes) {
                if (textBox.isValid()) {
                    $(textBox.selector).css('border', '2px solid green');
                } else {
                    $(textBox.selector).css('border', '2px solid red');
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
        TextBox: TextBox,
        Form: Form,
    };
})();
