var osascript = require('osascript').eval;
var requireDir = require('require-dir');
var SerializeFunction = require('./serialize-fn');
var Scripts = requireDir('./scripts');


var OSA_SCRIPT_SETTINGS = {
	flags: ['-s', 's']
};

module.exports = ScriptOut;

function ScriptOut(script, opts, callback) {
	if ('function' != callback && 'function' == typeof opts) {
		callback = opts;
		opts = {};
	}
	callback = callback || function() {};
	opts = opts || {};

	executable = SerializeFunction(Scripts[script], opts);

	console.log('Calling: ', script);
	console.log('Options: ', opts);

	osascript(executable, OSA_SCRIPT_SETTINGS, function (err, data) {
		var result;
		if (err) {
			console.error(err);
			return callback(err);
		}
		try {
			return callback(null, JSON.parse(data));
		} catch (err) {
			return callback(null, data);
		}
	});
}