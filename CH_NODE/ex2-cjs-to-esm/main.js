const Cart = require('./utils');
const { withTax, dataDir } = require('./utils');
const cart = new Cart().add('筆記本', 100).add('原子筆', 20);
console.log(cart.total(), withTax(100), dataDir);
