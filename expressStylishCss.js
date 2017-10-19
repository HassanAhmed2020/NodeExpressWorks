    var express = require('express');
    var path = require('path');
    var filePath = process.argv[3];
    
    
    var portNum = process.argv[2];
//    var portNum = 8000;
    
    var myApp = express();
    
    myApp.use(express.static(filePath||path.join(__dirname, 'public')));
    myApp.use(require('stylus').middleware(__dirname + '/public'));
    
/*        myApp.post('/form', function (request, response)
                                {
//                                console.log(request.body.str.split('').reverse().join(''));
//                                response.end(request.body.str.split('').reverse().join(''));
                                response.end();

                                console.log(request);

//                                var currentDate = new Date().toDateString();
//                                response.render('index',{date: currentDate});
//                                response.render('index1');
                                }
                );
*/                
                

        myApp.listen(portNum);

//        myApp.listen(process.env.PORT,process.env.IP);

