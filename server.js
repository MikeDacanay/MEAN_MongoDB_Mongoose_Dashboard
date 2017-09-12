var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Mongoose_Horde');
mongoose.Promise = global.Promise;
var Mongoose_Dashboard_Schema = new mongoose.Schema({
	hiearchy: String,
	name: String,
	level: Number,
	create_date: {type: Date, default: Date.now}
})
mongoose.model('Animals', Mongoose_Dashboard_Schema);
var Animals = mongoose.model('Animals') ;

app.use(bodyParser.urlencoded({extended: true}));
app.listen(8000, function() {})
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/mongooses/new', function(req,res){
	res.render('new');
})

app.post('/mongooses', function(req,res){
	var newMongoose = new Animals({hiearchy:req.body.hiearchy,name:req.body.name,level:req.body.level})
	newMongoose.save(function(err){
	   	if(err) {
	    	console.log('something went wrong');
	    } else {
	    	console.log('successfully added a user!');
	    	res.redirect('/');
	    }
	})
})

app.get('/', function(req,res){
	Animals.find().sort({level:-1}).find({},function(err, arr) {
		var pass = arr;
		res.render('index', {mongoosii:pass});
	});	

})

app.get('/:tagId', function(req,res){
	Animals.find({_id:req.param("tagId")},function(err,arr){
		var pass = arr;
		res.render('display', {mongoose:pass});
	});
	
})

app.get('/edit/:tagId', function(req,res){
	var id_find=Animals.find({_id:req.param("tagId")},function(err,arr){
		var pass = arr;
		res.render('edit', {mongoose:pass});
	})
});

app.post('/change', function(req,res){
	Animals.find({_id:req.body.id},function(err,arr){
		console.log(arr[0]);
		if(req.body.hiearchy){
			arr[0].hiearchy = req.body.hiearchy
		}
		if(req.body.level){
			arr[0].level = req.body.level 
		}
		arr[0].save(function(err){
		})
		res.redirect('/');
	})	
})

app.post('/destroy/:tagId', function(req,res){
	console.log(req.param('tagId'));
	Animals.remove({_id:req.param('tagId')}, function(err){
		res.redirect('/');
	})
})