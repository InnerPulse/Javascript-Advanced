function breakfastRobot() {
    const storage = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 };
    const recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    };

    const actions = {
        restock: (microelement, quantity) => {
            storage[microelement] += quantity;
            return 'Success';
        },
        prepare: (product, quantity) => {
            const ingredients = Object.keys(recipes[product]);

            for (const ing of ingredients) {
                if (storage[ing] < recipes[product][ing] * quantity) {
                    return `Error: not enough ${ing} in stock`;
                }
            }

            ingredients.forEach((ing) => {
                storage[ing] -= recipes[product][ing] * quantity;
            });

            return 'Success';
        },
        report: () => {
            return Object.keys(storage)
                .reduce((a, c) => {
                    a.push(`${c}=${storage[c]}`);
                    return a;
                }, [])
                .join(' ');
        },
    };

    return function (cmds) {
        let [command, product, quantity] = cmds.split(' ');
        quantity = Number(quantity);
        return actions[command](product, quantity);
    };
}

// const manager = breakfastRobot();
// console.log(manager("restock flavour 50")); // Success
// console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
