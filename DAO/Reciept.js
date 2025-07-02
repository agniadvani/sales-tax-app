class Receipt {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    printReceipt() {
        let totalTaxes = 0;
        let totalPrice = 0;

        this.items.forEach(item => {
            console.log(item.getDisplayLine());
            totalTaxes += item.tax;
            totalPrice += item.totalPrice;
        });

        console.log(`Sales Taxes: ${totalTaxes.toFixed(2)}`);
        console.log(`Total: ${totalPrice.toFixed(2)}`);
    }
}

module.exports = { Receipt };
