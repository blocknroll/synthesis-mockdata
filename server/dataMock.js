module.exports = function (io) {

  io.on('connection', function(socket) {

    var temperature = [
      { fahrenheit: 75 },
      { fahrenheit: 76 },
      { fahrenheit: 77 },
      { fahrenheit: 78 },
      { fahrenheit: 79 },
      { fahrenheit: 80 },
      { fahrenheit: 81 },
      { fahrenheit: 82 },
      { fahrenheit: 83 },
      { fahrenheit: 84 },
      { fahrenheit: 84 },
      { fahrenheit: 83 },
      { fahrenheit: 82 },
      { fahrenheit: 81 },
      { fahrenheit: 80 },
      { fahrenheit: 79 },
      { fahrenheit: 78 },
      { fahrenheit: 77 },
      { fahrenheit: 76 },
      { fahrenheit: 75 },
      { fahrenheit: 74 },
      { fahrenheit: 73 },
      { fahrenheit: 72 },
      { fahrenheit: 71 },
      { fahrenheit: 70 },
      { fahrenheit: 69 },
      { fahrenheit: 68 },
      { fahrenheit: 67 },
      { fahrenheit: 66 },
      { fahrenheit: 66 },
      { fahrenheit: 67 },
      { fahrenheit: 68 },
      { fahrenheit: 69 },
      { fahrenheit: 70 },
      { fahrenheit: 71 },
      { fahrenheit: 72 },
      { fahrenheit: 73 },
      { fahrenheit: 74 },
    ];


    var i = 0;

    function temperatureLoop() {
      setTimeout(function () {
        console.log(temperature[i].fahrenheit);
        socket.emit('temperature-logged', temperature[i].fahrenheit + '°F');
        i++;
        if (i < (temperature.length)-1) {
          temperatureLoop();
        }
        if (temperature[i].fahrenheit > 70 && temperature[i].fahrenheit < 79) {
          console.log('temperature-ok');
          socket.emit('temperature-ok');
        }
        if (temperature[i].fahrenheit > 80) {
          console.log('temperature-too-high');
          socket.emit('temperature-too-high');
        }
        if (temperature[i].fahrenheit < 69) {
          console.log('temperature-too-low');
          socket.emit('temperature-too-low');
        }
      }, 1000);
    }
    temperatureLoop();



    // for (var l = 0; l < 11; l++) {
    //   temperatureLoop();
    // };



    socket.on('temperature-logged', function (temp) {
      console.log('Temperature: ' + temp);
      io.emit('temperature-logged', temp);
    });

    socket.on('temperature-ok', function () {
      io.emit('temperature-ok');
    });

    socket.on('temperature-too-high', function () {
      io.emit('temperature-too-high');
    });

    socket.on('temperature-too-low', function () {
      io.emit('temperature-too-low');
    });

  });

};
