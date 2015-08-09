module.exports = function (io) {

  io.on('connection', function (socket) {

    socket.on('temperature-ok', function () {
      io.emit('fanHeating-OFF');
    });

    socket.on('temperature-too-low', function () {
      io.emit('fanHeating-ON');
    });

  });

};
