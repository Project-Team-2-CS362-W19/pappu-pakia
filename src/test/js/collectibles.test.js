var mit = require("../../../testSetup").mit;
var doc = require("../../../testSetup").doc;

test('getBounds', () => {
  var collectible = new mit.Collectible();
  collectible.x = 10;
  collectible.y = 11;
  collectible.w = 12;
  collectible.h = 13;
  var b = collectible.getBounds();
  expect(b.start_x).toBe(10);
  expect(b.start_y).toBe(11);
  expect(b.end_x).toBe(22);
  expect(b.end_y).toBe(24);
});

test('sound', () => {
  var collectible = new mit.Collectible();
  expect(collectible.sound).toEqual(doc.getElementById("ting"));
  expect(collectible.sound.volume).toBe(0.35);

});

test('CollectibleUtils_init', () => {
  expect(mit.CollectibleUtils.count).toBe(2);
  mit.CollectibleUtils.init();
  expect(mit.CollectibleUtils.coin_img).toEqual(mit.image.coins);
  expect(mit.CollectibleUtils.clone_img).toEqual(mit.image.berries);
  expect(mit.CollectibleUtils.invincible_img).toEqual(mit.image.star);
});


test('CollectibleUtils_getCoinSpritePos', () => {
  var pos = mit.CollectibleUtils.getCoinSpritePos(50);
  expect(pos.x).toBe(0);
  expect(pos.y).toBe(0);
  pos = mit.CollectibleUtils.getCoinSpritePos(100);
  expect(pos.x).toBe(30);
  expect(pos.y).toBe(0);
  pos = mit.CollectibleUtils.getCoinSpritePos(500);
  expect(pos.x).toBe(60);
  expect(pos.y).toBe(0);
  pos = mit.CollectibleUtils.getCoinSpritePos(1000);
  expect(pos.x).toBe(90);
  expect(pos.y).toBe(0);
});


test('CollectibleUtils_getRandomPos', () => {
  var pos = mit.CollectibleUtils.getRandomPos();
  expect(pos.x).toBeGreaterThanOrEqual(500);
  expect(pos.x).toBeLessThanOrEqual(1000);
});

test('CollectibleUtils_create', () => {
  expect(mit.CollectibleUtils.collecs.length).toBe(0);
  mit.CollectibleUtils.create();
  expect(mit.CollectibleUtils.collecs.length).toBeGreaterThan(0);
});
