function lowestPrice(params) {
  const register = {};

  params.forEach((line) => {
    const [town, product, price] = line.split(" | ");

    if (register[product]) {
      if (register[product].price > Number(price)) {
        register[product].price = Number(price);
        register[product].town = town;
      }
    } else {
      register[product] = {
        price: Number(price),
        town,
      };
    }
  });

  for (const product in register) {
    console.log(
      `${product} -> ${register[product].price} (${register[product].town})`
    );
  }
}
