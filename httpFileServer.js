var http = require('http');
var fs = require('fs');
var portNum = process.argv[2];
//var portNum=8000;
//var filename = "/home/ubuntu/workspace/test.html"
var filename = process.argv[3];


var myHttpServer = http.createServer(function listener(request, response){
    
//                                console.log("webserver is listening now" + request);
                                var fileReadStreamObj = fs.createReadStream(filename);
                                response.writeHead(200, { 'content-type': 'text/plain' })
                                fileReadStreamObj.pipe(response);
                                });
                                
                       

myHttpServer.listen(portNum);         