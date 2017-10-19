    var express = require('express');
    
    var portNum = process.argv[2];
    var indexFile = process.argv[3];
    
    var myApp = express();
    
    
//    myApp.use(express.static(indexFile||path.join(__dirname, 'public')));
   myApp.use(express.static(indexFile));
   
    
    myApp.listen(portNum);
