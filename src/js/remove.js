const replaceWithProperClassName = require('./replaceWithProperClassName');

const joiningVar = '_'

function cssForGivenVal(valType, html, propName, count = 1){ // Used for other custom values
    var searchString = valType + joiningVar;
    var start = html.search(searchString);
    var index = start;
    while(html[index] != ' ' && html[index] != '"' && html[index] != "'"){
        index++;
    }
    var value = html.substring(start + valType.length + 1, index);
    var className = `${valType}${joiningVar}${value}`;
    className = replaceWithProperClassName.replaceWithProperClassName(className);
    var finalValue = '';
    for(let i = 0; i < count; i++){
        finalValue += value + " ";
    }
    var css = `.${className}{${propName}: ${finalValue};}`;
    return [css, index];
}
function getNumericalValCSS(html, type, propName, count){ // To simplify the process
    if(html.search(type + joiningVar) == -1) {return '';}
    var index = 0;
    var css = '';
    while(index < html.length){
        var c = cssForGivenVal(type, html, propName, count);
        if(css.search(c[0]) == -1){
            css += c[0] + ' ';
        }
        index = c[1];
        html = html.slice(index);
        if(html.indexOf(type + joiningVar) == -1) break;
    }
    return css;
}

function cssForCustomVal(html){
    css = '';
    css += getNumericalValCSS(html, "color", "color", 1);
    css += getNumericalValCSS(html, "bg", "background-color", 1)
    css += getNumericalValCSS(html, "w", "width", 1); // For width
    css += getNumericalValCSS(html, "width", "width", 1); // For width
    css += getNumericalValCSS(html, 'height', 'height', 1); // For height
    css += getNumericalValCSS(html, "margin", "margin", 1) // For margin
    css += getNumericalValCSS(html, 'padding', "padding", 1);
    css += getNumericalValCSS(html, `pad-left`, "padding-left", 1);
    css += getNumericalValCSS(html, `pad-right`, "padding-right", 1);
    css += getNumericalValCSS(html, `pad-top`, "padding-top", 1);
    css += getNumericalValCSS(html, `pad-bottom`, "padding-bottom", 1);
    css += getNumericalValCSS(html, "shadow", "text-shadow", 3)
    return css;
}

module.exports = {cssForCustomVal};