const numberOperations = require('./solution.js');
const { expect } = require('chai');

describe('numberOperations', function () {
  it('powNumber', () => {
    expect(numberOperations.powNumber(1)).to.equal(1)
    expect(numberOperations.powNumber(2)).to.equal(4)
    expect(numberOperations.powNumber(4)).to.equal(16)
  });

  it('inNaN', () => {
      expect(() => numberOperations.numberChecker('a')).to.throws(`The input is not a number!`)
      expect(numberOperations.numberChecker('')).to.equal('The number is lower than 100!')
      expect(numberOperations.numberChecker('1')).to.equal('The number is lower than 100!')
      expect(numberOperations.numberChecker('101')).to.equal('The number is greater or equal to 100!')
      expect(numberOperations.numberChecker('100')).to.equal('The number is greater or equal to 100!')
  })

  it('sumArrays', () => {
    expect(numberOperations.sumArrays([1, 2, 3], [1, 2, 3, 4])).to.deep.equal([2, 4, 6, 4])
    expect(numberOperations.sumArrays([1, 2, 3], [1, 2, 3, 4, 6])).to.deep.equal([2, 4, 6, 4, 6])
    expect(numberOperations.sumArrays([1, 2, 3], [1, 2, 3, 4, 6])).to.deep.equal([2, 4, 6, 4, 6])
    expect(numberOperations.sumArrays([1], [1])).to.deep.equal([2])
    expect(numberOperations.sumArrays([1, 2], [1, 2])).to.deep.equal([2, 4])
  })
});

