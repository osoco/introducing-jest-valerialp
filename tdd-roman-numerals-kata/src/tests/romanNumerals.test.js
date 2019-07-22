const arabicToRoman = require('../romanNumerals');

describe('arabicToRoman()', () => {
  it('convert number one', () => {
    expect(arabicToRoman(1)).toBe('I');
  });
  it('convert number two', () => {
    expect(arabicToRoman(2)).toBe('II');
  });
});