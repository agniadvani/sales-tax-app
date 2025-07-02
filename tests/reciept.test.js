const { Receipt } = require('../DAO/Reciept');
const { Item } = require('../DAO/Item');

describe('Receipt', () => {
    let receipt;

    beforeEach(() => {
        receipt = new Receipt();
    });

    test('should calculate total tax and price correctly', () => {
        const items = [
            new Item("1 book at 12.49"),
            new Item("1 music CD at 14.99"),
            new Item("1 chocolate bar at 0.85")
        ];

        items.forEach(item => receipt.addItem(item));

        const totalTaxes = receipt.items.reduce((sum, item) => sum + item.tax, 0);
        const totalPrice = receipt.items.reduce((sum, item) => sum + item.totalPrice, 0);

        expect(totalTaxes).toBeCloseTo(1.50);
        expect(totalPrice).toBeCloseTo(29.83);
    });


});
