var mit = require("../../../testSetup").mit;
//var doc = env.doc;

test('getBoundsTest', () => {
    //expect(mit.Pakia.getBounds()).toEqual({start_x: mit.Pakia.x, start_y: mit.Pakia.y, end_x: mit.Pakia.x + mit.Pakia.w, end_y: mit.Pakia.y + mit.Pakia.h});
    var pakia = new mit.Pakia;
    pakia.w = 10;
    pakia.h = 11
    var p = pakia.getBounds();
    expect(p.start_x).toBe(pakia.x);
    expect(p.start_y).toBe(pakia.y);
    expect(p.end_x).toBe(pakia.x+pakia.w);
    expect(p.end_y).toBe(pakia.y+pakia.h);
});

//mit.config.canvas operations unable to be performed.
/*test('genRandomPos', () =>{
    var pakia = new mit.Pakia;
    var p = pakia.generateRandomPos();
    expect(p.x).toBe(mit.config.canvas_width/2 + 200);
    expect(p.y).toBe(mit.config.canvas_height);
});

/*test('genRandomVel', () =>{
    var pakia = new mit.Pakia;
    var p = pakia.generateRandomVelocity();
    expect(p.vx).toBe(-12);
    expect(p.vy).toBeGreaterThanOrEqual(-18);
    expect(p.vy).toBeLessThanOrEqual(-10);
});*/

test('PakiaUtils_init',() => {
    mit.PakiaUtils.init();
    expect(mit.PakiaUtils.pakia_img.sad).toEqual(mit.image.sad_pakia);
    expect(mit.PakiaUtils.pakia_img.happy).toEqual(mit.image.happy_pakia);
    expect(mit.PakiaUtils.pakia_img.angry).toEqual(mit.image.angry_pakia);
});


//Untestable because of canvas reading issues.
/*test('PakiaUtils_createPakias',() => {
    mit.PakiaUtils.createPakias();
    expect(mit.PakiaUtils.pakias.length).toBe(3);

    for(let i = 0; i < 3; i++){
        expect(mit.PakiaUtils.pakias[i].w).toBe(mit.image.sad_pakia.width);
        expect(mit.PakiaUtils.pakias[i].h).toBe(mit.image.sad_pakia.height);

        if(mit.PakiaUtils.pakias[i].type == "angry"){
            expect(mit.PakiaUtils.pakias[i].sound).toBe(document.getElementById("angry_jump"));
        }
        else if(mit.PakiaUtils.pakias[i].type == "sad"){
            expect(mit.PakiaUtils.pakias[i].sound).toBe(document.getElementById("sad_jump"));
        }
        else if(mit.PakiaUtils.pakias[i].type == "happy"){
            expect(mit.PakiaUtils.pakias[i].sound).toBe(document.getElementById("happy_jump"));
        }
    }
});

test('PakiaUtils_checkCollision',() => {
    mit.Pappu.init();
    mit.Pappu.x = 60;
    mit.Pappu.y = 60;

    /*var pakia = new mit.Pakia;
    pakia.w = 10;
    pakia.h = 11
    var p = pakia.getBounds();

    mit.PakiaUtils.init();
    mit.PakiaUtils.createPakias();
    mit.PakiaUtils.pakias = [mit.PakiaUtils.pakias[0]];
    mit.PakiaUtils.pakias[0].x = 50;
    mit.PakiaUtils.pakias[0].y = 50;
    mit.PakiaUtils.pakias[0].w = 5;
    mit.PakiaUtils.pakias[0].h = 5;

    expect(mit.PakiaUtils.pakias[0]).toBeTruthy();

    mit.PakiaUtils.checkCollision();

    expect(mit.PakiaUtils.pakias[0]).toBeFalsy();
});*/
