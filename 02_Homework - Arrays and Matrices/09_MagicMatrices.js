function magicMatrices(arr) {
    const rows = [];
    const columns = [];

    for (let i = 0; i < arr.length; i++) {
        rows.push(
            arr[i].reduce((acc, c) => {
                acc += c;
                return acc;
            }, 0)
        );

        columns.push(
            arr.reduce((acc, c) => {
                acc += c[i];
                return acc;
            }, 0)
        );
    }

    return rows.concat(columns).reduce((acc, c, i, arr) => {
        if (arr[i + 1] !== undefined) {
            c === arr[i + 1] ? acc : (acc = false);
            if (!acc) {
                return acc;
            }
        }
        return acc;
    }, true);

    //  OR ->
    // return rows.concat(columns).every(x => x === rows[0])
}
