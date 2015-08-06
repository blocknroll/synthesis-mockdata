var socket = io();

socket.on('temperature-logged', function (temp) {
  $('#temperature-list').prepend($('<li>').text(temp));
});

socket.on('temperature-too-high', function (message) {
  $('#status').text("status:  Air Temperature is above 80!").css({'color': 'red'});
  $('#temperature-list').css({'color': 'red'});
  $('#messages').text('text sent: Air Temperature is above 80!');
});
