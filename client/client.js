var socket = io();

socket.on('temperature-logged', function (temp) {
  $('#temperature-display').text(temp);
});

// socket.on('temperature-logged', function (temp) {
//   $('#temperature-list').prepend($('<li>').text(temp));
// });

socket.on('temperature-ok', function (message) {
  $('#status').text('status: OK (70°F to 79°F)').css({'color': 'green'});
  $('#temperature-display').css({'color': 'black'});
  $('#fanCooling-status').text('Cooling fan: OFF').css({'color': 'gray'});
  $('#fanHeating-status').text('Heating fan: OFF').css({'color': 'gray'});
  $('#co2Servo-status').text('CO2 servo: ON').css({'color': 'green'});
  $('#air-messages').text('');
});

socket.on('temperature-too-high', function (message) {
  $('#status').text('status:  Air Temperature is above 79°F!').css({'color': 'red'});
  $('#temperature-display').css({'color': 'red'});
  $('#fanCooling-status').text('Cooling fan: ON').css({'color': 'red'});
  $('#fanHeating-status').text('Heating fan: OFF').css({'color': 'gray'});
  $('#co2Servo-status').text('CO2 servo: OFF').css({'color': 'gray'});
  $('#air-messages').text('text sent: Air Temperature is above 79°F!');
});

socket.on('temperature-too-low', function (message) {
  $('#status').text('status:  Air Temperature is below 70°F!').css({'color': 'red'});
  $('#temperature-display').css({'color': 'red'});
  $('#fanCooling-status').text('Cooling fan: OFF').css({'color': 'gray'});
  $('#fanHeating-status').text('Heating fan: ON').css({'color': 'red'});
  $('#co2Servo-status').text('CO2 servo: ON').css({'color': 'green'});
  $('#air-messages').text('text sent: Air Temperature is below 70°F!');
});
