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

  socket.on('disconnect', function () {
    console.log('user disconnected');
  });

});
