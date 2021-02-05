// Unit testing done with the framework 'mocha' and the assertion framework 'chai'

const mathEnforcer = require('./04_MathEnforcer');
const { expect } = require('chai');

describe("testing the object's functionality", () => {
  it('expect 6 with valid argument', () => {
    expect(mathEnforcer.addFive(1)).to.equal(6);
  });

  it('expect undefined with unvalid argument', () => {
    expect(mathEnforcer.addFive([1])).to.undefined;
  });

  it('expect 1 with valid argument', () => {
    expect(mathEnforcer.subtractTen(11)).to.equal(1);
  });
  
  it('expect undefined with unvalid argument', () => {
    expect(mathEnforcer.subtractTen('1')).to.undefined;
  });

  it('expect 2 with valid argument', () => {
    expect(mathEnforcer.sum(1, 1)).to.equal(2);
  });

  it('expect undefined with unvalid argument', () => {
    expect(mathEnforcer.sum('1', 1)).to.undefined;
  });

  it('expect undefined with unvalid argument', () => {
    expect(mathEnforcer.sum(1, '1')).to.undefined;
  });

  // test overloading
  it('expect -1 with valid negative argument', () => {
    expect(mathEnforcer.addFive(-6)).to.equal(-1);
  });

  it('expect -11 with valid negative argument', () => {
    expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
  });

  it('expect -2 with valid negative argument', () => {
    expect(mathEnforcer.sum(-1, -1)).to.equal(-2);
  });

  it('expect 5.5 with valid decimal number', () => {
    expect(mathEnforcer.addFive(0.5)).to.equal(5.5);
  });

  it('expect 1.5 with valid decimal number', () => {
    expect(mathEnforcer.subtractTen(11.5)).to.equal(1.5);
  });
  
  it('expect 2.5 with valid decimal number', () => {
    expect(mathEnforcer.sum(1.25, 1.25)).to.equal(2.5);
  });
  
  it('expect 0.000000002 with valid decimal number', () => {
    expect(mathEnforcer.sum(0.000000001, 0.000000001)).to.equal(0.000000002);
  });
});
