var express = require('express');
var middleware = require('./middleware');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(middleware.logger);

app.get('/', function (req, res){
	res.send('hello!')
});

app.listen(PORT, function (){
	console.log('Express Server Started on PORT ' + PORT);
}); 