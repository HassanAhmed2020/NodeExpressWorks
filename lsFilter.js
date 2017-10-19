var fs = require('fs');
var dirPath = process.argv[2];
var ext;
var extension=process.argv[3];

function lsFilter() {

        fs.readdir(dirPath, function doneReadingDir(err, list) {
            if (err){
                console.log("fs.readdir ran into error");
                console.log(err);
                return(1);
            }


            for (var i=0; i<list.length; i++){
                ext=list[i].split(".");
                if (ext[1]==extension){
                    console.log(list[i]);
                }
            }
        });
    
}

lsFilter();

