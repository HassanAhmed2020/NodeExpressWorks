var http = require('http');
var map = require('through2-map'); 
var url = require('url'); 

var submittedurl;

var portNum = process.argv[2];
//var portNum=8000;


var jsonDateObj = function(hours, minutes, seconds) {
  this.hour = hours;
  this.minute = minutes;
  this.second = seconds;
};






//var myjsonDateObj = new jsonDateObj(6, 3, 1);
//console.log(myjsonDateObj);



var myHttpServer = http.createServer(function listener(request, response){
    
                                submittedurl = url.parse(request.url, true)
//                                console.log(submittedurl);
//                                console.log("Hahahaha");
                                

                                if (submittedurl.pathname == "/api/parsetime" ){
                                    var myDate=new Date(submittedurl.query.iso);
                                    var myHours=myDate.getHours();
                                    var myMinutes=myDate.getMinutes();
                                    var mySeconds=myDate.getSeconds();
                                    var myjsonDateObj = new jsonDateObj(myHours, myMinutes, mySeconds);
                                    console.log(JSON.stringify(myjsonDateObj));
                                    response.writeHead(200, { 'content-type': 'text/plain' })
                                    response.end(JSON.stringify(myjsonDateObj));

                                    
//                                return ('{"hour": 14,"minute": 23, "second": 15} ');

                                }


                                if (submittedurl.pathname == "/api/unixtime" ){
                                    var myDateEpoc=new Date(submittedurl.query.iso);
                                    console.log(myDateEpoc.getTime());
//                                    console.log("Nonononono");
                                    var epocObj={unixtime: myDateEpoc.getTime()};
                                    response.end(JSON.stringify(epocObj));
//                                return ('{"hour": 14,"minute": 23, "second": 15} ');

                                }








//                                request.pipe(map(function(chunk)
//                                                        {
//                                                            return(chunk);
//                                                            return ({1:"yes", 2:"no"});
//                                                            return(chunk.toString().toUpperCase());
//                                                        }
//                                                )
//                                            ).pipe(response);
    
//                                var fileReadStreamObj = fs.createReadStream(filename);
//                                response.writeHead(200, { 'content-type': 'text/plain' })
//                                fileReadStreamObj.pipe(response);


                                });
                                
                       

myHttpServer.listen(portNum);         

