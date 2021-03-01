function extract(arr) {
    return arr.reduce((acc, c, i) => {
        c >= acc[acc.length - 1] || i === 0 ? acc.push(c) : acc;
        return acc;
    }, []);
}
