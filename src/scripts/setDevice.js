module.exports = function(app, inputs) {
	var device = inputs.device || 'Computer';
	app.airplayDevices[device].selected = true;
	return app.airplayDevices[device].properties();
};
