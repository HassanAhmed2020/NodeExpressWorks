var http = require('http');
var url = process.argv[2];
//var url = "http://google.com";

function callBack1(BuffResponseObj){
    BuffResponseObj.setEncoding('utf8');
    
    BuffResponseObj.on("data", callBack2);  
    
    BuffResponseObj.on('error',function(error){
    console.error('This is the error message:' + error);
  });
  
    BuffResponseObj.on('end',function(){
//    console.error('Buffer Object Done Reding');
  });  
    
//    console.log(response);
}


function callBack2(data){
    console.log(data);
//console.log("callBack2 is called");
}


http.get(url, callBack1);