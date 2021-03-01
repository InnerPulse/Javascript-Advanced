function storage(params) {
    const catalogue = {};
    Array.from(
        params.reduce((a, c) => {
            a.add(getInitials(c));
            return a;
        }, new Set())
    )
        .sort()
        .forEach((category) => (catalogue[category] = {}));

    params.forEach((line) => {
        const [product, price] = line.split(' : ');
        const initials = getInitials(product);
        catalogue[initials][product] = Number(price);
    });

    for (const category in catalogue) {
        console.log(
            `${category}\n  ${sortProducts(
                Object.entries(catalogue[category])
            )}`
        );
    }

    function getInitials(name) {
        return Array.from(name)[0];
    }

    function sortProducts(products) {
        return products
            .reduce((a, c) => {
                a.push(c.join(': '));
                return a;
            }, [])
            .sort((a, b) => a.localeCompare(b))
            .join(`\n  `);
    }
}
