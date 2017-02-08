exports.command = function openEmail(title) {

	var xPath = "//span[contains(@class, 'lvHighlightSubjectClass')][text()='"+title+"']"

	return this
		.useXpath()
		.waitForElementVisible(xPath, 60000).click(xPath)
		.useCss()
}
