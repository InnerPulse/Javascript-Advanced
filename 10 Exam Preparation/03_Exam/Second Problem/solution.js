class ChristmasDinner {
  _budget;
  constructor(budget) {
    this.budget = budget;
    this.products = [];
    this.dishes = [];
    this.guests = {};
  }

  set budget(value) {
    if (value < 0) {
      throw new Error(`The budget cannot be a negative number`);
    }
    this._budget = value;
  }

  get budget() {
    return this._budget;
  }

  shopping([type, price]) {
    if (price > this._budget) {
      throw new Error(`Not enough money to buy this product`);
    }

    this.budget -= price;
    this.products.push(type);

    return `You have successfully bought ${type}!`;
  }

  recipes({ recipeName, productsList }) {
    if (productsList.some((p) => this.products.includes(p) == false)) {
      throw new Error(`We do not have this product`);
    }

    this.dishes.push({ recipeName, productsList });

    return `${recipeName} has been successfully cooked!`;
  }

  inviteGuests(guestName, dish) {
    if (this.dishes.map((d) => d.recipeName).includes(dish) == false) {
      throw new Error(`We do not have this dish`);
    } else if (this.guests.hasOwnProperty(guestName)) {
      throw new Error(`This guest has already been invited`);
    }

    this.guests[guestName] = dish;

    return `You have successfully invited ${guestName}!`;
  }

  showAttendance() {
    return Object.entries(this.guests)
      .map(
        ([guest, dish]) =>
          `${guest} will eat ${dish}, which consists of ${this.dishes
            .find((d) => d.recipeName == dish)
            .productsList.join(', ')}`
      ).join('\n');
  }
}

const dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
  recipeName: 'Oshav',
  productsList: ['Fruits', 'Honey'],
});
dinner.recipes({
  recipeName: 'Folded cabbage leaves filled with rice',
  productsList: ['Cabbage', 'Rice', 'Salt', 'Savory'],
});
dinner.recipes({
  recipeName: 'Peppers filled with beans',
  productsList: ['Beans', 'Peppers', 'Salt'],
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());

// Result should be:
// Ivan will eat Oshav, which consists of Fruits, Honey
// Petar will eat Folded cabbage leaves filled with rice, which consists of Cabbage, Rice, Salt, Savory
// Georgi will eat Peppers filled with beans, which consists of Beans, Peppers, Salt
