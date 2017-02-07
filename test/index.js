// java.exe -jar -Dwebdriver.gecko.driver=C:\Selenium\geckodriver.exe C:\Selenium\selenium-server-standalone-3.0.1.jar

// cd C:\Program Files (x86)\Java\jre1.8.0_111\bin\
// java.exe -jar C:\Selenium\selenium-server-standalone-3.0.1.jar

// node_modules\.bin\wdio.cmd

var assert = require('assert');
describe('webdriver.io page', function() {
	it('should have the right title - the fancy generator way', function () {
		browser.url('http://webdriver.io');
		var title = browser.getTitle();
		assert.equal(title, 'WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
	});

	it('should have the right title - the fancy generator way', function () {
		browser.url('http://webdriver.io');
		var title = browser.getTitle();
		assert.equal(title, 'WebdriverIO - Selenejs');
	});

});