var fs = require('fs');



function linesCount(callback) {

        fs.readFile(process.argv[2], function doneReading(err, fileContents) {
            var arr=fileContents.toString().split('\n');
            console.log(arr.length-1);
        });
    
}


function consoleOut() {
    
//  console.log(sum)
}

linesCount(consoleOut);


//=====================================================================
/*
var fs = require('fs')
var myNumber = undefined

function addOne(callback) {
  fs.readFile('number.txt', function doneReading(err, fileContents) {
    myNumber = parseInt(fileContents)
    myNumber++
    callback()
  })
}

function logMyNumber() {
  console.log(myNumber)
}

addOne(logMyNumber)

*/

