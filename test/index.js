// java.exe -jar -Dwebdriver.gecko.driver=C:\Selenium\geckodriver.exe C:\Selenium\selenium-server-standalone-3.0.1.jar

// cd C:\Program Files (x86)\Java\jre1.8.0_111\bin\
// java.exe -jar C:\Selenium\selenium-server-standalone-3.0.1.jar

// node_modules\.bin\wdio.cmd

var webdriverio = require('webdriverio'),
	assert      = require('assert');

describe('my webdriverio tests', function(){

	this.timeout(99999999);
	var client;

	before(function(){
		client = webdriverio.remote({ desiredCapabilities: {browserName: 'firefox'} });
		return client.init();
	});

	it('Github test',function() {
		return client
			.url('https://github.com/')
			.getTitle().then(function (title) {
				assert(title === 'How people build software · GitHub');
			})
	});

	after(function() {
		return client.end();
	});
});