// Unit testing done with the framework 'mocha' and the assertion framework 'chai'

const isSymmetric = require('./05.checkForSymmetry');
const { expect } = require('chai');

// Test the following functionality:

// 1 Return false for any input that isn’t of the correct type.
// 2 Return true if the input array is symmetric.
// 3 Otherwise, return false.

describe('symmetric function', () => {
  it('return false for non-valid input', () => {
    expect(isSymmetric('a')).to.false;
  });
  it('returns true for symmetric input', () => {
    expect(isSymmetric([1, 1])).to.true;
  });
  it('return false for non-symmetric input', () => {
    expect(isSymmetric([1, 2])).to.false;
  });
  it('returns false for comparing different value types', () => {
    expect(isSymmetric(['1', 1])).to.false;
  });
  // test overloading
  it('return true for symmetric array with odd number of elements', () => {
    expect(isSymmetric([1, 1, 1])).to.true;
  });
  it('return true for non-numeric values', () => {
    expect(isSymmetric(['a', 'a', 'a'])).to.true;
  });
  it('return flase for valid non-symmetric string array', () => {
    expect(isSymmetric(['a', 'b'])).to.false;
  });
});
