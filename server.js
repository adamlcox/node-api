var express = require('express');
var middleware = require('./middleware');
var app = express();
var PORT = process.env.PORT || 3000;

var todos = [{
	id: 1,
	description: 'todo one',
	completed: false
},{
	id: 2,
	description: 'todo two',
	completed: false
}];


app.use(middleware.logger);

app.get('/', function (req, res){
	res.send('hello!');
});

app.get('/todos', function (req, res){
	res.json(todos);
});

app.get('/todo/:id', function (req, res){
	var id = parseInt(req.params.id, 10);
	var match;

	todos.forEach(function(item){
		if(id === item.id){
			match = item;
		}
	});

	console.log(match);
	if(match){
		res.json(match);
	}
	else{
		res.status(404).send();
	}

});

app.listen(PORT, function (){
	console.log('Express Server Started on PORT ' + PORT);
}); 