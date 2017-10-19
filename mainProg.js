var mymodule = require('./mymodule.js')  

//var dirName="/home/ubuntu/workspace";
//var extension ="js";

var dirName = process.argv[2];
var extension=process.argv[3];


var callbackFunc = function (err,data) {
    if (err){
        console.log("We found an error");
        console.log(err);
    }
    
    else 
    {
        for (var i=0; i<data.length; i++)
        {
            console.log(data[i]);
        }
//        console.log(data);
    }
    
    }




mymodule(dirName, extension, callbackFunc);
