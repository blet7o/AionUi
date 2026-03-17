const bcrypt = require('bcryptjs');

async function test() {
  const password = "mysecretpassword123";
  const hash = await bcrypt.hash(password, 10);

  const provided = "wrongpassword";

  let start = process.hrtime.bigint();
  await bcrypt.compare(provided, hash);
  console.log('bcrypt.compare real hash:', Number(process.hrtime.bigint() - start) / 1000000, 'ms');

  start = process.hrtime.bigint();
  // using an invalid hash format will fail fast in bcrypt
  try {
    await bcrypt.compare("dummy", "dummy");
  } catch (e) {
  }
  console.log('bcrypt.compare fake hash (dummy):', Number(process.hrtime.bigint() - start) / 1000000, 'ms');

  // Let's create a dummy hash to use for constant time comparison
  const dummyHash = await bcrypt.hash("dummy", 10);
  start = process.hrtime.bigint();
  await bcrypt.compare("dummy", dummyHash);
  console.log('bcrypt.compare valid dummy hash:', Number(process.hrtime.bigint() - start) / 1000000, 'ms');
}

test();
