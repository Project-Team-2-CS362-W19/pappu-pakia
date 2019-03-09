var mit = require("../../../testSetup").mit;

test('resetAllSpeed', () => {
  mit.Backgrounds.resetAllSpeed();
  expect(mit.Backgrounds.cloud_bg_move_speed).toBe(2);
  expect(mit.Backgrounds.backtree_bg_move_speed).toBe(3);
  expect(mit.Backgrounds.fronttree_bg_move_speed).toBe(5);
  expect(mit.Backgrounds.ground_bg_move_speed).toBe(7);
  expect(mit.Backgrounds.combined_bg_move_speed).toBe(3);
});
