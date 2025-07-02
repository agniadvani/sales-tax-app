const { Item } = require('../DAO/Item');

describe('Item Tax Calculation', () => {
    test('Book should not have any tax', () => {
        const item = new Item("1 book at 12.49");
        expect(item.tax).toBe(0);
        expect(item.totalPrice).toBeCloseTo(12.49);
    });

    test('Music CD should have 10% tax', () => {
        const item = new Item("1 music CD at 14.99");
        expect(item.tax).toBe(1.5);
        expect(item.totalPrice).toBeCloseTo(16.49);
    });

    test('Imported chocolate should have 5% import tax', () => {
        const item = new Item("1 imported box of chocolates at 10.00");
        expect(item.tax).toBe(0.5);
        expect(item.totalPrice).toBeCloseTo(10.50);
    });

    test('Imported perfume should have 15% tax (10% + 5%)', () => {
        const item = new Item("1 imported bottle of perfume at 47.50");
        expect(item.tax).toBe(7.15);
        expect(item.totalPrice).toBeCloseTo(54.65);
    });

    test('Headache pills should be tax-exempt', () => {
        const item = new Item("1 packet of headache pills at 9.75");
        expect(item.tax).toBe(0);
        expect(item.totalPrice).toBeCloseTo(9.75);
    });
});
