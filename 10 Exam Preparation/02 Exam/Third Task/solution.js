class Bank {
  constructor(bankName) {
    this._bankName = bankName;
    this.allCustomers = [];
  }

  newCustomer(customer) {
    if (
      this.allCustomers.find(
        (c) =>
          c.firstName === customer.firstName &&
          c.lastName === customer.lastName &&
          c.personalId === customer.personalId
      )
    ) {
      throw new Error(
        `${customer.firstName} ${customer.lastName} is already our customer!`
      );
    }

    this.allCustomers.push(customer);
    return customer;
  }

  depositMoney(customerId, amount) {
    const index = this.allCustomers.findIndex(
      (e) => e.personalId == customerId
    );
    if (index < 0) {
      throw new Error(`We have no customer with this ID!`);
    }

    const currentTransaction = `${this.allCustomers[index].firstName} ${this.allCustomers[index].lastName} made deposit of ${amount}$!`;

    this.allCustomers[index].totalMoney
      ? (this.allCustomers[index].totalMoney += amount)
      : (this.allCustomers[index].totalMoney = amount);

    this.allCustomers[index].transactions
      ? this.allCustomers[index].transactions.unshift(currentTransaction)
      : (this.allCustomers[index].transactions = [currentTransaction]);

    return `${this.allCustomers[index].totalMoney}$`;
  }

  withdrawMoney(customerId, amount) {
    const index = this.allCustomers.findIndex(
      (e) => e.personalId == customerId
    );
    if (index < 0) {
      throw new Error(`We have no customer with this ID!`);
    }

    const enoughBalance =
      this.allCustomers[index].totalMoney - amount >= 0 ? true : false;

    if (enoughBalance) {
      this.allCustomers[index].totalMoney -= amount;
      const currentTransaction = `${this.allCustomers[index].firstName} ${this.allCustomers[index].lastName} withdrew ${amount}$!`;
      this.allCustomers[index].transactions.unshift(currentTransaction);
      return `${this.allCustomers[index].totalMoney}$`;
    }

    throw new Error(
      `${this.allCustomers[index].firstName} ${this.allCustomers[index].lastName} does not have enough money to withdraw that amount!`
    );
  }

  customerInfo(customerId) {
    const index = this.allCustomers.findIndex(
      (e) => e.personalId == customerId
    );
    if (index < 0) {
      throw new Error(`We have no customer with this ID!`);
    }

    return [
      `Bank name: ${this._bankName}`,
      `Customer name: ${this.allCustomers[index].firstName} ${this.allCustomers[index].lastName}`,
      `Customer ID: ${customerId}`,
      `Total Money: ${this.allCustomers[index].totalMoney}$`,
      'Transactions:',
      `${this.allCustomers[index].transactions
        .map((t, i, arr) => `${arr.length - i}. ${t}`)
        .join('\n')}`,
    ].join('\n');
  }
}


//zero test
let name = 'SoftUni Bank';
let bank = new Bank(name);

let customer1 = bank.newCustomer({
  firstName: 'Svetlin',
  lastName: 'Nakov',
  personalId: 1111111,
});
expect(customer1.firstName).to.be.equal('Svetlin');

let customer2 = bank.newCustomer({
  firstName: 'Mihaela',
  lastName: 'Mileva',
  personalId: 3333333,
});
expect(customer2.lastName).to.be.equal('Mileva');
expect(customer2.personalId).to.be.equal(3333333);

let totalMoney1 = bank.depositMoney(1111111, 250);
expect(totalMoney1).to.be.equal(
  '250$',
  'Function depositMoney returns incorrect totalMoney'
);

let totalMoney2 = bank.depositMoney(1111111, 250);
expect(totalMoney2).to.be.equal(
  '500$',
  'Function depositMoney returns incorrect totalMoney'
);

let totalMoney3 = bank.depositMoney(3333333, 555);
expect(totalMoney3).to.be.equal(
  '555$',
  'Function depositMoney returns incorrect totalMoney'
);

let totalMoney4 = bank.withdrawMoney(1111111, 125);
expect(totalMoney4).to.equal(
  '375$',
  'Function withdrawMoney returns incorrect totalMoney'
);

let output = bank.customerInfo(1111111);
let expectedOutput = 
`Bank name: SoftUni Bank
Customer name: Svetlin Nakov
Customer ID: 1111111
Total Money: 375$
Transactions:
3. Svetlin Nakov withdrew 125$!
2. Svetlin Nakov made deposit of 250$!
1. Svetlin Nakov made deposit of 250$!`;
expect(expectedOutput).to.be.equal(output, 'Incorrect output');
