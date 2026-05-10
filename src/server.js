const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.type('text/plain').send('Hello World');
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Hello World app listening on port ${port}`);
  });
}

module.exports = app;
