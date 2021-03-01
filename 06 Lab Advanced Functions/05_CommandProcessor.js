function commandProcessor() {
    let str = '';

    return {
        append: (concat) => (str = str.concat(concat)),
        removeStart: (x) => (str = str.slice(x)),
        removeEnd: (x) => (str = str.slice(0, -x)),
        print: () => console.log(str),
    };
}

const firstZeroTest = commandProcessor();

// firstZeroTest.append("hello");
// firstZeroTest.append("again");
// firstZeroTest.removeStart(3);
// firstZeroTest.removeEnd(4);
// firstZeroTest.print();
