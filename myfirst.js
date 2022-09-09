const http = require('http')
var dt = require('./myfirstmodule');
var url = require('url')

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.write("The date and time are currently: " + dt.myDateTime());
//   res.write(`\n${req.url}`)
//   res.end('\nHello World\nHow are you?')
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(`\n${txt}`);
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/?year=2017&month=July`)
})
