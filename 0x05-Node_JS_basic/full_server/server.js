const express = require('express');
const router = require('./routes');

const app = express();
app.use('/', router);

const port = 1245;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
