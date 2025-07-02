function roundTax(tax) {
    return Math.ceil(tax * 20) / 20;
}
module.exports = { roundTax };