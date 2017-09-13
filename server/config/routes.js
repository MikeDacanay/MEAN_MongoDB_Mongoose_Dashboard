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
	animals.change(req,res)
})

app.post('/destroy/:tagId', function(req,res){
	animals.destroy(req,res)
})

}