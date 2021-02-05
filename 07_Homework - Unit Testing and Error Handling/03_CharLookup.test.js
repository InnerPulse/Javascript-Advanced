// Unit testing done with the framework 'mocha' and the assertion framework 'chai'

const lookupChar = require('./03_CharLookup');
const { expect } = require('chai');

// Test the following functionality:

// 1 Check for correct results with valid parameters.
// 2 Check for expected results when parameters are invalid.
// 3 Check if index is in boundary.

describe('lookupChar function', () => {
  it('returns "b" with valid argiments', () => {
    expect(lookupChar('aba', 1)).to.equal('b');
  });
  it('returns undefined with unvalid argumets', () => {
    expect(lookupChar(1, 0)).to.undefined;
    expect(lookupChar('a', 1.1)).to.undefined;
    expect(lookupChar('a', '0')).to.undefined;
  });
  it('returns incorrect index with index equal to string length', () => {
    expect(lookupChar('a', 1)).to.equal('Incorrect index');
  });
  it('returns incorrect index for out of boundary indexes', () => {
    expect(lookupChar('a', -1)).to.equal('Incorrect index');
    expect(lookupChar('a', 2)).to.equal('Incorrect index');
  });
});
