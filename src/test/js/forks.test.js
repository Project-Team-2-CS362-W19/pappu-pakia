var mit = require("../../../testSetup").mit;

test('getHandleBounds',() => {
    var fork = new mit.Fork();
    fork.w = 10;
    fork.h = 11;
    var b = fork.getHandleBounds();
    expect(b.start_x).toBe(fork.x);
    expect(b.start_y).toBe(fork.y);
    expect(b.end_x).toBe(fork.x+fork.w);
    expect(b.end_y).toBe(fork.y+fork.h);
});

test('getHeadBounds',() => {
    var fork = new mit.Fork();
    fork.head_w = 10;
    fork.head_h = 11;
    var b = fork.getHeadBounds();
    expect(b.start_x).toBe(fork.head_x);
    expect(b.start_y).toBe(fork.head_y);
    expect(b.end_x).toBe(fork.head_x+fork.head_w);
    expect(b.end_y).toBe(fork.head_y+fork.head_h);
});

test('ForkUtils_init',() => {
    expect(mit.ForkUtils.count).toBe(6);
    mit.ForkUtils.init();
    expect(mit.ForkUtils.fork_img).toEqual(mit.image.fork_handle);
    expect(mit.ForkUtils.fork_head_img).toEqual(mit.image.fork_head);
    expect(mit.ForkUtils.forks.length).toBe(0);
});

/*test('ForkUtils_getRandomForkPos',() => {
    var fork = new mit.Fork()
    var pos = mit.ForkUtils.getRandomForkPos();
    expect(pos.x).toBeGreaterThanOrEqual(800); //pos.x is NaN, should be > 800
    expect(pos.x).toBeLessThanOrEqual(1400); //pos.x is NaN, should be < 1400
});*/

test('ForkUtils_create',() => {
    mit.ForkUtils.create();
    expect(mit.ForkUtils.forks.length).toBeGreaterThan(0);
    expect(mit.ForkUtils.forks[0].w).toBe(mit.image.fork_handle.width);
    expect(mit.ForkUtils.forks[0].h).toBe(mit.image.fork_handle.height);
    expect(mit.ForkUtils.forks[1].w).toBe(mit.image.fork_handle.width);
    expect(mit.ForkUtils.forks[1].h).toBe(mit.image.fork_handle.height);

    expect(mit.ForkUtils.forks[0].y).toBeLessThanOrEqual(mit.image.fork_handle.height + 300);
    expect(mit.ForkUtils.forks[0].y).toBeGreaterThanOrEqual(-100 - mit.image.fork_handle.height);
    expect(mit.ForkUtils.forks[1].y).toBeLessThanOrEqual(mit.image.fork_handle.height + 300);
    expect(mit.ForkUtils.forks[1].y).toBeGreaterThanOrEqual(-100 - mit.image.fork_handle.height);
});
