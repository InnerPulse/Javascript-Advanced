const [sumButton, subtractButton] = document.querySelectorAll('button');

const actions = simpleCalculator();
actions.init('#num1', '#num2', '#result');
sumButton.addEventListener('click', actions.add);
subtractButton.addEventListener('click', actions.subtract);

function simpleCalculator() {
    let s1;
    let s2;
    let output;

    return {
        init: (selector1, selector2, resultSelector) => {
            s1 = document.querySelector(selector1);
            s2 = document.querySelector(selector2);
            output = document.querySelector(resultSelector);
        },
        add: () => {
            output.value = Number(s1.value) + Number(s2.value);
            s1.value = '';
            s2.value = '';
        },
        subtract: () => {
            output.value = Number(s1.value) - Number(s2.value);
            s1.value = '';
            s2.value = '';
        },
    };
}
