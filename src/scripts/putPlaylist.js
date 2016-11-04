module.exports = function(app, inputs) {
	try {
		app.userPlaylists[inputs.name]();
	} catch (e) {
		console.log('create playlist');
		app.make({
			new: 'playlist',
			withProperties: {
				name: inputs.name
			}
		});
	}

	list = app.userPlaylists[inputs.name];

	app.delete(list.tracks);

	return list.properties();
};