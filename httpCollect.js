var bl = require('bl');
var http = require('http');
var url = process.argv[2];
//var url = "http://google.com";

function callBack1(BuffResponseObj){
    BuffResponseObj.setEncoding('utf8');
    
//    BuffResponseObj.on("data", callBack2);  
    
    BuffResponseObj.pipe(bl(callBack2));  
    
    BuffResponseObj.on('error',function(error){
    console.error('This is the error message:' + error);
  });

}

function callBack2(error,data){
//    data.setEncoding('utf8');
//data=data.toString();
    console.log(data.length);
    console.log(data.toString());
    
}









//==============================================================================
http.get(url, callBack1);


