// This gets a list of all the predefined CSS classes that are written. They can be accessed at ../css/
const fs = require("fs");       // File system module
const path = require("path");  // The path module
var srcCss = [                  // List of all the predefined CSS class files.
    "common.css",
    "alert.css",
    "animations.css",
    "borders.css",
    "height.css",
    'height.css',
    "margin.css",
    "padding.css",
    "position.css",
    "tag.css",
    "width.css",
    "shadow.css",
    "responsive.css",
    "animations/focus/bobUpDown.css",
    "animations/focus/bounce.css",
    "animations/focus/expandContract.css",
    "animations/focus/fadeInOut.css",
    "animations/focus/flash.css",
    "animations/focus/jump.css",
    "animations/focus/shake.css",
    "animations/entry/expandIn.css",
    "animations/entry/fadeIn.css",
    "animations/entry/flyIn.css",
    "animations/entry/rotateIn.css",
    "animations/exit/expandOut.css",
    "animations/exit/fadeOut.css",
    "animations/exit/flyOut.css",
    "animations/exit/rotateOut.css",
    "cursor.css"
]
var srcJs = [ // List of the CSS generated during runtime using javascript
    "color.js",
    "responsive.js"
]
function compileJs(){ // Compiles the generated CSS from srcJs (see above)
    var compiledCSS = '';
    var path = "./cssJs/"
    srcJs.forEach((e) => {
        compiledCSS += require(path + e).Implement();
    });
    return compiledCSS;
}
function css(){ // Compiles the predefined classes and javascript classes and returns them.
    var compiledCSS = '';
    srcCss.forEach((e) => {
        cssFilePath = path.resolve(__dirname, "../", "css") + "/" + e
        if(fs.existsSync(cssFilePath)){
            var file = fs.readFileSync(cssFilePath, 'utf-8');
            compiledCSS += file;
        }
    });
    compiledCSS += compileJs();
    return compiledCSS;
}
module.exports = {css};