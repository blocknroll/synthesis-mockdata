module.exports = function (io) {

  io.on('connection', function(socket) {

    var i = 1;
    var temp = 75;
    function dataLoopUp() {
      setTimeout(function () {
        console.log('temperature-logged: ' + temp)
        socket.emit('temperature-logged', temp + '°F');
        i++;
        temp++;
        if (i < 10) {
          dataLoopUp();
        };
        if (temp > 80) {
          console.log('temperature-too-high');
          socket.emit('temperature-too-high');
        };
      }, 1000)
    };
    dataLoopUp();

    // function dataLoopDown() {
    //   setTimeout(function () {
    //     console.log('temperature-logged: ' + temp)
    //     socket.emit('temperature-logged', temp + '°F');
    //     i++;
    //     temp--;
    //     if (i < 10) {
    //       dataLoopDown();
    //     };
    //     if (temp > 80) {
    //       console.log('temperature-too-high');
    //       socket.emit('temperature-too-high');
    //     };
    //   }, 1000)
    // };
    // dataLoopDown();





    socket.on('temperature-logged', function (temp) {
      console.log('Temperature: ' + temp);
      io.emit('temperature-logged', temp);
    });

    socket.on('temperature-too-high', function () {
      io.emit('temperature-too-high');
    });

  });

};



        // socket.emit('temperature-logged', 75);
        // console.log('temperature-logged: 75');
        // setTimeout(function () {
        // }, 3000);
        // socket.emit('temperature-logged', 76);
        // console.log('temperature-logged: 76');
        // setTimeout(function () {
        // }, 3000);
        // socket.emit('temperature-logged', 77);
        // console.log('temperature-logged: 77');
