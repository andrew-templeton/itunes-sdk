var iTunes = require('./index');

iTunes.adjustVolume(+1, function (err, response) {
	console.log(response || err);
	iTunes.currentTrack(function(err, response) {
		console.log(response);
		var track = JSON.parse(response);
		iTunes.next(function(err, data) {
			console.log('Waiting 3s...');
			setTimeout(function() {
				iTunes.playTrack(track);
			}, 3 * 1000);
		});
	});
});