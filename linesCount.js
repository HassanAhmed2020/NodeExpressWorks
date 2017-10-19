var fs = require('fs');
//var filePath = process.argv[2];
var bufObj = fs.readFileSync(process.argv[2]);
var strBuf = bufObj.toString()


var array = strBuf.split('\n');

//console.log(array);
console.log(array.length-1);