module.exports = function (io) {

  io.on('connection', function(socket) {

    var co2 = [
      { ppm: 875 },
      { ppm: 900 },
      { ppm: 925 },
      { ppm: 950 },
      { ppm: 975 },
      { ppm: 1000 },
      { ppm: 950 },
      { ppm: 900 },
      { ppm: 850 },
      { ppm: 800 },
      { ppm: 750 },
      { ppm: 700 },
      { ppm: 650 },
      { ppm: 600 },
      { ppm: 550 },
      { ppm: 500 },
      { ppm: 500 },
      { ppm: 550 },
      { ppm: 600 },
      { ppm: 650 },
      { ppm: 700 },
      { ppm: 750 },
      { ppm: 800 },
      { ppm: 850 },
      { ppm: 900 },
      { ppm: 950 },
      { ppm: 950 },
      { ppm: 950 },
      { ppm: 950 },
      { ppm: 950 },
      { ppm: 950 },
      { ppm: 950 },
      { ppm: 950 },
      { ppm: 950 },
      { ppm: 950 },
      { ppm: 950 },
      { ppm: 950 },
      { ppm: 1000 },
      { ppm: 1000 },
      { ppm: 1000 },
      { ppm: 1000 },
      { ppm: 1000 },
      { ppm: 1000 },
      { ppm: 1000 },
      { ppm: 1000 },
      { ppm: 1000 },
      { ppm: 950 },
      { ppm: 900 },
      { ppm: 850 },
      { ppm: 800 },
      { ppm: 750 },
      { ppm: 700 },
      { ppm: 650 },
      { ppm: 600 },
      { ppm: 550 },
      { ppm: 500 },
      { ppm: 500 },
      { ppm: 500 },
      { ppm: 500 },
      { ppm: 550 },
      { ppm: 600 },
      { ppm: 650 },
      { ppm: 700 },
      { ppm: 750 },
      { ppm: 800 },
      { ppm: 850 },
      { ppm: 900 },
      { ppm: 950 },
      { ppm: 950 },
      { ppm: 950 },
      { ppm: 950 },
      { ppm: 950 },
      { ppm: 950 },
      { ppm: 950 },
      { ppm: 950 },
      { ppm: 950 },
      { ppm: 950 },
      { ppm: 950 },
      { ppm: 1000 },
      { ppm: 1000 },
      { ppm: 1000 },
      { ppm: 1000 },
    ];


    var c = 0;

    function co2Loop() {

      setTimeout(function () {
        console.log(co2[c].ppm);
        socket.emit('co2-logged', co2[c].ppm + 'PPM');
        c++;
        if (c < (co2.length)-1) {
          co2Loop();
        }

        if (co2[c].ppm > 1000 && co2[c].ppm < 1500) {
          console.log('co2-ok');
          socket.emit('co2-ok');
        }
        if (co2[c].ppm > 1500) {
          console.log('co2-too-high');
          socket.emit('co2-too-high');
        }
        if (co2[c].ppm < 999) {
          console.log('co2-too-low');
          socket.emit('co2-too-low');
        }

      }, 2000);
    }
    co2Loop();



    socket.on('co2-logged', function (co2) {
      console.log('co2: ' + co2);
      io.emit('co2-logged', co2);
    });

    socket.on('co2-ok', function () {
      io.emit('co2-ok');
    });

    socket.on('co2-too-high', function () {
      io.emit('co2-too-high');
    });

    socket.on('co2-too-low', function () {
      io.emit('co2-too-low');
    });

  });

};
