function juice(data) {
  let id = null;
  const storage = {};

  for (const juice of data) {
    const [flavor, quantity] = juice.split(' => ');
    storage[flavor]
      ? (storage[flavor].quantity += Number(quantity))
      : (storage[flavor] = { quantity: Number(quantity), id: null });

    if (storage[flavor].quantity >= 1000 && !storage[flavor].id) {
      storage[flavor].id = ++id;
    }
  }

  Object.keys(storage)
    .sort((a, b) => storage[a].id - storage[b].id)
    .forEach((juice) => {
      if (bottles(storage[juice].quantity)) {
        console.log(`${juice} => ${bottles(storage[juice].quantity)}`);
      }
    });

  function bottles(quantity) {
    let bottles = null;

    while (quantity >= 1000) {
      quantity -= 1000;
      bottles++;
    }
    return bottles;
  }
}

juice([
  'Kiwi => 234',
  'Pear => 2345',
  'Watermelon => 3456',
  'Kiwi => 4567',
  'Pear => 5678',
  'Watermelon => 6789',
])


// Pear => 8
// Watermelon => 10
// Kiwi => 4