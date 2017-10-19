var http = require('http');
var map = require('through2-map'); 


var portNum = process.argv[2];
//var portNum=8000;

var myHttpServer = http.createServer(function listener(request, response){
    
                                request.pipe(map(function(chunk)
                                                        {
//                                                            return(chunk);
                                                            return(chunk.toString().toUpperCase());
                                                        }
                                                )
                                            ).pipe(response);
    
//                                var fileReadStreamObj = fs.createReadStream(filename);
//                                response.writeHead(200, { 'content-type': 'text/plain' })
//                                fileReadStreamObj.pipe(response);
                                });
                                
                       

myHttpServer.listen(portNum);         

