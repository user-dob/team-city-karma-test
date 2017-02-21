describe('test', function () {

	it('test', function (browser) {
		browser
			.url('http://nightwatchjs.org/')
			.waitForElementVisible('body', 3000)
			.assert.title("Nightwatch.js | Node.js powered End-to-End testing framework-")
			.end()
	})

})