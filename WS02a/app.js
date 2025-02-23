const math = require('./math');
const stringUtils = require('./stringUtils');
const dateUtils = require('./dateUtils');

console.log("Hello, Node.js!");

console.log(math.add(1, 1));
console.log(math.subtract(5, 6));

const isoteksti = stringUtils.uppercase("hello, node.js!")
const reverse = stringUtils.reverse("hello, node.js!")
console.log(isoteksti)
console.log(reverse)

const currentdate = dateUtils.currentdate()
console.log(currentdate)
const formatteddate = dateUtils.formatdate(currentdate)
console.log(formatteddate)