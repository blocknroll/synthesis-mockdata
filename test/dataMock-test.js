const assert   = require('chai').assert;
const dataMock = require('../server/dataMock');

describe('the dataMock', function () {

  it('exists', function () {
    assert(dataMock);
  });


  // it('should display temperatures', function () {
  //
  //   // const dataMock = new dataMock();
  //
  //   dataMock.temperatureLoop();
  //
  //   assert.ok(socket.emit['temperature-logged']);
  // });

});
