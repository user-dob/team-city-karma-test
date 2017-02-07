var LOGIN = 'VBTestSF365@decadd.onmicrosoft.com'
var PASSWORD = 'aB123456'

describe('outlook.office.com/owa', function() {

	it('Demo test GitHub', function (client) {
		client
			.url('https://outlook.office.com/owa/')
			.waitForElementVisible('body', 1000)
			.click('#cred_userid_inputtext')
			.setValue('#cred_userid_inputtext', LOGIN)
			.click('#cred_password_inputtext')
			.setValue('#cred_password_inputtext', PASSWORD)
			.pause(1000)
			.click('#cred_sign_in_button')
			.waitForElementVisible('#_ariaId_24', 10000).click('#_ariaId_24')
			.waitForElementVisible('button._1Fd2vs8lcUZ55PLwMz6tRl', 10000).click('button._1Fd2vs8lcUZ55PLwMz6tRl')
			.click('.ms-ContextualMenu-list .ms-ContextualMenu-item:nth-child(2)')
			.pause(10000)
			.assert.title('GitHub - nightwatchjs/nightwatch: Automated testing and continous integration framework based on node.js and selenium webdriver')
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

})