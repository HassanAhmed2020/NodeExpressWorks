        var express = require('express');
        var crypto = require('crypto');

    
    
      var portNum = process.argv[2];
//        var portNum = 8000;
    
    var myApp = express();
    
    
        myApp.get('/search', function (request, response)
                                {
                                
                                var query = request.query;
                                console.log(request.query);


//                                var hashid = crypto
//                                                .createHash('sha1')
//                                                .update(new Date().toDateString() + id)
//                                                .digest('hex');
                                                
//                                response.end(hashid);

//                              console.log('Hash ID is: ' + hashid);
//                                console.log('input ID is: ' + request.params.id);
//                                console.log(request.body.str.split('').reverse().join(''));
//                                response.end(request.body.str.split('').reverse().join(''));


                                response.send(query);

//                                console.log(request);

//                                var currentDate = new Date().toDateString();
//                                response.render('index',{date: currentDate});
//                                response.render('index1');
                                }
                );
                
                

        myApp.listen(portNum);    
    