module.exports = function (io) {

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
        };
        if (temp > 80) {
          console.log('temperature-too-high');
          socket.emit('temperature-too-high');
        };
      }, 1000)
    };
    dataLoop();



    socket.on('temperature-logged', function (temp) {
      console.log('Temperature: ' + temp);
      io.emit('temperature-logged', temp);
    });

    socket.on('temperature-too-high', function () {
      io.emit('temperature-too-high');
    });

    // socket.on('disconnect', function () {
    //   console.log('user disconnected');
    // });
  });

};
