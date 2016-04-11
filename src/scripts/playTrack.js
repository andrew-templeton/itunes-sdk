module.exports = function (app, inputs) {
	var specifier = inputs.specifier;
	var persistentID = specifier && specifier.persistentID;
	if (!persistentID) {
		throw new Error('No persistentID found on object.');
	}
	var query = {persistentID: persistentID};
	var inListHits = app.currentPlaylist.tracks.whose(query);
	if (inListHits && inListHits.length) {
		return app.play(inListHits);
	}
	app.play(app.libraryPlaylists[0].tracks.whose(query));
};
