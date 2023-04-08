const {JSDOM} = require("jsdom");
const replaceWithProperClassName = require('./replaceWithProperClassName');
const types = [
    'hover',
    'active',
    'focus',
    'link',
    'visited',
    'invalid'
]
function groupClasses(html, cl){
    var css = ''
    var dom = new JSDOM(html);
    var groups = dom.window.document.querySelectorAll('zindagroup');
    groups.forEach(e => {
        var id = e.id;
        var classes = e.hasAttribute('className') ? e.getAttribute('className').split(' ') : e.classList; 
        css += ` #${id}{display: none !important;}`;
        var content = '';
        var hover = `.${id}:hover{`;
        var active = `.${id}:active{`; var A = false
        var invalid = `.${id}:invalid{`; var I = false;
        var link = `.${id}:link{`; var L = false;
        var visited = `.${id}:visited{`; var V = false;
        var focus = `.${id}:focus{`;var F = false;
        var H = false;
        classes.forEach((f) => {
            if(f.indexOf(":") != -1){
                for(let k = 0; k < types.length; k++){
                    var t = types[k];
                    if(f.indexOf(t) == -1) continue;
                    f = "." + replaceWithProperClassName.replaceWithProperClassName(f) + ":" + t;
                
                if(cl[f] == undefined){
                    console.log(f, cl, "1")
                    cl[f] = '';
                }
                if(t == 'hover'){
                    hover += `${cl[f]};`;
                    H = true;
                } else if(t == 'active'){
                    active += `${cl[f]};`;
                    A = true;
                } else if(t == 'invalid'){
                    invalid += `${cl[f]};`;
                    I = true;
                } else if(t == 'link'){
                    link += `${cl[f]};`;
                    L = true;
                } else if(t == 'visited'){
                    visited += `${cl[f]};`;
                    V = true;
                } else if(t == 'focus'){
                    focus += `${cl[f]};`;
                    F = true;
                }
                
            }
            } else {
                f = replaceWithProperClassName.replaceWithProperClassName(f);
            f = "." + f;
            var c = cl[f];
            if(c != null || c != undefined){
             if(c.trim() != ""){
                content += c + ";";
             }
            }
        }
        });
        hover += "}"
        active += '}'
        link += '}'
        focus += '}'
        invalid += '}'
        visited += '}'
        if(!H){
            hover = ''
        }
        if(!A){
            active = ''
        }
        if(!L){
            link = ''
        }
        if(!V){
            visited = ''
        }
        if(!F){
            focus = ''
        }
        if(!I){
            invalid = ''
        }
        css += `.${id}{${content}}${hover}` + active + invalid + link + visited + focus;

    });
    return css;
}
module.exports = {groupClasses};