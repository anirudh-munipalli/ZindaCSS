const {JSDOM} = require('jsdom')

function addFonts(html){
    var dom = new JSDOM(html);
    const fonts = dom.window.document.querySelectorAll('zindafont')
    var totalCSSI = ''
    var totalCSSC = ''
    fonts.forEach(e => {
        const data = {url: e.getAttribute("url"), fontName: e.getAttribute('font-name')};
        let cssI = `@import url(${data.url});`;
        let cssC = ` .font-${data.fontName.replace(/\s/gm, "-")}{font-family: "${data.fontName}", sans-serif}`
        totalCSSI += cssI;
        totalCSSC += cssC;
    });
    return totalCSSI + totalCSSC;
}

module.exports = {addFonts}