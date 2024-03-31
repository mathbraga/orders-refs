import {
  isAlphaNumeric,
  isPositiveInteger,
  isPositiveTwoDecimal,
} from './validators';

describe('Validation functions', () => {
  describe('isAlphaNumeric', () => {
    it('should return false if value is not alpha numeric', () => {
      const mockValue = 'A%5';

      expect(isAlphaNumeric(mockValue)).toBe(false);
    });

    it('should return true if value is alpha numeric', () => {
      const mockValue = 'A15';

      expect(isAlphaNumeric(mockValue)).toBe(true);
    });
  });

  describe('isPositiveInteger', () => {
    it('should return false if value is not a positive integer', () => {
      const mockValue1 = -15;
      const mockValue2 = 2.6;

      expect(isPositiveInteger(mockValue1)).toBe(false);
      expect(isPositiveInteger(mockValue2)).toBe(false);
    });

    it('should return true if value is a positive integer', () => {
      const mockValue = 15;

      expect(isPositiveInteger(mockValue)).toBe(true);
    });
  });

  describe('isPositiveTwoDecimal', () => {
    it('should return false if value is not a positive numeric with up to 2 decimals', () => {
      const mockValue1 = '-10';
      const mockValue2 = '10,';
      const mockValue3 = '10,333';

      expect(isPositiveTwoDecimal(mockValue1)).toBe(false);
      expect(isPositiveTwoDecimal(mockValue2)).toBe(false);
      expect(isPositiveTwoDecimal(mockValue3)).toBe(false);
    });

    it('should return true if value is a positive numeric with up to 2 decimals', () => {
      const mockValue1 = '10';
      const mockValue2 = '10,2';
      const mockValue3 = '1,25';

      expect(isPositiveTwoDecimal(mockValue1)).toBe(true);
      expect(isPositiveTwoDecimal(mockValue2)).toBe(true);
      expect(isPositiveTwoDecimal(mockValue3)).toBe(true);
    });
  });
});
