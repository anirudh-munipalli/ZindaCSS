function Implement(){
    var innerCPhone = getC('phone');
    var innerCTab = getC('tablet');
    var innerCDesktop = getC('desktop')
    var css = `@media screen and (max-width: 600px){${innerCPhone}} @media screen and (min-width: 600px) and (max-width: 820px){${innerCTab};} @media screen and (min-width: 821px){${innerCDesktop};}`;
    return css;
}
function getC(device){
    var css = ''
    for(let i = 0; i <= 10; i++){
        var c = `.${device}-margin-${i}{margin:${i}0%;}.${device}-margin-left-${i}{margin-left:${i}0%;}.${device}-margin-right-${i}{margin-right:${i}0%;}.${device}-margin-top-${i}{margin-top:${i}0%;}.${device}-margin-bottom-${i}{margin-bottom:${i}0%;}.${device}-margin-x-${i}{margin-right: ${i}; margin-left:${i}0%;}.${device}-margin-y-${i}{margin-top:${i}0%; margin-bottom: ${i}0%}.${device}-padding-${i}{padding:${i}0%;}.${device}-padding-left-${i}{padding-left:${i}0%;}.${device}-padding-right-${i}{padding-right:${i}0%;}.${device}-padding-top-${i}{padding-top:${i}0%;}.${device}-padding-bottom-${i}{padding-bottom:${i}0%;}.${device}-padding-x-${i}{padding-right: ${i}; padding-left:${i}0%;}.${device}-padding-y-${i}{padding-top:${i}0%; padding-bottom: ${i}0%}.${device}-width-${i}{width:${i}0%;}.${device}-height-${i}{height:${i}rem;}`
        css += c;
    }
    return css;
}
module.exports = {Implement}