function cookingNumber(x, ...commands) {
  const actions = {
    chop: (x) => x / 2,
    dice: (x) => Math.sqrt(x),
    spice: (x) => ++x,
    bake: (x) => x * 3,
    fillet: (x) => x - x / 5,
  };

  commands.forEach((command) => {
    const action = actions[command];
    x = action(Number(x));
    console.log(x);
  });
}
