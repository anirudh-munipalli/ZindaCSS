const {JSDOM} = require('jsdom');
const replaceWithProperClassName = require('./replaceWithProperClassName');

const joiningVar = "_";
const list = [
    ["color", "color", 1],
    ["bg", "background-color", 1],
    ["border", "border-color", 1],
    ["w", "width", 1],
    ["h", "height", 1],
    ["margin", "margin", 1],
    ["pad", "padding", 1],
    ["pad-left", "padding-left", 1],
    ["pad-right", "padding-right", 1],
    ["pad-top", "padding-top", 1],
    ["pad-bottom", "padding-bottom", 1],
    ["shadow", "text-shadow", 3]
]
function cssForCustomVal(html){
    var customClasses = getCustomClasses(html);
    return generateCSS(customClasses[0], customClasses[1])
}
function generateCSS(customClasses, otherCSS){
    var css = '';
    customClasses.forEach((e) => {
        if(e.trim() == ""){return "";}
        var className = replaceWithProperClassName.replaceWithProperClassName(e);
        e = e.split("_");
        list.forEach((f) => {
            if(f[0] == e[0]){
                e[0] = f[1];
                var val = e[1];
                e[1] = '';
                for(let i = 0; i < f[2]; i++){
                    e[1] += val + " ";
                }
            }
        });
        if(e[0] != '' && e[1].trim != ''){
            var v = '';
            for(let k = 1; k < e.length; k++){
                v += e[k] + ' ';
            }
            e = `${e[0]}:${v}`
        }
        var c = `.${className}{${e};}`
        css += c;
    });
    return css + otherCSS;
}
function getCustomClasses(html){
    var otherCSS = ''
    const dom = new JSDOM(html);
    var classList = ''
    dom.window.document.querySelectorAll("*").forEach((e) => {
        var classes = e.hasAttribute('className') ? e.getAttribute('className').split(' ') : e.classList;
        classes.forEach(f => {
            if(f.search(joiningVar) != -1){
                if(classList.search(f) == -1){ 
                    classList += f + "?";
                }
            } else {
                if(f.search("opacity") != -1){
                    var value = f.split('-');
                    value.shift();
                    value = parseInt(value.join(''))
                    value /= 100;
                    otherCSS += `.${replaceWithProperClassName.replaceWithProperClassName(f)}{opacity: ${value};}`
                }
                if(f.search("bold") != -1){
                    var value = f.split('-');
                    value.shift();
                    value = parseInt(value.join(''))
                    otherCSS += `.${replaceWithProperClassName.replaceWithProperClassName(f)}{font-weight: ${value* 80};}`
                }            
            }
        });

    });
    classList = classList.substring(0, classList.length - 1)
    return [classList.split('?'), otherCSS];
}

module.exports = {cssForCustomVal}