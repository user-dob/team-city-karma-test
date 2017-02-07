var LOGIN = 'VBTestSF365@decadd.onmicrosoft.com'
var PASSWORD = 'aB123456'

describe('Github', function() {

	it('Demo test GitHub', function (client) {
		client
			.url('https://github.com/nightwatchjs/nightwatch')
			.waitForElementVisible('body', 1000)
			.assert.title('nightwatchjs/nightwatch · GitHub')
			.assert.visible('.container h1 strong a')
			.assert.containsText('.container h1 strong a', 'nightwatch', 'Checking project title is set to nightwatch');
	});

	after(function(client, done) {
		if (client.sessionId) {
			client.end(function() {
				done();
			});
		} else {
			done();
		}
	});

});
