var express = require('express');
var port = process.argv[2];
var app = express();
 
app.get('/search', function(req, res) {
//var results = req.query.results;
console.log(req.query);
//var type = req.query.type;
//var page = req.query.page;
 
//res.send("{\"results\":\"" + results+ "\",\"type\":\"" + type +"\",\"page\":\"" + page +"\"}");
});
 
app.listen(port);