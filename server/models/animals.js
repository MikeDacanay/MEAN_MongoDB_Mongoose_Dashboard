var mongoose = require('mongoose');

var Mongoose_Dashboard_Schema = new mongoose.Schema({
	hiearchy: String,
	name: String,
	level: Number,
	create_date: {type: Date, default: Date.now}
})

var Animals = mongoose.model('Animals', Mongoose_Dashboard_Schema);