const app  = require('express')();
const http = require('http').Server(app);
const io   = require('socket.io')(http);

const dataMock = require('./dataMock')(io);


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function() {
  console.log('listening on *:3000');
});


io.on('connection', function(socket) {

  // socket.on('temperature-logged', function (temp) {
  //   console.log('Temperature: ' + temp);
  //   io.emit('temperature-logged', temp);
  // });
  //
  // socket.on('temperature-too-high', function () {
  //   io.emit('temperature-too-high');
  // })

  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
});
