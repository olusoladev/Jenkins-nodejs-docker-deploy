const assert = require('assert');
const http = require('http');
const app = require('../src/server');

const server = app.listen(0, () => {
  const { port } = server.address();

  http.get(`http://127.0.0.1:${port}/`, (res) => {
    let body = '';

    res.on('data', (chunk) => {
      body += chunk;
    });

    res.on('end', () => {
      try {
        assert.strictEqual(res.statusCode, 200);
        assert.strictEqual(body, 'Hello World');
        server.close();
      } catch (error) {
        server.close(() => {
          throw error;
        });
      }
    });
  }).on('error', (error) => {
    server.close(() => {
      throw error;
    });
  });
});
