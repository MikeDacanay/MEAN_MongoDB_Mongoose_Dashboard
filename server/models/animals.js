var mongoose = require('mongoose');
// create the schema
var Mongoose_Dashboard_Schema = new mongoose.Schema({
	hiearchy: String,
	name: String,
	level: Number,
	create_date: {type: Date, default: Date.now}
})
// register the schema as a model
var Animals = mongoose.model('Animals', Mongoose_Dashboard_Schema);