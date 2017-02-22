exports.command = function openAddIn(name) {

	var client = this

	return client
		.waitAndClick('button.o365button[title="' + name + '"]:not([disabled])', 30000)
		.waitAndClick('button[aria-label="Open SmartCloud Connect"]', 30000)
		.waitForElementVisible('iframe.AddinIframe', 10000)
		.execute(function () {
			var iframe = document.querySelector('iframe.AddinIframe')
			if(iframe) {
				iframe.id = 'addin-iframe'
			}
		}, [])
		.waitForElementVisible('#addin-iframe', 10000)
		.frame('addin-iframe')
}
