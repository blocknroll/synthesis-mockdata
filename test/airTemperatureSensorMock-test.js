const assert   = require('chai').assert;
const airTemperatureSensorMock = require('../server/airTemperatureSensorMock');

describe('the airTemperatureSensorMock', function () {

  it('exists', function () {
    assert(airTemperatureSensorMock);
  });


  // it('should display temperatures', function () {
  //
  //   // const airTemperatureSensorMock = new airTemperatureSensorMock();
  //
  //   airTemperatureSensorMock.temperatureLoop();
  //
  //   assert.ok(socket.emit['temperature-logged']);
  // });

});
