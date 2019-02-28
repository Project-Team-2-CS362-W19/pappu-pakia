mit = require("../../../testSetup");

test('updateFlyFrameCountTest', () => {
  mit.Pappu.updateFlyFrameCount();
  expect(mit.Pappu.fly_frame_count).toBe(1);
  mit.Pappu.updateFlyFrameCount(0);
  expect(mit.Pappu.fly_frame_count).toBe(0);
});
