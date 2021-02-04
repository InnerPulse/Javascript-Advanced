// Unit testing done with the framework 'mocha' and the assertion framework 'chai'

const sum = require('./04.sumsOfNumbers');
const { expect } = require('chai');

// Test the following functionality:

// 1 Return the sum of the values of all elements inside the array.

describe('Sum function', () => {
  it('sums single number', () => {
    expect(sum([1])).to.equal(1);
  });

  // test overloading
  it('sums mutiple number', () => {
    expect(sum([1, 1])).to.equal(2);
  });
  it('sums string numbers', () => {
    expect(sum(['1', '1'])).to.equal(2);
  });
});
