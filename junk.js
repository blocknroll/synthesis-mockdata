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
]

function logArrayElements(object) {
  console.log(object[fahrenheit]);
}

temperature.forEach(logArrayElements);

// temperature.forEach( function (fahrenheit) {
//   console.log(temperature[fahrenheit]);
// })

// for (var i = 0, l = data.temperature.length; i < l; i++) {
//   var obj = data.temperature[i];
//   console.log(temperature[fahrenheit]);
// }

// for (var prop in temperature) {
//   console.log(temperature[fahrenheit]);
// }
