module.exports = function(app, inputs) {
	var playlistId = inputs.playlistId;
	var playlistName = app.userPlaylists
		.whose({persistentID: playlistId})()[0].name();
	var playlist = app.userPlaylists[playlistName];
	app.play(playlist);
};
