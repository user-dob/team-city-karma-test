exports.command = function owaLogin(login, password) {

	var client = this
	var owa = client.page.owa();

	owa
		.navigate()
		.waitForElementVisible('body', 5000)
		.execute(function () {
			jQuery('.use_another_account').click()
		}, [])
		.click('@LoginInput')
		.setValue('@LoginInput', login)
		.click('@PasswordInput')
		.setValue('@PasswordInput', password)
		.pause(1000)
		.click('#cred_sign_in_button')
		.waitForElementVisible('body[aria-label="Outlook"]', 60000)

	return client
}