const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then(() => {
      res.end();
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.listen(1245);

module.exports = app;
