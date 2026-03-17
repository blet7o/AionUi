const crypto = require('crypto');

const provided = "ad";
const expected = "admin";

const p_pad = provided.padEnd(expected.length, '0');
const e_pad = expected.padEnd(provided.length, '0');

console.log('provided padded:', p_pad);
console.log('expected padded:', e_pad);

try {
  console.log('result:', crypto.timingSafeEqual(Buffer.from(p_pad), Buffer.from(e_pad)));
} catch (e) {
  console.log('error:', e.message);
}
