var env = require("../../../testSetup");
var mit = env.mit;
var doc = env.doc;

test('initTest', () => {
  mit.Pappu.init();
  expect(mit.Pappu.sound).toEqual(doc.getElementById("flap"));
  expect(mit.Pappu.sprite).toEqual(mit.image.pappu);
  expect(mit.Pappu.w).toBe(mit.Pappu.sprite.width);
  expect(mit.Pappu.h).toBe(60);
  expect(mit.Pappu.max_fly_frame_count).toBe(7);
  expect(mit.Pappu.change_per_frame).toBe(1.6);
  expect(mit.Pappu.x).toBe(33);
});

// Code that uses mit.ui or ANYTHING else initialized
// by main() is difficult because it requires ctx which is graphic
// but jest is non-graphical
/*test('undoInvincibleTest', () => {
  mit.Pappu.undoInvincible();
  expect(mit.Pappu.invincible).toBe(0);
  expect(mit.Pappu.invincibility_start).toBe(0);
  expect(mit.Pappu.invincible_timer).toBe(0);
  expect(doc.getElementById("invincible_timer").display).toEqual("none");
});*/

test('updateFlyFrameCountTest', () => {
  mit.Pappu.updateFlyFrameCount();
  expect(mit.Pappu.fly_frame_count).toBe(1);
  mit.Pappu.updateFlyFrameCount(0);
  expect(mit.Pappu.fly_frame_count).toBe(0);
});

// Note that ANYTHING includes mit.H and mit.W
/*test('hasReachedBoundaryTest', () => {
  expect(mit.Pappu.hasReachedBoundary()).toBe(false);
  mit.Pappu.y = 0 - mit.Pappu.h - 10;
  console.log(mit.H);
  expect(mit.Pappu.hasReachedBoundary()).toBe(true);
  mit.Pappu.y = mit.H + 100;
  expect(mit.Pappu.hasReachedBoundary()).toBe(true);
  mit.Pappu.y = 10;
  mit.Pappu.x = -10;
  expect(mit.Pappu.hasReachedBoundary()).toBe(true);
  mit.Pappu.x = mit.W + 10;
  expect(mit.Pappu.hasReachedBoundary()).toBe(true);
});*/

test('getBoundsTest', () => {
  expect(mit.Pappu.getBounds()).toEqual({start_x: mit.Pappu.x, start_y: mit.Pappu.y, end_x: mit.Pappu.x + mit.Pappu.w, end_y: mit.Pappu.y + mit.Pappu.h});
});

test('createClonesTest', () => {
  mit.Pappu.createClones(3);
  expect(mit.Pappu.clones.length).toBe(3);
  expect(mit.Pappu.clones[0].x).toBe(mit.Pappu.x);
  expect(mit.Pappu.clones[0].y).toBe(mit.Pappu.y);
  expect(mit.Pappu.clones[0].w).toBe(mit.Pappu.w);
  expect(mit.Pappu.clones[0].h).toBe(mit.Pappu.h);
});

test('checkCloneCollisionTest', () => {
  mit.Pappu.init();
  mit.Pappu.h = 60;
  mit.Pappu.w = 60;
  mit.Pappu.createClones(2);

  mit.BranchUtils.init();
  mit.BranchUtils.create();
  mit.BranchUtils.branches = [mit.BranchUtils.branches[0]];
  mit.BranchUtils.branches[0].x = 500;
  mit.BranchUtils.branches[0].h = 500;
  mit.BranchUtils.branches[0].w = 31;

  mit.ForkUtils.init();
  mit.ForkUtils.create();
  mit.ForkUtils.forks = [mit.ForkUtils.forks[0]];
  mit.ForkUtils.forks[0].x = 750;
  mit.ForkUtils.forks[0].w = 22;

  mit.Pappu.clones[0].x = mit.BranchUtils.branches[0].x - 1;
  mit.Pappu.clones[0].y = mit.BranchUtils.branches[0].y - 1;
  mit.Pappu.clones[1].x = mit.ForkUtils.forks[0].x - 1;
  mit.Pappu.clones[1].y = mit.ForkUtils.forks[0].y - 1;

  expect(mit.BranchUtils.branches[0]).toBeTruthy();
  expect(mit.ForkUtils.forks[0]).toBeTruthy();

  mit.Pappu.checkCloneCollision();

  expect(mit.BranchUtils.branches[0]).toBeFalsy();
  expect(mit.ForkUtils.forks[0]).toBeFalsy();
});
