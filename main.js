var http = require('http');
var url = require('url');
var bencode = require('bencode');

const VERSION = '1.0.0'

var server = http.createServer(function(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('X-Tracker-Version', 'yowmamasita/tracker ' + VERSION);

  var queryObject = url.parse(req.url, true).query;
  console.log(queryObject);

  // queryObject['info_hash']
  // queryObject['peer_id']
  // queryObject['ip']
  // queryObject['port']
  // queryObject['uploaded']
  // queryObject['downloaded']
  // queryObject['left']
  // queryObject['event']

  var data = {};

  try {
    data = {
      'interval': 1800,
      'min interval': 300,
    };

    try {
      //
    }
    catch (e) {
      data['warning message'] = e.message;
    }
  }
  catch (e) {
    // failure reason: If present, then no other keys may be present
    data = {
      'failure reason': e.message
    };
  }

  res.writeHead(200);
  res.end(bencode.encode(data));
});
server.listen(8080);
