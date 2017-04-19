var path = require('path');
var cmd = require('node-cmd');
var config = require('./nightwatch.config')

function buildCommandLine(config) {
	var command = []

	command.push('java -jar')

	var cliArgs = []
	for(var args in config.cli_args) {
		cliArgs.push('-D' + args + '=' + config.cli_args[args])
	}

	command.push(cliArgs.join(' '))

	command.push(config.server_path)

	command.push('-port ' + config.port)

	command.push('-log ' + config.log_path)

	return command.join(' ')
}

// TODO:temp data

cmd.run(buildCommandLine(config.selenium))
