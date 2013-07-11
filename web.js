var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buffer = new Buffer();
  response.send(buffer.toString('utf8', fs.readFileSync("index.html")));
/*
  response.send(buffer.toString(fs.readFileSync('index.html'),'utf8')); 
  fs.readFileSync('./index.html', function (err, data) {
    if (err) throw err;
    var my_str = data.toString();
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

