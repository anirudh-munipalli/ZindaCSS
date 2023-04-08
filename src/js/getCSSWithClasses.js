function getCSSWithClasses(css){
    if(typeof(css) != 'string') {
        return;
    }
    css = css.split('}');
    var finalCss = {}
    for(let i = 0; i < css.length; i++){
        var e = css[i];
        e = e.trim();
        e = e.split('{');
        if(e[0].trim().startsWith('@media')){
            e.shift();
        }
        if(e.length > 1){
            e[0] = e[0].trim();
            finalCss[e[0]] = e[1];
        } else {
           // css = css.slice(i)
        }
    }
    return finalCss;
}

module.exports = {getCSSWithClasses}