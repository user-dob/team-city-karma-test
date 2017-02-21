exports.command = function search(text) {
	return this
		.waitForElementVisible('@SearchInput', 3000)
		.clearValue('@SearchInput')
		.setValue('@SearchInput', text)
		.sendKeys('@SearchInput', this.api.Keys.ENTER)
		.click('body')
		.pause(500)
		.waitForRequestCompleted(120000)
}


