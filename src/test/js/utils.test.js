utils = require("../../../testSetup").utils;

test('randomNumber', () => {
  var result;
  for (let i = 0; i < 100; i++) {
    result = utils.randomNumber(1, 10);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
  }
}); 
