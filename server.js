var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
mongoose.Promise = global.Promise;
var Moongoose_Dashboard_Schema = new mongoose.Schema({
	hiearchy: {type: String, required: true, maxlength: 20},
	name: {type: String, required: true, minlength: 1},
	level: {type: Number, required: true, min: 1, max: 10},
	create_date: {type: Date, default: Date.now}
})
mongoose.model('Animals', Moongoose_Dashboard_Schema);
var Animals = mongoose.model('Animals') ;

app.use(bodyParser.urlencoded({extended: true}));
app.listen(8000, function() {})
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/mongooses/new', function(req,res){
	res.render('new');
})

app.post('/mongooses', function(req,res){
	console.log(req.body.name);
	var newMongoose = new Animals;
	newMongoose.hiearchy= req.body.hiearchy;
	newMongoose.name= req.body.name;
	newMongoose.level= req.body.level;
	res.redirect('/mongooses/new');
})