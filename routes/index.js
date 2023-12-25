const wordRouter = require("./word");

function route(app) {
	app.use("/api/word", wordRouter);
	app.get("/api/", function (req, res) {
		res.send("Hello");
	});
	app.get("/favicon.ico", function (req, res) {
		res.status(204);
		res.end();
	});
}

module.exports = route;
