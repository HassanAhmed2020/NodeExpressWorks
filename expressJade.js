    var express = require('express');
    var path = require('path');  
    var portNum = process.argv[2];
//    var indexFile = process.argv[3];
    
    var myApp = express();
    
//    myApp.set('views', indexFile);
    myApp.set('views', path.join(__dirname, 'templates'));
    var templatePath = path.join(__dirname, 'templates');
    console.log(templatePath);
//    myApp.set('views', /home/ubuntu/workspace/templates));
    myApp.set('view engine', 'jade');
    
    myApp.get('/home', function (request, response)
                                {
                                    var currentDate = new Date().toDateString();
                                response.render('index',{date: currentDate});
//                                response.render('index1');
                                }
                );
                
    myApp.listen(portNum);
