exports.command = function openEmail(title) {

	var client = this
	var owa = client.page.owa();

	owa
		.click('@SearchButton')
		.waitForElementVisible('@SearchInput', 10000)
		.setValue('@SearchInput', title)
		.sendKeys('@SearchInput', client.Keys.ENTER)
		.waitForElementVisible('div[data-convid]', 60000)
		.click('div[data-convid]')

	return client
}
