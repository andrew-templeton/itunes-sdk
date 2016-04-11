module.exports = function (app) {
	var deviceProps = [
		'active',
		'available',
		'id',
		'index',
		'name',
		'kind',
		'networkAddress',
		'persistentID',
		'protected',
		'selected',
		'supportsAudio',
		'supportsVideo',
		'soundVolume'
	];
	var bedroom = app.airplayDevices()[1];
	app.currentAirPlayDevices = bedroom;
};
