const wordRouter = require("./word");

function route(app) {
	app.use("/api/word", wordRouter);
}

module.exports = route;
