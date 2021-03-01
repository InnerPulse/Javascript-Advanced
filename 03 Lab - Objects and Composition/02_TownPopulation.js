function townPopulation(data) {
    const register = data.reduce((acc, c) => {
        const [name, population] = c.split(' <-> ');
        acc[name]
            ? (acc[name] += Number(population))
            : (acc[name] = Number(population));
        return acc;
    }, {});

    for (const city in register) {
        console.log(`${city} : ${register[city]}`);
    }
}
