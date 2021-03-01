function calorieObject(params) {
    const calories = {};

    for (let i = 0; i < params.length; i += 2) {
        calories[params[i]] = Number(params[i + 1]);
    }
    return calories;
}
