var app  = require('express')();
var http = require('http').Server(app);
var io   = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {

  // PUT TEMP LOOPER HERE???
  var i = 1;

  function dataLoop() {
    setTimeout(function () {
      console.log('temperature-logged ' + '77°F');
      socket.emit('temperature-logged', '77°F');
      i++;
      if (i < 10) {
        dataLoop();
      }
    }, 1000)
  }

  dataLoop();


  socket.on('temperature-logged', function (temp) {
    console.log('Temperature: ' + temp);
    io.emit('temperature-logged', temp);
  });

  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});
