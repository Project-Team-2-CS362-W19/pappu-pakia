env = require("../../../testSetup");
mit = env.mit;
doc = env.doc;

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
});

//test('checkCloneCollisionTest', () => {
//  
//});
