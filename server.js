const http = require('http');
const express = require('express');

const app  = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, function () {
 console.log('Listening on port ' + port + '!!!');
});

const io   = require('socket.io')(server);

// const airTemp-ds18b20.js = require('./server/airTemp-ds18b20.js')(io);
const airTemperatureSensorMock = require('./server/airTemperatureSensorMock.js')(io);
const airCo2SensorMock         = require('./server/airCo2SensorMock.js')(io);


module.exports = server;



// io.on('connection', function(socket) {
//
//   socket.on('disconnect', function () {
//     console.log('user disconnected');
//   });
//
// });
