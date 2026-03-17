const bcrypt = require('bcryptjs');
async function run() {
  console.log(await bcrypt.hash('dummy', 10));
}
run();
