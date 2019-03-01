const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, 'index.htm'), 'utf8');
const jq = fs.readFileSync(path.resolve(__dirname, 'src/main/js/jquery-1.8.2.min.js'), 'utf8');
const utils = fs.readFileSync(path.resolve(__dirname, 'src/main/js/utils.js'), 'utf8');
const backgrounds = fs.readFileSync(path.resolve(__dirname, 'src/main/js/backgrounds.js'), 'utf8');
const forks = fs.readFileSync(path.resolve(__dirname, 'src/main/js/forks.js'), 'utf8');
const branches = fs.readFileSync(path.resolve(__dirname, 'src/main/js/branches.js'), 'utf8');
const collectibles = fs.readFileSync(path.resolve(__dirname, 'src/main/js/collectibles.js'), 'utf8');
const pappu = fs.readFileSync(path.resolve(__dirname, 'src/main/js/pappu.js'), 'utf8');
const pakia = fs.readFileSync(path.resolve(__dirname, 'src/main/js/pakia.js'), 'utf8');
const main = fs.readFileSync(path.resolve(__dirname, 'src/main/js/main.js'), 'utf8');
const loader = fs.readFileSync(path.resolve(__dirname, 'src/main/js/loader.js'), 'utf8');
jest.dontMock('fs');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const dom = new JSDOM(html, {pretendToBeVisual: true, runScripts: "dangerously"});
dom.window.eval(jq.toString());
dom.window.eval(utils.toString());
dom.window.eval(backgrounds.toString());
dom.window.eval(forks.toString());
dom.window.eval(branches.toString());
dom.window.eval(collectibles.toString());
dom.window.eval(pappu.toString());
dom.window.eval(pakia.toString());
dom.window.eval(main.toString());
// possible need to replace below code with below commented code
dom.window.eval(loader.toString());
//var firstBitIndex = loader.toString().indexOf("if(!($") - 1;
//var lastBitIndex = loader.toString().indexOf("for(var src");
//dom.window.eval(loader.toString().slice(0, firstBitIndex) + loader.toString().slice(lastBitIndex));
//dom.window.eval("mit.main()");

module.exports = {
  mit: dom.window.mit, 
  utils: dom.window.utils,
  doc: dom.window.document
};
