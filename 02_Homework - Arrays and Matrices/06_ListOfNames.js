function listOfNames(names) {
    names
        .sort((a, b) => a.localeCompare(b))
        .forEach((name, i) => console.log(`${++i}.${name}`));
}
