function add(x) {
    function sum(y) {
        x += y;
        return sum;
    }
    sum.toString = () => x;
    console.log(x);
    return sum;
}

// console.log(add(1));           // 1
// console.log(add(1)(6)(-3));    // 4