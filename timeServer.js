    var strftime = require('strftime'); // not required in browsers
    var net = require('net');
    var portNum = process.argv[2];
    //var portNum=8000;
    
    
    var server = net.createServer(function listner (socket) {
        //console.log("Listener is listening on Port" + socket);
        var timeStr=strftime('%F %R');
        socket.end(timeStr + "\n"); 
       
     });  

    server.listen(portNum);
    
    
    
    
    
    
    
    
