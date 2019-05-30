
require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.PORT || 4000; // Heroku auto-assigns a number to PORT so this needs to be dynamic

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
