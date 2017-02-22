var path = require('path');

module.exports = {
	"src_folders" : ["./e2e/"],
	"output_folder" : "reports",
	"custom_commands_path" : [
		path.join(__dirname, 'main/commands'),
		path.join(__dirname, 'main/commands/owa'),
		path.join(__dirname, 'main/commands/form'),
		path.join(__dirname, 'main/commands/_api'),
	],
	"custom_assertions_path" : "",
	"page_objects_path" : [
		path.join(__dirname, 'main/pages'),
		"./pages"
	],
	"globals_path" : path.join(__dirname, 'main/globals.js'),

	"selenium" : {
		"start_process" : false,
		"server_path" : path.join(__dirname, 'selenium/selenium-server-standalone-3.0.1.jar'),
		"log_path" : "./log/",
		"port" : 4440,
		"cli_args" : {
			"webdriver.chrome.driver" : path.join(__dirname, 'selenium/chromedriver.exe'),
			"webdriver.ie.driver" : path.join(__dirname, 'selenium/IEDriverServer.exe'),
			"webdriver.edge.driver" : path.join(__dirname, 'selenium/MicrosoftWebDriver.exe')
		}
	},

	"request_timeout_options": {
		"timeout": 60000,
		"retry_attempts": 3
	},

	"test_runner" : {
		"type" : "mocha",
		"options" : {
			"timeout" : 10000000,
			"reporter": path.join(__dirname, 'node_modules/mocha-teamcity-reporter/lib/teamcity.js')
		}
	},
	"test_settings" : {
		"default" : {
			"launch_url" : "http://localhost",
			"selenium_port"  : 4440,
			"selenium_host"  : "localhost",
			"silent": true,
			"screenshots" : {
				"enabled" : false,
				"path" : ""
			},
			"desiredCapabilities": {
				"browserName" : "firefox",
				"javascriptEnabled": true,
				"marionette": true
			}
		},

		"chrome" : {
			"desiredCapabilities": {
				"browserName" : "chrome",
				"browserConnectionEnabled:": true,
				"chromeOptions" : {
					"args" : ["incognito", "test-type", "start-maximized"]
				}
			}
		},

		"edge" : {
			"desiredCapabilities": {
				"browserName": "MicrosoftEdge"
			}
		},

		"ie" : {
			"desiredCapabilities": {
				"browserName" : "internet explorer",
				"version": "11"
			}
		}
	}
}
