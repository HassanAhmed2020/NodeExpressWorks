var bl = require('bl');
var http = require('http');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

//var url1 = "http://google.com";
//var url2 = "http://abc.com";
//var url3 = "http://hp.com";
var cbc=0;
var dataArray=[];
var url=[url1,url2,url3];


//console.log(url);


function myHttpGet(index){
//    console.log("index is" + index);
    http.get(url[index], function (BuffResponseObj){
//        console.log("index is" + index);
        
        BuffResponseObj.pipe(bl(function (err, data) {
                                if(err){
                                    console.log("We got an errro " + err);
                                    return(200);
                                }
                                dataArray[index]=data.toString();
                                cbc++;
                                if (cbc==3){
                                    for (var j=0; j< 3; j++){
                                    console.log(dataArray[j]);
                                    }
                                
                                }
                                })
                            );
       
        
    });
    
}




for (var i=0;i<3;i++)
{
    myHttpGet(i);
    
}





/*






//======================CALLBACK1===================================
var callBack1 =function (BuffResponseObj){
    console.log("index is" + index);
    BuffResponseObj.pipe(bl(callBack2));  

}
//=================================================================




//=================================================================
//======================CALLBACK2==================================

var callBack2 = function (error,data){

dataArray[index]=data.toString();
cbc++;

if (cbc>0)    
console.log(dataArray);
}

    

//=================================================================


/*


//======================Main Prog==================================

for (var i=0;i<3;i++)
{
    http.get(url[i], callBack1);

}


//console.log(dataArray);  

//=================================================================


*/