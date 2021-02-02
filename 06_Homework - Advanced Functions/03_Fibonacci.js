function fibonacci() {
    // Note: Use a closure to keep the current state!
    let [a, b] = [0, 1];

    return function () {
        let c = a + b;
        a = b;
        b = c;
        return a;
    };
}

// const fib = fibonacci();
// console.log(fib()); // 1
// console.log(fib()); // 1
// console.log(fib()); // 2
// console.log(fib()); // 3
// console.log(fib()); // 5
// console.log(fib()); // 8
// console.log(fib()); // 13