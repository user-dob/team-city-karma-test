var callerId = require('caller-id')
var path = require('path')
var fs = require('fs')
var deepAssign = require('deep-assign')

var EMAIL_READ_MODE = 0
var	EMAIL_COMPOSE_MODE = 1
var	EVENT_READ_MODE = 2
var	EVENT_COMPOSE_MODE = 3

var modeList = [
	{
		key: '@email-read',
		title: '[email read mode]',
		mode: EMAIL_READ_MODE
	},
	{
		key: '@email-compose',
		title: '[email compose mode]',
		mode: EMAIL_COMPOSE_MODE
	},
	{
		key: '@event-read',
		title: '[event read mode]',
		mode: EVENT_READ_MODE
	},
	{
		key: '@event-compose',
		title: '[event compose mode]',
		mode: EVENT_COMPOSE_MODE
	}
]

function Mode(globalConfig) {
	var self = this

	this.getConfig = function (callerData) {
		var config = globalConfig
		var dirname = path.dirname(callerData.filePath)
		var localConfigPath = path.join(dirname, 'config.json')

		if(fs.existsSync(localConfigPath)) {
			var localConfig = require(localConfigPath)
			config = deepAssign({}, config, localConfig)
			config.modeOptions = localConfig.modeOptions || config.modeOptions
		}

		return config
	}
	
	this.describe = function (testName, body, options) {
		var callerData = callerId.getData()
		var config = self.getConfig(callerData)

		options = options || config.modeOptions

		modeList.forEach(function (item) {
			if(options[item.key]) {
				describe(testName + ' ' + item.title, function () {

					it(testName + ' [login]', function (browser) {
						var addin = browser.page.addin()

						browser.config = self.getConfig(callerData)

						addin
							.openSmartCloudConnect(options[item.key], item.mode)
					})

					body(config)

				})
			}
		})
	}

}

Mode.EMAIL_READ_MODE = EMAIL_READ_MODE
Mode.EMAIL_COMPOSE_MODE = EMAIL_COMPOSE_MODE
Mode.EVENT_READ_MODE = EVENT_READ_MODE
Mode.EVENT_COMPOSE_MODE = EVENT_COMPOSE_MODE

module.exports = Mode
