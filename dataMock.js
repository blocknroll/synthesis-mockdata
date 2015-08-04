var app  = require('express')();
var http = require('http').Server(app);
var io   = require('socket.io')(http);
// var socket = io();

function DataMock() {};


io.on('connection', function(socket) {

  DataMock.prototype.dataLoop = function () {
    setTimeout(function () {
      var i = 1;
      console.log('temperature-logged ' + '77°F');
      socket.emit('temperature-logged', '77°F');
      i++;
      if (i < 10) {
        this.dataLoop();
      }
    }, 1000)
  };

  socket.on('temperature-logged', function (temp) {
    console.log('Temperature: ' + temp);
    io.emit('temperature-logged', temp);
  });

});


// var i = 1;
// var temp = 75;
// function dataLoop() {
//   setTimeout(function () {
//     console.log('temperature-logged: ' + temp)
//     socket.emit('temperature-logged', temp + '°F');
//     i++;
//     temp++;
//     if (i < 10) {
//       dataLoop();
//     }
//   }, 1000)
// };
// dataLoop();



module.exports = DataMock;
