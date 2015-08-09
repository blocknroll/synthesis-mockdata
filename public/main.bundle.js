/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	var socket = io();

	socket.on('temperature-logged', function (temp) {
	  $('#temperature-display').text(temp);
	});

	// socket.on('temperature-logged', function (temp) {
	//   $('#temperature-list').prepend($('<li>').text(temp));
	// });

	socket.on('temperature-ok', function (message) {
	  $('#status').text("status: OK (70°F to 79°F)").css({'color': 'green'});
	  $('#temperature-display').css({'color': 'black'});
	  $('#fanCooling-status').text("Cooling fan: OFF").css({'color': 'gray'});
	  $('#fanHeating-status').text("Heating fan: OFF").css({'color': 'gray'});
	  $('#messages').text('');
	});

	socket.on('temperature-too-high', function (message) {
	  $('#status').text("status:  Air Temperature is above 79°F!").css({'color': 'red'});
	  $('#temperature-display').css({'color': 'red'});
	  $('#fanCooling-status').text("Cooling fan: ON").css({'color': 'red'});
	  $('#fanHeating-status').text("Heating fan: OFF").css({'color': 'gray'});
	  $('#messages').text('text sent: Air Temperature is above 79°F!');
	});

	socket.on('temperature-too-low', function (message) {
	  $('#status').text("status:  Air Temperature is below 70°F!").css({'color': 'red'});
	  $('#temperature-display').css({'color': 'red'});
	  $('#fanCooling-status').text("Cooling fan: OFF").css({'color': 'gray'});
	  $('#fanHeating-status').text("Heating fan: ON").css({'color': 'red'});
	  $('#messages').text('text sent: Air Temperature is below 70°F!');
	});


/***/ }
/******/ ]);