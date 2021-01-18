function addAndRemove(input) {
  const result = input.reduce((acc, c, i) => {
    const actions = {
      add: (i) => {
        acc.push(i + 1);
      },
      remove: () => {
        acc.pop();
      },
    };
    actions[c](i);
    return acc;
  }, []);

  result.length ? console.log(result.join("\n")) : console.log("Empty");
}
