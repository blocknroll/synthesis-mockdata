module.exports = function (io) {

  io.on('connection', function (socket) {

    socket.on('temperature-ok', function () {
      io.emit('fanCooling-OFF');
    });

    socket.on('temperature-too-high', function () {
      io.emit('fanCooling-ON');
    });

  });

};
