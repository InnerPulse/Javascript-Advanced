// Unit testing done with the framework 'mocha' and the assertion framework 'chai'

const createCalculator = require('./07.addSubstract');
const { assert } = require('chai');

// Test the following functionality:

// !!The function that's been testing, holds a state/closure and that needs to be tested as well!!

// 1 Return a module (object), containing the functions add(), subtract() and get() as properties.
// 2 Keep an internal sum which can’t be modified from the outside.
// 3 The functions add() and subtract() take a parameter that can be parsed as a
//   number (either a number or a string containing a number) that is added or
//   subtracted from the internal sum.
// 4 The function get() returns the value of the internal sum.

describe('Testing createCalculator functionality', () => {
  it("should return 2 after add(10); subtract('7'); add('-2'); subtract(-1)", () => {
    const calc = createCalculator();
    calc.add(10);
    calc.subtract('7');
    calc.add('-2');
    calc.subtract(-1);
    assert.equal(calc.get(), 2);
  });

  it('should have add function property', () => {
    const res = createCalculator();
    assert.isFunction(res.add);
  });

  it('should have subtract function property', () => {
    const res = createCalculator();
    assert.isFunction(res.subtract);
  });

  it('should have get function property', () => {
    const res = createCalculator();
    assert.isFunction(res.get);
  });

  it('should return correct value', () => {
    const res = createCalculator();
    assert.equal(res.get(), 0);
  });

  it('should add if we supply a number', () => {
    const res = createCalculator();
    res.add(1);
    assert.equal(res.get(), 1);
  });

  it('should add if we supply string with a number', () => {
    const res = createCalculator();
    res.add('1');
    assert.equal(res.get(), 1);
  });

  it('should subtract if we supply a number', () => {
    const res = createCalculator();
    res.subtract(1);
    assert.equal(res.get(), -1);
  });

  it('should subtract if we supply string with a number', () => {
    const res = createCalculator();
    res.subtract('1');
    assert.equal(res.get(), -1);
  });

  it('should return NaN if we supply not a number in add', () => {
    const res = createCalculator();
    res.add('d');
    assert.isNaN(res.get());
  });

  it('should return NaN if we supply not a number in subtract', () => {
    const res = createCalculator();
    res.subtract('d');
    assert.isNaN(res.get());
  });

  it('should not change the internal state from outside', () => {
    const res = createCalculator();
    res.value = 10;
    assert.equal(res.get(), 0);
  });

  it('should return 5 for add(1) and add(4)', () => {
    const res = createCalculator();
    res.add(1);
    res.add(4);
    assert.equal(res.get(), 5);
  });

  it('should return -5 for subtract(1) and subtract(4)', () => {
    const res = createCalculator();
    res.subtract(1);
    res.subtract(4);
    assert.equal(res.get(), -5);
  });

  it('should return 3 for add(5) and subtract(2)', () => {
    const res = createCalculator();
    res.add(5);
    res.subtract(2);
    assert.equal(res.get(), 3);
  });

  it('should return 5.5 for add(2.2) and add(1.1) and add(2.2)', () => {
    const res = createCalculator();
    res.add(2.2);
    res.add(1.1);
    res.add(2.2);
    assert.equal(res.get(), 5.5);
  });

  it('should return -0.5 for subtract(0.3) and subtract(0.2)', () => {
    const res = createCalculator();
    res.subtract(0.3);
    res.subtract(0.2);
    assert.equal(res.get(), -0.5);
  });
});
