// Unit testing done with the framework 'mocha' and the assertion framework 'chai'

const createCalculator = require('./07.addSubstract');
const { expect } = require('chai');

// Test the following functionality:

// !!The function that's been testing, holds a state/closure and that needs to be tested as well!!

// 1 Return a module (object), containing the functions add(), subtract() and get() as properties.
// 2 Keep an internal sum which can’t be modified from the outside.
// 3 The functions add() and subtract() take a parameter that can be parsed as a
//   number (either a number or a string containing a number) that is added or
//   subtracted from the internal sum.
// 4 The function get() returns the value of the internal sum.

describe('createCalculator function', () => {
  it(`returna a object witch it's methods`, () => {
    expect(createCalculator()).to.equal({ Object (add, subtract, get) });
  });  // not corrent needs fixing... A LOT OF FIXING
});
