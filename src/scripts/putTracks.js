module.exports = function(app, inputs) {
	var playlistId = inputs.playlistId;
	var trackIds = inputs.trackIds;

	var library = app.libraryPlaylists[0];
	var playlist = app.playlists.whose({persistentID: playlistId}).at(0)()

	trackIds.forEach(function(trackId) {
		app.duplicate(library.tracks.whose({persistentID: trackId}), {
			to: playlist
		});
	});
};

