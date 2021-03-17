function solve() {
    const cart = [];
    const output = document.querySelector('.shopping-cart textarea');

    document.querySelector('.shopping-cart').addEventListener('click', (ev) => {
        if (
            ev.target.tagName === 'BUTTON' &&
            ev.target.className === 'add-product'
        ) {
            const product = ev.target.parentNode.parentNode;
            const title = product.querySelector('.product-title').textContent;
            const price = Number(
                product.querySelector('.product-line-price').textContent
            );
            output.value += `Added ${title} for ${price.toFixed(2)} to the cart.\n`;   
            cart.push({ title, price });
        }
    });

    document.querySelector('.checkout').addEventListener('click', (ev) => {
        [...document.getElementsByTagName('button')].forEach((el) =>
            el.setAttribute('disabled', '')
        );

        const result = cart.reduce(
            (a, c) => {
                a.items.push(c.title);
                a.total += c.price;
                return a;
            },
            { items: [], total: 0 }
        );

        output.value += `You bought ${Array.from(new Set(result.items)).join(
            ', '
        )} for ${result.total.toFixed(2)}.`;
    });
}
