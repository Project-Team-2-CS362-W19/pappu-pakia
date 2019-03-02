env = require("../../../testSetup");
mit = env.mit;
doc = env.doc;

test('BranchUtils_init', () => {
  expect(mit.BranchUtils.count).toBe(4);
  mit.BranchUtils.init();
  expect(mit.BranchUtils.branch_img).toEqual(mit.image.branch);
  expect(mit.BranchUtils.branches.length).toBe(0);
});

test('BranchUtils_getRandomBranchPos', () => {
  var pos = mit.BranchUtils.getRandomBranchPos();
  expect(pos.x).toBeGreaterThanOrEqual(2000);
  expect(pos.x).toBeLessThanOrEqual(2500);
});

test('BranchUtils_create', () => {
  mit.BranchUtils.create();
  expect(mit.BranchUtils.branches.length).toBeGreaterThan(0);
  expect(mit.BranchUtils.branches[0].escape_h).toBe(150);
  expect(mit.BranchUtils.branches[1].escape_h).toBe(150);
  expect(mit.BranchUtils.branches[0].escape_w).toBe(mit.image.branch.width);
  expect(mit.BranchUtils.branches[1].escape_w).toBe(mit.image.branch.width);
  expect(mit.BranchUtils.branches[0].w).toBe(mit.image.branch.width);
  expect(mit.BranchUtils.branches[1].w).toBe(mit.image.branch.width);
  expect(mit.BranchUtils.branches[0].h).toBe(mit.image.branch.height);
  expect(mit.BranchUtils.branches[1].h).toBe(mit.image.branch.height);
  expect(mit.BranchUtils.branches[0].y).toBe(0);
  expect(mit.BranchUtils.branches[1].y).toBe(0);
});
