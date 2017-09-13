var mongoose = require('mongoose');
var Animals = mongoose.model('Animals') ;
module.exports = {
	show: function(req, res){
		Animals.find().sort({level:-1}).find({},function(err, arr) {
		var pass = arr;
		res.render('index', {mongoosii:pass});
	});			
	},

	add: function(req, res){
		var newMongoose = new Animals({hiearchy:req.body.hiearchy,name:req.body.name,level:req.body.level})
		newMongoose.save(function(err){
	   	if(err) {
	    	console.log('something went wrong');
	    } else {
	    	console.log('successfully added a user!');
	    	res.redirect('/');
	    }
	})
	},

	find: function(req, res){
		Animals.find({_id:req.param("tagId")},function(err,arr){
			var pass = arr;
			res.render('display', {mongoose:pass});
		});
	},

	edit: function(req,res){
		var id_find=Animals.find({_id:req.param("tagId")},function(err,arr){
		var pass = arr;
		res.render('edit', {mongoose:pass});
	})	
	},

	change: function(req,res){
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
	},

	destroy: function(req,res){
		console.log(req.param('tagId'));
		Animals.remove({_id:req.param('tagId')}, function(err){
		res.redirect('/');
	})
	}
}