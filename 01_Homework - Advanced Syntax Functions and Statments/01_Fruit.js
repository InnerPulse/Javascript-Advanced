function fruit(type, weight, priceKg) {
  console.log(
    `I need $${((weight / 1000) * priceKg).toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${type}.`
  );
}
