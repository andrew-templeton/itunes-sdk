module.exports = function (fn, inputs) {
	inputs = inputs || {};
	var fnString = fn.toString();
	var params = Object.keys(inputs);
	var lines = fnString.split('\n').slice(1, -1);
	var paramLine = '(function(app, inputs) {';
	var runAppLine = '\tapp.run();'
	var execLine = '})(Application("iTunes"), ' + JSON.stringify(inputs) + ');';
	lines.unshift(runAppLine);
	lines.unshift(paramLine);
	lines.push(execLine);
	var indent = /[ \t]*/.exec(lines[0])[0];
	var result = lines.map(function(line) {
		return line.replace(indent, '');
	}).join('\n');
	return result;
};
