const {JSDOM} = require('jsdom')
var themes = {
    default: `body{background-color:white;}*{color: black; font-family: sans-serif;} .color{color: black;} .bg{background-color: white;}`,
    light: `body{background-color:white;}*{color: black; font-family: sans-serif;} .color{color: black;} .bg{background-color: white;}`,
    dark: `body{background-color:#282828;}*{color: #f2f2f2; font-family: sans-serif;} .color{color: #f2f2f2;} .bg{background-color: #282828;}`,
    blue: `body{background-color:#e8effa;}*{color: #0242a8; font-family: sans-serif;} .color{color: #0242a8;} .bg{background-color: #e8effa;}`,
    sky: `body{background-color:#ebf9fc;}*{color: #00c8ff; font-family: sans-serif;} .color{color: #00c8ff;} .bg{background-color: #ebf9fc;}`,
}
var customTheme = (rgb) => {
    // 'rgb(0, 0, 0);
    var inverted = []
    rgb = rgb.replace("rgb(", '');
    rgb = rgb.replace(')', '')
    rgb = rgb.split(',');
    for(let i = 0; i < rgb.length; i++){
        inverted.push(255 - parseInt(rgb[i]));
    }
    return 'rgb('+ inverted.join(',') + ')'
}
function addTheme(html){
    var dom = new JSDOM(html);
    var zindaTheme = dom.window.document.querySelector('zindatheme');
    if(!zindaTheme){
        return '';
    }
    var theme = zindaTheme.classList[0];
    if(theme == ''){
        theme = 'default'
    }
    if(themes[theme] == undefined){
        if(theme.startsWith('rgb')){
            var rgb = theme;
            var inverted = zindaTheme.classList[1];
            if(inverted == undefined || inverted.trim == ''){
                inverted = customTheme(rgb)
            }
            var add = ''
            if(zindaTheme.getAttribute('full-page') == "true"){
                add += `body{background-color: ${inverted};}`
            }
            return add + `*{color:${rgb};font-family: sans-serif;} .color{color: ${rgb}} .bg{background-color: ${inverted}}`
        }
    }
    return themes[theme]
}


module.exports = {addTheme}