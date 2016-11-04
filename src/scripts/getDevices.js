module.exports = function(app) {
	return app.airplayDevices().map(function(device) {
		return device.properties()
	});
};
