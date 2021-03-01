function heroicInventory(params) {
    const register = [];

    params.forEach((hero) => {
        const [name, level, items] = hero.split('/').map((el) => el.trim());
        register.push({
            name,
            level: Number(level),
            items: items ? items.split(', ') : [],
        });
    });

    return JSON.stringify(register);
}
