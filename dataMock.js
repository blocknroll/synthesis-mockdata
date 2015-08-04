var io   = require('socket.io');
var socket = io();

var i = 1;

function dataLoop() {
  setTimeout(function () {
    console.log('Temperature: 77');
    socket.emit('temperature-logged', 'Temperature: 77');
    i++;
    if (i < 10) {
      dataLoop();
    }
  }, 1000)
}

dataLoop();



// module.exports = dataMock;
