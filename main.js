var http = require('http');
var url = require('url');
var bencode = require('bencode');

const VERSION = '1.0.0'

var server = http.createServer(function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('X-Tracker-Version', 'yowmamasita/tracker ' + VERSION);

  var queryObject = url.parse(req.url, true).query;
  console.log(queryObject);

  res.writeHead(200);
  res.end('Hello Http');
});
server.listen(8080);
