const { roundTax } = require('../utils/utils');

class Item {
    constructor(line) {
        const parts = line.split(' ');
        const atIndex = parts.indexOf('at');

        this.quantity = parseInt(parts[0]);
        this.price = parseFloat(parts[atIndex + 1]);
        this.name = parts.slice(1, atIndex).join(' ');

        this.isImported = this.name.includes("imported");
        this.isExempt = this.checkIfExempt();
        this.tax = this.calculateTax();
        this.totalPrice = this.price + this.tax;
    }

    checkIfExempt() {
        const exemptKeywords = ['book', 'chocolate', 'pill'];
        return exemptKeywords.some(word => this.name.includes(word));
    }

    calculateTax() {
        let taxRate = 0;

        if (!this.isExempt) {
            taxRate += 0.10;
        }

        if (this.isImported) {
            taxRate += 0.05;
        }

        return roundTax(this.price * taxRate);
    }

    getDisplayLine() {
        return `${this.quantity} ${this.name}: ${this.totalPrice.toFixed(2)}`;
    }
}

module.exports = { Item };
