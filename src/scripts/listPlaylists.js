module.exports = function (app) {
	return app.playlists().map(function(playlist) {
		return playlist.properties();
	});
};
