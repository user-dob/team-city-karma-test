exports.command = function openAddIn(name) {

	var client = this
	var selector = 'button.o365button[title="'+name+'"]'
	var menuOpenSelector = '.ms-ContextualMenu-list .ms-ContextualMenu-item:nth-child(2)'

	return client
		.waitForElementVisible(selector, 30000).click(selector)
		.waitForElementVisible(menuOpenSelector, 30000).click(menuOpenSelector)
		//.waitForElementVisible('#exttsp0', 3000)
		// TODO
		//.frame('exttsp0')
		.frame(1)
		.pause(1000)
}

