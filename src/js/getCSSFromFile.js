const compiledCSS = require("./compiledCSS");
const fs = require('fs');
const purgecss = require("purgecss");

var a = new purgecss.PurgeCSS()
const css = compiledCSS.css();
function getCSSFromFile(data, extension){
    var promise = new Promise(function(resolve, reject){
        var purgedCSS = a.purge(
            {
            content: [
                {
                    raw: data,
                    extension: extension
                }, 
            ],
            css: [
                {
                    raw: css
                }
                ],
                keyframes: true
            })
        resolve(purgedCSS);
    });
    return promise;
}

module.exports = {getCSSFromFile}