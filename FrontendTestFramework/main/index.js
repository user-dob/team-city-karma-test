var Mode = require('./mode')
var nwDefaultConfig = require('../nightwatch.config')

function Framework(config) {

	this.getCommand = function (name) {
		var command = require('./commands/add-in/' + name)
		return command.command
	}

	this.mode = new Mode(config).describe
	this.Mode = Mode

	this.getNightWatchConfig = function () {
		nwDefaultConfig.test_settings.default.globals = {
			config: config
		}
		return nwDefaultConfig
	}
}

module.exports = Framework

