const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello ALX!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then(() => {
        res.end();
      })
      .catch((err) => {
        res.end(err.message);
      });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
