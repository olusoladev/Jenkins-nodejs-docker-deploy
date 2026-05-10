const http = require('http');

const port = process.env.PORT || 3000;

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Hello World app listening on port ${port}`);
  });
}

module.exports = app;
