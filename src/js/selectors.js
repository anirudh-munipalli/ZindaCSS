const {JSDOM} = require('jsdom');
const replaceWithProperClassName = require('./replaceWithProperClassName');
function getCSSForSelectors(html, css, selector){
    const dom = new JSDOM(html);
    var classes = [];
    dom.window.document.querySelectorAll('*').forEach((e) => {
        e.classList.forEach((f) =>{
            if(f.search(`\\:${selector}`) != -1){
                classes.push(f);
            }
        });
    });
    var add ='';
    css = css.replace(/\s/g, "");
    css = css.split("}.")
    classes.forEach((e) => {
        e = e.split(':');

        css.forEach((f) => {
            let k = e;
            f = f.split('@');
            if(f.length>1){
                for (let i = 0; i < f.length; i++) {
                    var val = f[i];
                    if(val.startsWith('media')){
                        f[i] = '';
                    }
                }
            }
            f = f.join('')
            if(f[f.length -1] == "}"){
                f = f.substring(0, f.length - 1)
            }
            var a = replaceWithProperClassName.replaceWithProperClassName(k[0]) + "{";
            if(f.indexOf(a) != -1){
              k.shift()
                f = "." + f.replace('{', `\\:${replaceWithProperClassName.replaceWithProperClassName(k.join(':'))}:${selector}{`) + "}";
                if(f.trim()[f.trim().length - 1] != "}") {
                    f += "}"
                }
                add += f;
            }
        })
    });
    return add;
}

module.exports = {getCSSForSelectors}