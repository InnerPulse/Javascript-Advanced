// Unit testing done with the framework 'mocha' and the assertion framework 'chai'

const rgbToHexColor = require('./06.RGBtoHEX');
const { expect } = require('chai');

// Test the following functionality:

// 1 Take three integer numbers, representing the red, green and blue values of an RGB color,
//   each within range [0…255].
// 2 Return the same color in hexadecimal format as a string (e.g. '#FF9EAA').
// 3 Return undefined if any of the input parameters are of invalid type or not in the expected range.

describe('RGBtoHEX function', () => {
  it('convert black to hex', () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
  });

  it('convert white to hex', () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
  });

  it('return undefined for out of range negative numeric', () => {
    expect(rgbToHexColor(-1, 0, 0)).to.undefined;
  });

  it('return undefined for out of range negative numeric', () => {
    expect(rgbToHexColor(0, -1, 0)).to.undefined;
  });

  it('return undefined for out of range negative numeric', () => {
    expect(rgbToHexColor(0, 0, -1)).to.undefined;
  });

  it('return undefined for out of range positive numeric', () => {
    expect(rgbToHexColor(256, 0, 0)).to.undefined;
  });

  it('return undefined for out of range positive numeric', () => {
    expect(rgbToHexColor(0, 256, 0)).to.undefined;
  });

  it('return undefined for out of range positive numeric', () => {
    expect(rgbToHexColor(0, 0, 256)).to.undefined;
  });

  it('return undefined for invalid type arguments', () => {
    expect(rgbToHexColor('0', 0, 0)).to.undefined;
  });

  it('return undefined for invalid type arguments', () => {
    expect(rgbToHexColor(0, [], 0)).to.undefined;
  });

  it('return undefined for invalid type arguments', () => {
    expect(rgbToHexColor(0, 0, {})).to.undefined;
  });

  // test overloading
  it('return #73A7EF', () => {
    expect(rgbToHexColor(115, 167, 239)).to.equal('#73A7EF');
  });
});
