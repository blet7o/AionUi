const bcrypt = require('bcryptjs');

async function test() {
  const password = "mysecretpassword123";
  const hash = await bcrypt.hash(password, 10);

  const provided = "wrongpassword";

  let start = process.hrtime.bigint();
  await bcrypt.compare(provided, hash);
  console.log('bcrypt.compare wrong pass:', Number(process.hrtime.bigint() - start) / 1000000, 'ms');

  start = process.hrtime.bigint();
  await bcrypt.compare("dummy", "dummy");
  console.log('bcrypt.compare dummy string:', Number(process.hrtime.bigint() - start) / 1000000, 'ms');
}

test();
