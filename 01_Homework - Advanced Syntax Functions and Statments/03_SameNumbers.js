function sameNumbers(x) {
    let same = true;
    const sum = Array.from(x.toString()).reduce((a, c) => (a += Number(c)), 0);
    for (let index = 0; index < x.toString().length; index++) {
        if (x.toString()[index + 1]) {
            x.toString()[index] === x.toString()[index + 1]
                ? (same = true)
                : (same = false);
            if (same === false) {
                console.log(`${same}\n${sum}`);
                return;
            }
        }
    }
    console.log(`${same}\n${sum}`);
}
