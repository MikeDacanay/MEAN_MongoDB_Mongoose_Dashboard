// var mongoose = require('mongoose');
// var Animals = mongoose.model('Animals') ;
var animals = require('../controllers/animals.js');
module.exports = function(app) {

app.get('/mongooses/new', function(req,res){
	res.render('new');
})

app.post('/mongooses', function(req,res){
	animals.add(req,res)
})

app.get('/', function(req,res){
	animals.show(req,res)
})

app.get('/:tagId', function(req,res){
	animals.find(req,res)
})

app.get('/edit/:tagId', function(req,res){
	animals.edit(req,res)
});

app.post('/change', function(req,res){
	// Animals.find({_id:req.body.id},function(err,arr){
	// 	console.log(arr[0]);
	// 	if(req.body.hiearchy){
	// 		arr[0].hiearchy = req.body.hiearchy
	// 	}
	// 	if(req.body.level){
	// 		arr[0].level = req.body.level 
	// 	}
	// 	arr[0].save(function(err){
	// 	})
	// 	res.redirect('/');
	// })	
	animals.change(req,res)
})

app.post('/destroy/:tagId', function(req,res){
	console.log(req.param('tagId'));
	Animals.remove({_id:req.param('tagId')}, function(err){
		res.redirect('/');
	})
})

}