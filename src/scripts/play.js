module.exports = function(app) {
	app.play();
	return app.currentTrack.properties();
};
