const Word = require("../models/Word");
require("dotenv").config();
const perPage = 10;

class WordController {
	//Word /api/posts
	async create(req, res, next) {
		const { name, script, note, type } = req.body;
		if (!name) return res.status(400).json({ success: false, message: "Missing title!" });

		try {
			const newWord = new Word({
				name,
				script,
				note,
				type,
			});

			await newWord.save();
			res.json(true);
		} catch (error) {
			console.log(error);
			res.status(500).json({ success: false, message: "Server error" });
		}
	}

	//GET /api/posts
	async store(req, res, next) {
		const page = Math.max(0, req.query.page);
		try {
			const posts = await Word.find({})
				.limit(perPage)
				.skip(perPage * page)
				.sort({ createAt: -1 });
			res.json(posts);
		} catch (error) {
			console.log(error);
			res.status(500).json({ success: false, message: "Server error" });
		}
	}

	//PUT /api/posts/:id
	async update(req, res, next) {
		const { name, script, note, type } = req.body;
		if (!name) return res.status(400).json({ success: false, message: "Missing title!" });

		try {
			let updatedWord = {
				name,
				script: script || "",
				note,
				type,
			};

			updatedWord = await Word.findOneAndUpdate({ _id: req.params.id }, updatedWord, { new: true });

			if (!updatedWord) return res.status(401).json({ success: false, message: "Failed" });

			res.json(true);
		} catch (error) {
			console.log(error);
			res.status(500).json({ success: false, message: "Server error" });
		}
	}
	//DELETE /api/posts/:id
	async delete(req, res, next) {
		try {
			const deletedWord = await Word.deleteOne({ _id: req.params.id });

			if (!deletedWord) return res.status(401).json({ success: false, message: "Word not found" });

			res.json(true);
		} catch (error) {
			console.log(error);
			res.status(500).json({ success: false, message: "Server error" });
		}
	}
}

module.exports = new WordController();
