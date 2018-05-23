const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

let writingsSchema = new Schema({
	MyTitle: { type: String, required: true },
	MyText: String,
	MyImageURL: String
});

module.exports = mongoose.model('Writings', writingsSchema);