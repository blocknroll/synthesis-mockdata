var app  = require('express')();
var http = require('http').Server(app);
var io   = require('socket.io')(http);
// var DataMock = require('./dataMock');
// var data = new DataMock();


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket) {

  var i = 1;
  var temp = 75;
  function dataLoop() {
    setTimeout(function () {
      console.log('temperature-logged: ' + temp)
      socket.emit('temperature-logged', temp + '°F');
      i++;
      temp++;
      if (i < 10) {
        dataLoop();
      }
    }, 1000)
  };
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
