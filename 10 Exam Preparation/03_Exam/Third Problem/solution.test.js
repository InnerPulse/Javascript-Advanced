const { dealership } = require('./solution');
const { expect } = require('chai');

describe("testing dealership's (object) functionality", () => {
  it('newCarCost', () => {
    expect(dealership.newCarCost('a', 1)).to.equal(1);
    expect(dealership.newCarCost('Audi A4 B8', 30000)).to.equal(15000);
  });

  it('carEquipment', () => {
    expect(dealership.carEquipment(['a'], [0])).to.deep.equal(['a'])
    expect(dealership.carEquipment(['a', 'b', 'c'], [0])).to.deep.equal(['a'])
    expect(dealership.carEquipment(['a', 'b', 'c'], [0, 2])).to.deep.equal(['a', 'c'])
  });

  it('euroCategory', () => {
    expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!')
    expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: 14250.`)
    expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`)
  });
});
