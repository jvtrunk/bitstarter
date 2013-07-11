var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFileSync('/home/ubuntu/bitstarter/index.html', function (err, data) {
    if (err) throw err;
    var my_str = data.toString("ascii", 0, Buffer.byteLength(data,"ascii"));
  });
  response.send(my_str);
/*
  response.send('Hello World 2!');
*/
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

