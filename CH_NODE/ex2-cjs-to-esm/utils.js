const path = require('path');
const TAX = 0.05;
function withTax(price) { return Math.round(price * (1 + TAX)); }
class Cart {
  constructor() { this.items = []; }
  add(name, price) { this.items.push({ name, price }); return this; }
  total() { return this.items.reduce((s, i) => s + withTax(i.price), 0); }
}
module.exports = Cart;
module.exports.withTax = withTax;
module.exports.dataDir = path.join(__dirname, 'data');
