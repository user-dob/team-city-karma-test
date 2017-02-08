var URL_OWA = 'https://outlook.office.com/owa/'

exports.command = function owaLogin(login, password) {
	return this
		.url(URL_OWA)
		.waitForElementVisible('body', 1000)
		.click('#cred_userid_inputtext')
		.setValue('#cred_userid_inputtext', login)
		.click('#cred_password_inputtext')
		.setValue('#cred_password_inputtext', password)
		.pause(1000)
		.click('#cred_sign_in_button')
}