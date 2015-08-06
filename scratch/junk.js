
var temperature = [
  { fahrenheit: 75 },
  { fahrenheit: 76 },
  { fahrenheit: 77 },
]

// want:
// temperature[0][fahrenheit]

// works
console.log(temperature[0].fahrenheit);
console.log(temperature[1].fahrenheit);
console.log(temperature[2].fahrenheit);

// works
for (var i = 0; i < 1000; i++) {
  console.log(temperature[i].fahrenheit);
};


// best so far(renheit)
for (var i = 0, l = temperature.length; i < l; i++) {
  var temp = temperature[i].fahrenheit;
  console.log(temp);
}


// more explicit
var i = 0;

function temperatureLoop() {
    console.log(temperature[i].fahrenheit);
    i++;
    if (i < temperature.length) {
      temperatureLoop();
    }
}
temperatureLoop();






// TIMEOUTS /////////////////////////////////////////////////////////////


// dont make functions within a loop
for (var i = 0, l = temperature.length; i < l; i++) {
  var temp = temperature[i].fahrenheit;
  setTimeout(function () {
    console.log(temp);
  }, 3000);
}


// timeout not working right
function temperatureLoop() {
  setTimeout(function () {
    for (var i = 0, l = temperature.length; i < l; i++) {
      var temp = temperature[i].fahrenheit;
      console.log(temp);
    }
  }, 3000);
}
temperatureLoop();





// works! //////////////////
var i = 0;

function temperatureLoop() {
  setTimeout(function () {
    console.log(temperature[i].fahrenheit);
    i++;
    if (i < temperature.length) {
      temperatureLoop();
    }
  }, 3000);
}
temperatureLoop();






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
  { fahrenheit: 75 },
  { fahrenheit: 75 },
  { fahrenheit: 74 },
  { fahrenheit: 73 },
  { fahrenheit: 72 },
  { fahrenheit: 71 },
  { fahrenheit: 70 },
  { fahrenheit: 69 },
  { fahrenheit: 68 },
  { fahrenheit: 67 },
  { fahrenheit: 67 },
  { fahrenheit: 68 },
  { fahrenheit: 69 },
  { fahrenheit: 70 },
  { fahrenheit: 71 },
  { fahrenheit: 72 },
  { fahrenheit: 73 },
  { fahrenheit: 74 },
];







// var temperature = [
//   fahrenheit: 75,
//   fahrenheit: 76,
//   fahrenheit: 77,
//   fahrenheit: 78,
//   fahrenheit: 79,
//   fahrenheit: 80,
//   fahrenheit: 81,
//   fahrenheit: 82,
//   fahrenheit: 83,
//   fahrenheit: 84,
//   fahrenheit: 84,
//   fahrenheit: 83,
//   fahrenheit: 82,
//   fahrenheit: 81,
//   fahrenheit: 80,
//   fahrenheit: 79,
//   fahrenheit: 78,
//   fahrenheit: 77,
//   fahrenheit: 76,
//   fahrenheit: 75
// ]








/////////////////////////////////////////////////////////////////

// ORIGINAL TEST LOOP
// var i = 1;
// var temp = 75;
//
// function dataLoopUp() {
//   setTimeout(function () {
//     console.log('temperature-logged: ' + temp)
//     socket.emit('temperature-logged', temp + '°F');
//     i++;
//     temp++;
//     if (i < 10) {
//       dataLoopUp();
//     };
//     if (temp > 80) {
//       console.log('temperature-too-high');
//       socket.emit('temperature-too-high');
//     };
//   }, 1000)
// };
//
// dataLoopUp();
