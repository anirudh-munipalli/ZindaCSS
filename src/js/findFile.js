var args = process.argv.slice(2);
// build index.html output.css

function getFilePath(){
    if(args[0] == 'build'){
        var fileName = args[1];
        if(fileName != undefined && fileName != null && fileName && fileName.trim() != ""){
            if(args.length > 3){
                args.shift();
                args.pop();
                fileName = args.join(' ')
            }
            return process.cwd() + "/" + fileName;
        }
    }
}

module.exports = {getFilePath}