function sortNumbers(arr) {
    const sorted = arr.sort((a, b) => a - b);
    const result = [];
    for (let index = 0; sorted.length; index++) {
        index % 2 === 0
            ? result.push(sorted.shift())
            : result.push(sorted.pop());
    }
    return result;
}
