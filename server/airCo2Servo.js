module.exports = function (io) {

  io.on('connection', function (socket) {

    socket.on('temperature-ok', function () {
      io.emit('co2Servo-ON');
    });

    socket.on('temperature-too-high', function () {
      io.emit('co2Servo-OFF');
    });

  });

};
