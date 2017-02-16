var config = require('../config.json')
var owa = config.owa

exports.command = function owaLogin(login, password) {
	return this
		.url(owa.url)
		.waitForElementVisible('body', 5000)
		.waitForElementVisible('.use_another_account', 5000).click('.use_another_account')
		.click('#cred_userid_inputtext')
		.setValue('#cred_userid_inputtext', login)
		.click('#cred_password_inputtext')
		.setValue('#cred_password_inputtext', password)
		.pause(1000)
		.click('#cred_sign_in_button')
		.waitForElementVisible('body[aria-label="Outlook"]', 60000)
}