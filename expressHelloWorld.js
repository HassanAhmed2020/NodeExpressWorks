    var express = require('express');
    
    var portNum = process.argv[2];
    
    var myApp = express();
    
    myApp.get('/home', function(request, response) 
            {
            response.end('Hello World!')
            });
    
    myApp.listen(portNum);
