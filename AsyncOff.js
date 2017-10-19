var http = require('http')
var bl = require('bl')
var results = []
var count = 0

var url1 = "http://google.com";
var url2 = "http://abc.com";
var url3 = "http://hp.com";
var urls = [url1, url2, url3];
 

function httpGet (index) {
  http.get(urls[index], function (response) {
    response.pipe(bl(function (err, data) {

 
      results[index] = data.toString()
      count++
 
      if (count == 3)
      console.log(results);
//        printResults()
    }))
  })
}
 
for (var i = 0; i < 3; i++)
  httpGet(i)