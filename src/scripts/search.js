module.exports = function (app, inputs) {
	var playlistReference;
	var playlistPersistentId = inputs.playlist && inputs.playlist.persistentID;
	if (playlistPersistentId) {
		playlistReference = app.playlists.whose({persistentID: playlistPersistentId});
	}
	return JSON.parse(JSON.stringify(app.search(playlistPersistentId || app.libraryPlaylists[0], {
		for: inputs.query,
		only: inputs.type || 'all'
	}).map(function(thing) {
		return thing.properties();
	})));
};
