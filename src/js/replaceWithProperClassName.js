// Incase of CSS classnames with any of the following characters, this adds a backslash before it to escape it.
var symbols = ['#', '%', '\\(', '\\)', '\\[', '\\]', '{', '}', '=', '\\.', ',', ':']; // The characters to be escaped

function replaceWithProperClassNameForSymbol(string, symbol){ // Replaces all occurences of [symbol]
    var searchString = new RegExp(symbol, 'gm');              // in [string]
    string = string.replace(searchString, "\\" + symbol[symbol.length - 1]);
    return string;
}
function replaceWithProperClassName(string){ // Replaces every symbol and returns the value.
    symbols.forEach((s) => {
        string = replaceWithProperClassNameForSymbol(string, s);
    })
    return string;
}
module.exports = {replaceWithProperClassName};