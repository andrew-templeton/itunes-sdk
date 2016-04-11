module.exports = function (app, inputs) {
	var playlistName = 'itunes-remote';
	var app = Application('iTunes');
	var searchTerm = inputs.searchTerm;
	var library = app.libraryPlaylists[0];
	var result;
	var list;

	result = app.search(library, {
		for: searchTerm,
		only: inputs.limitTo
	});

	try {
		app.userPlaylists[playlistName]();
	} catch (e) {
		console.log('create playlist');
		app.make({
			new: 'playlist',
			withProperties: {
				name: playlistName
			}
		});
	}

	list = app.userPlaylists[playlistName];

	app.delete(list.tracks);

	result.forEach(function (element) {
		app.duplicate(element, {
			to: list
		});
	});

	console.log(list.time());

	return {
		playlistName: playlistName,
		playlistLength: result.length
	};
};
