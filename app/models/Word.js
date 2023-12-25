const mongoose = require("mongoose");
const { Schema } = mongoose;

const WordSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	script: {
		type: String,
	},
	note: {
		type: String,
	},
	type: {
		type: String,
		enum: ["NOUN", "VERB", "ADJ", "ADV"],
	},
	createAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("words", WordSchema);
