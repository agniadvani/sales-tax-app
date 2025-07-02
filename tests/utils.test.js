const { roundTax } = require('../utils/utils');

describe('Tax rounding', () => {
    test('Rounding 1.499 should be 1.50', () => {
        expect(roundTax(1.499)).toBe(1.5);
    });

    test('Rounding 1.51 should be 1.55', () => {
        expect(roundTax(1.51)).toBe(1.55);
    });

    test('Rounding 0 should be 0', () => {
        expect(roundTax(0)).toBe(0);
    });
});
