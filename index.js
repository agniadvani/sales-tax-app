const { Item } = require('./DAO/Item');
const { Receipt } = require('./DAO/Reciept');

const input1 = [
    "1 book at 12.49",
    "1 music CD at 14.99",
    "1 chocolate bar at 0.85"
];

const input2 = [
    "1 imported box of chocolates at 10.00",
    "1 imported bottle of perfume at 47.50"
];

const input3 = [
    "1 imported bottle of perfume at 27.99",
    "1 bottle of perfume at 18.99",
    "1 packet of headache pills at 9.75",
    "1 box of imported chocolates at 11.25"
];

function printReceipt(input) {
    const receipt = new Receipt();

    input.forEach(line => {
        const item = new Item(line);
        receipt.addItem(item);
    });

    receipt.printReceipt();
}

console.log("\nOutput 1:");
printReceipt(input1);

console.log("\nOutput 2:");
printReceipt(input2);

console.log("\nOutput 3:");
printReceipt(input3);
