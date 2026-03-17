const bcrypt = require('bcryptjs');
const crypto = require('crypto');

async function test() {
  const password = "mysecretpassword123";
  const hash = await bcrypt.hash(password, 10);

  const provided = "wrongpassword";
  const expected = password;

  const start1 = process.hrtime.bigint();
  await bcrypt.compare(provided, hash);
  const end1 = process.hrtime.bigint();

  console.log('bcrypt.compare time:', Number(end1 - start1) / 1000000, 'ms');
}

test();
