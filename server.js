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

app.use(bodyParser.urlencoded({extended: true}));
app.listen(8000, function() {})
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

var routes_setter = require('./server/config/routes.js');

routes_setter(app);
