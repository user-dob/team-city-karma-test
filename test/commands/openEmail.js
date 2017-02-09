exports.command = function openEmail(title) {

	var xPath = "//span[contains(@class, 'lvHighlightSubjectClass')][text()='"+title+"']"

	return this
		.waitForElementVisible('div[data-convid]', 60000)
		.useXpath()
		.waitForElementVisible(xPath, 60000).click(xPath)
		.useCss()
}
