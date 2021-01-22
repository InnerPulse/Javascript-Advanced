function carFactory(requsted) {
  const engines = {
    90: {
      power: 90,
      volume: 1800,
    },
    120: {
      power: 120,
      volume: 2400,
    },
    200: {
      power: 200,
      volume: 3500,
    },
  };

  const constructed = {
    model: requsted.model,
    engine: determineEngine(requsted.power),
    carriage: {
      type: requsted.carriage,
      color: requsted.color,
    },
    wheels: new Array(4).fill(
      requsted.wheelsize % 2 === 0 ? requsted.wheelsize - 1 : requsted.wheelsize
    ),
  };

  function determineEngine(power) {
    for (const engine in engines) {
      if (power <= engine) {
        return engines[engine];
      }
    }
  }

  return constructed;
}
