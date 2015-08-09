var socket = io();

socket.on('temperature-logged', function (temp) {
  $('#temperature-display').text(temp);
});

// socket.on('temperature-logged', function (temp) {
//   $('#temperature-list').prepend($('<li>').text(temp));
// });

socket.on('temperature-ok', function (message) {
  $('#status').text("status: ok (70°F to 79°F)").css({'color': 'green'});
  $('#temperature-display').css({'color': 'black'});
  $('#messages').text('');
});

socket.on('temperature-too-high', function (message) {
  $('#status').text("status:  Air Temperature is above 79°F!").css({'color': 'red'});
  $('#temperature-display').css({'color': 'red'});
  $('#messages').text('text sent: Air Temperature is above 79°F!');
});

socket.on('temperature-too-low', function (message) {
  $('#status').text("status:  Air Temperature is below 70°F!").css({'color': 'red'});
  $('#temperature-display').css({'color': 'red'});
  $('#messages').text('text sent: Air Temperature is below 70°F!');
});
