const crypto = require('crypto');

const provided = "dummy";
const expected = "dummy00";

const b1 = Buffer.from(provided.padEnd(expected.length, '0'));
const b2 = Buffer.from(expected.padEnd(provided.length, '0'));

console.log(b1.toString());
console.log(b2.toString());
console.log(crypto.timingSafeEqual(b1, b2));
