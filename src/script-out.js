var osascript = require('osascript').eval;
var requireDir = require('require-dir');
var SerializeFunction = require('./serialize-fn');
var Scripts = requireDir('./scripts');


var OSA_SCRIPT_SETTINGS = {
	flags: ['-s', 's']
};

module.exports = ScriptOut;

function inputPackager(mappings) {
	return function(argVals) {
		var args = [].slice.call(argVals);
		var callback = args.pop();
		var opts = (mappings || []).reduce(function(hash, key, index) {
			hash[key] = args[index] || null;
			return hash;
		}, {});
		return {
			callback: callback || noop,
			opts: opts
		};
	};
}

function noop() {
}

function ScriptOut(script, mappings) {
	var getInput = inputPackager(mappings);
	return function ScriptFunctor() {
		var input = getInput(arguments);

		executable = SerializeFunction(Scripts[script], input.opts);

		console.log('Calling: ', script);
		console.log('Options: ', input.opts);

		osascript(executable, OSA_SCRIPT_SETTINGS, function (err, data) {
			var result;
			if (err) {
				console.error(err);
				return input.callback(err);
			}
			try {
				result = JSON.parse(data);
			} catch (err) {
				result = data;
			}
			input.callback(null, result);
		});
	};
}
