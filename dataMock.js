var io   = require('socket.io')();
var socket = io();

var i = 1;

function dataLoop() {
  setTimeout(function () {
    console.log('Temperature: 77');
    socket.emit('temperature-logged', '77 Fahrenheit');
    i++;
    if (i < 10) {
      dataLoop();
    }
  }, 1000)
}

dataLoop();



// module.exports = dataMock;
