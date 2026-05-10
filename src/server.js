const http = require('http');

const port = process.env.PORT || 3000;
const name = process.env.NAME || 'World iuyghfv';

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello ${name}`);
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Hello ${name} app listening on port ${port}`);
  });
}

module.exports = app;
