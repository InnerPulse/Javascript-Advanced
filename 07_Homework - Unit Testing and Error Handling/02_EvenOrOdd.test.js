// Unit testing done with the framework 'mocha' and the assertion framework 'chai'

const isOddOrEven = require('./02_EvenOrOdd');
const { expect } = require('chai');

// Test the following functionality:

// 1 Write one or two tests checking if arguments are valid.
// 2 After we have checked the validation it's time to check whether
// the function works correctly with valid arguments.
// 3 Finally make an extra test passing multiple different strings
// in a row to ensure the function works correctly.

describe('isOddOrEven function', () => {
  it('returns undefind if type if not valid', () => {
    expect(isOddOrEven(1)).to.undefined;
  });

  it('returns undefind if type if not valid', () => {
    expect(isOddOrEven(['1'])).to.undefined;
  });

  it('odd with valid sting', () => {
    expect(isOddOrEven('a')).to.equal('odd');
  });

  it('even with valid sting', () => {
    expect(isOddOrEven('aa')).to.equal('even');
  });

  // test overloading
  it('odd with valid longер sting', () => {
    expect(isOddOrEven('aaааа')).to.equal('odd');
  });
  
  it('even with valid longер sting', () => {
    expect(isOddOrEven('aaаааа')).to.equal('even');
  });
});
