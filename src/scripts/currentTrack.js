module.exports = function (app) {
	try {
		var currentTrack = app.currentTrack();
	} catch (err) {
		// No track selected
		return null;
	}
	return JSON.parse(JSON.stringify(currentTrack.properties()));
};
