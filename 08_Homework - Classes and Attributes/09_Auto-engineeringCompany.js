function register(data) {
  const register = {};

  for (const vehicle of data) {
    const [brand, model, quantity] = vehicle.split(' | ');

    if (register[brand]) {
      if (register[brand][model]) {
        register[brand][model] += Number(quantity);
      } else {
        register[brand][model] = Number(quantity);
      }
    } else {
      register[brand] = { [model]: Number(quantity) };
    }
  }

  Object.entries(register).forEach((brand) => {
    const [brandName, ObjectData] = brand;
    console.log(
      `${brandName}\n${Object.entries(ObjectData)
        .reduce((a, c) => {
          const [model, quantity] = c;
          a.push(`###${model} -> ${quantity}`);
          return a;
        }, [])
        .join('\n')}`
    );
  });
}

register([
  'Audi | Q7 | 1000',
  'Audi | Q6 | 100',
  'BMW | X5 | 1000',
  'BMW | X6 | 100',
  'Citroen | C4 | 123',
  'Volga | GAZ-24 | 1000000',
  'Lada | Niva | 1000000',
  'Lada | Jigula | 1000000',
  'Citroen | C4 | 22',
  'Citroen | C5 | 10',
]);

// Audi
// ###Q7 -> 1000
// ###Q6 -> 100
// BMW
// ###X5 -> 1000
// ###X6 -> 100
// Citroen
// ###C4 -> 145
// ###C5 -> 10
// Volga
// ###GAZ-24 -> 1000000
// Lada
// ###Niva -> 1000000
// ###Jigula -> 1000000
