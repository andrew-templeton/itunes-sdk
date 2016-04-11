var ScriptOut = require('./src/script-out');

function playTrack(thing, callback) {
	ScriptOut('playTrack', {specifier: thing}, callback);
}

function stopPlayback(callback) {
	ScriptOut('stop', callback);
}

function pausePlayback(callback) {
	ScriptOut('pause', callback);
}

function nextTrack(callback) {
	ScriptOut('next', callback);
}

function prevTrack(callback) {
	ScriptOut('previous', callback);
}

function backTrack(callback) {
	ScriptOut('back', callback);
}

function search(searchTerm, opts, callback) {
	ScriptOut('search', {
		limitTo: opts.limitTo || 'all',
		searchTerm: opts.searchTerm || '*'
	}, callback);
}

function getData(callback) {
	ScriptOut('getLibraryData', callback);
}

function debug(callback) {
	ScriptOut('debug', callback);
}

function setVolume(volume, callback) {
	ScriptOut('setVolume', {volume: volume}, callback);
}

function getVolume(callback) {
	ScriptOut('getVolume', callback);
}


function adjustVolume(delta, callback) {
	iTunes.getVolume(function(err, volume) {
		var newVolume = Math.min(100, Math.max(0, volume + delta));
		iTunes.setVolume(newVolume, callback);	
	});
}

function currentTrack(callback) {
	ScriptOut('currentTrack', callback);
}

var iTunes = {
	playTrack: playTrack,
	stop: stopPlayback,
	pause: pausePlayback,
	next: nextTrack,
	previous: prevTrack,
	back: backTrack,
	search: search,
	getData: getData,
	debug: debug,
	currentTrack: currentTrack,
	setVolume: setVolume,
	getVolume: getVolume,
	adjustVolume: adjustVolume
};

module.exports = iTunes;
