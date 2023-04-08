// Contains functions of the fs module, but simpler to execute
const fs = require("fs");
//Checks if a file exists at the given path
function exists(path){ 
    return fs.existsSync(path);
}
// Reads a file
function readFile(path){
    return fs.readFileSync(path, 'utf-8');
}
// Checks if a file exists, and reads it if it does.
function readFileIfExists(path){
    if(exists(path)){
        return readFile(path);
    }
    return null;
}
// Creates/modifies a file to the given data, based on the file path
function writeToFile(path, data){
    fs.writeFileSync(path, data);
}
// Watches a file and notifies of any changes
function watch(path, callback){
    fs.watch(path, callback);
}
module.exports = {exists, readFile, readFileIfExists, writeToFile, watch}