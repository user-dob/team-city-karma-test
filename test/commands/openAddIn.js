exports.command = function openAddIn(name) {

	var client = this
	var selector = 'button.o365button[title="'+name+'"]'

	return client
		.waitForElementVisible(selector, 60000).click(selector)
		.click('.ms-ContextualMenu-list .ms-ContextualMenu-item:nth-child(2)')
		.waitForElementVisible('iframe.AddinIframe', 10000)
		.assert.visible('iframe.AddinIframe')
		// TODO
		.frame('exttsp0')
		.waitForElementVisible('.app_content_body', 60000)
}
