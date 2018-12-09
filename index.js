var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// Setting global app variables. In this case it's the port
app.set('port', 3000);

app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var server = app.listen(process.env.PORT || app.get('port'), function(){
    var port = server.address().port;
    console.log("Listening in on port: " + port);
});
