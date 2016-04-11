module.exports = function (app) {
	var library = app.libraryPlaylists[0];
	var tracks;
	var artists = [];
	var uniqueArtists;
	var artistsWithoutPartialDuplicates = [];
	var albums = [];
	var uniqueAlbums;

	tracks = library.sharedTracks();

	tracks.forEach(function (element) {
		artists.push(element.artist());
		albums.push(element.album());
	});

	uniqueArtists = artists.filter(function (item, pos) {
		return artists.indexOf(item) === pos;
	});

	uniqueAlbums = albums.filter(function (item, pos) {
		return albums.indexOf(item) === pos;
	});

	uniqueArtists.map(function (artist) {
		var found = 0;
		artistsWithoutPartialDuplicates.forEach(function (element) {
			if (artist.toLowerCase() === element.toLowerCase() || artist.toLowerCase().indexOf(element.toLowerCase()) !== -1) {
				found++;
			}
		});
		if (found === 0) {
			artistsWithoutPartialDuplicates.push(artist);
		}
	});

	return {
		tracksLength: tracks.length,
		artistsLength: artistsWithoutPartialDuplicates.length,
		artists: artistsWithoutPartialDuplicates,
		albumsLength: uniqueAlbums.length,
		albums: uniqueAlbums.sort()
	};
};
