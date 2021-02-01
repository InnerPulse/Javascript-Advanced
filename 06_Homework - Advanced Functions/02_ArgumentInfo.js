function argumentInfo(...data) {
    const tally = {};

    data.forEach((el) => {
        tally[typeof el] ? ++tally[typeof el] : (tally[typeof el] = 1);
        console.log(`${typeof el}: ${el}`);
    });

    Object.keys(tally)
        .sort((a, b) => tally[b] - tally[a])
        .forEach((key) => console.log(`${key} = ${tally[key]}`));
}

// argumentInfo("cat", 42, function () {
//     console.log("Hello world!");
// });