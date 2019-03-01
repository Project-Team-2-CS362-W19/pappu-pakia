utils = require("../../../testSetup").utils;

test('randomNumberTest', () => {
  var result;
  for (let i = 0; i < 100; i++) {
    result = utils.randomNumber(1, 10);
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThanOrEqual(10);
  }
});

test('isIntTest', () => {
  var str = "hello";
  var flt = 2.255;
  var int = 1;
  var strInt = "2";
  var strFlt = "2.255";
  var fltInt = 2.0;
  var strFltInt = "2.0";

  expect(utils.isInt(str)).toBe(false);
  expect(utils.isInt(flt)).toBe(false);
  expect(utils.isInt(int)).toBe(true);
  expect(utils.isInt(strInt)).toBe(true);
  expect(utils.isInt(strFlt)).toBe(false);
  expect(utils.isInt(fltInt)).toBe(true);
  expect(utils.isInt(strFltInt)).toBe(true);
});

test('toRadianTest', () => {
  expect(utils.toRadian(90)).toBeCloseTo(Math.PI/2);
  expect(utils.toRadian(495)).toBeCloseTo(11*Math.PI/4);
  expect(utils.toRadian(-15)).toBeCloseTo(-1*Math.PI/12);
});

test('toDegreeTest', () => {
  expect(utils.toDegree(Math.PI/2)).toBeCloseTo(90);
  expect(utils.toDegree(11*Math.PI/4)).toBeCloseTo(495);
  expect(utils.toDegree(-1*Math.PI/12)).toBeCloseTo(-15);
});

test('intersectTest', () => {
  var A = {start_x: 2, start_y: 6, end_x: 5, end_y: 9}; 
  var intersectingA = {start_x: 4, start_y: 4, end_x: 6, end_y: 12};
  var touchingA = {start_x: 5, start_y: 4, end_x: 7, end_y: 12};
  var notIntersectingA = {start_x: 7, start_y: 4, end_x: 9, end_y: 12};

  expect(utils.intersect(A, intersectingA)).toBe(true);
  expect(utils.intersect(A, touchingA)).toBe(true);
  expect(utils.intersect(A, notIntersectingA)).toBe(false);
});
