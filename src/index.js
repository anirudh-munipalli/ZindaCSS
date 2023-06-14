#!/usr/bin/env node

// Import the modules required.
const filePath = require("./js/findFile"); // Finds the file that is currently being worked on.
const getCSSFromFile = require("./js/getCSSFromFile"); // Will compile the CSS using PurgeCSS
const cssForCustomVal = require('./js/cssForCustomVal'); // Gets custom values.
const fs = require('./js/file'); // A set of functions that can be applied on a file
const selectorExt = require('./js/selectors');
const getCSSWithClasses = require('./js/getCSSWithClasses');
const groupClasses = require('./js/groupClasses');
const addTheme = require("./js/addTheme");
const path = require('path');
const font = require('./js/font')


var timer = true;
const minTimeBtwnSave = 1000; // To make sure user can save only once a second (and thus optimizing performance)

var pathToFile = filePath.getFilePath(); // Finds the path to the HTML file that is being styled.


async function build(){
    if(pathToFile == undefined || pathToFile == null || !pathToFile || pathToFile.trim() == ""){
        console.log("Please enter a file path.")
        return;
    }
    if(!fs.exists(pathToFile)){
        console.log("Sorry, this file doesn't exist. Please try again")
        return;
    }
    compileFile(pathToFile); // Compiles the CSS

    console.log("Please add the line in your html:");

    var relPath = pathToFile.split('/');
    relPath = relPath[relPath.length - 1];

    var args = process.argv.slice(2)

    // Outputs a link to the stylesheet to be added to the HTML
    if(args.length >=3 && args[2].trim() != "default"){
        console.log(`<link rel="stylesheet" href="./${args[2]}"/>`)
    } else {
        console.log(`<link rel="stylesheet" href="./${relPath + ".css"}"/>`)
    }

    // Checks the file for changes
    fs.watch(pathToFile, () => {
        if(timer){
            timer = false;
            setTimeout(() => {
                timer = true;
            }, minTimeBtwnSave); // Delay so that we can have a minimum save time
            //Code below
            var a = setTimeout(() => {
                compileFile(pathToFile);
            }, 5) // To run it asynchronously after 5 milliseconds
        }
    });
}
build(); // Calls the build function

function compileFile(pathToFile){ // This function generates the css output for a file.
    var html = fs.readFile(pathToFile);
    html = html.replace(/\:hover|\:link|\:focus|\:visited|\:active|\:invalid/gm, ""); // Removes the hover selector so the class can be compiled. The hover pseudo selector is added later.
    var extension = pathToFile.split('.');
    extension = extension[extension.length - 1]; // To find out the file extension
    var customVals = cssForCustomVal.cssForCustomVal(html); // Get the custom values of a file
    getCSSFromFile.getCSSFromFile(html, extension).then((value) => { // After PurgeCSS is done compiling, only then will we create a css file.
        var finalCSS = font.addFonts(html);
            finalCSS +=  value[0].hasOwnProperty("css") ? value[0].css : "Sorry an error occured";
            finalCSS = finalCSS.replace(/(\r\n|\n|\r)/gm, ""); // Removes new lines
            finalCSS += customVals; // Add the custom values to the css.
            var fileHTML = fs.readFileIfExists(pathToFile)
            finalCSS += addTheme.addTheme(fileHTML) // Add the themes of background, color etc.


            finalCSS += selectorExt.getCSSForSelectors(fileHTML, finalCSS, "hover"); // Will add the hover pseudoselector based classes
            finalCSS += selectorExt.getCSSForSelectors(fileHTML, finalCSS, "focus"); // Will add the hover pseudoselector based classes
            finalCSS += selectorExt.getCSSForSelectors(fileHTML, finalCSS, "link"); // Will add the hover pseudoselector based classes
            finalCSS += selectorExt.getCSSForSelectors(fileHTML, finalCSS, "visited"); // Will add the hover pseudoselector based classes
            finalCSS += selectorExt.getCSSForSelectors(fileHTML, finalCSS, "active"); // Will add the hover pseudoselector based classes
            finalCSS += selectorExt.getCSSForSelectors(fileHTML, finalCSS, "invalid"); // Will add the hover pseudoselector based classes
            var CSSWithClasses = getCSSWithClasses.getCSSWithClasses(finalCSS);
            var gClasses = groupClasses.groupClasses(fs.readFileIfExists(pathToFile), CSSWithClasses);
            finalCSS += gClasses;
            var outputCssPath = pathToFile + ".css"
            var args = process.argv.slice(2);
            if(args.length >= 3){
                var val = args[2];
                if(val.trim() != "default"){
                    outputCssPath = path.join(process.cwd(), val);
                }
            }
            fs.writeToFile(outputCssPath, finalCSS); // Finally, the file is generated
            console.log("Completed build.")                // and the user is notified so.
        }, (err) => {
            console.log(err);// Incase of an error
        })
}