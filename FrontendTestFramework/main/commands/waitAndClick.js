exports.command = function waitAndClick(selector, timeout) {

	timeout = timeout || 10000

	return this
		.waitForElementVisible(selector, timeout)
		.click(selector)

}
