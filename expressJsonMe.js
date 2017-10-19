var express = require('express');
var fs = require('fs');
var portNum = process.argv[2];
//        var portNum = 8000;
var filename = process.argv[3];
//var filename = __dirname + '/test.txt';
console.log(filename);


var myApp = express();


        myApp.get('/books', function (request, response)
                                {
                                    fs.readFile(filename, function (err, fileContents) 
                                                                    {
                    //                                                var array=fileContents.toString().split('\n');
                                                                    var object = JSON.parse(fileContents.toString());
                                                                    console.log(object);
                                                                    response.json(object);
                                                                    }
                                                );
                                                
                                }
                );                
                
                
    
    
myApp.listen(portNum);   