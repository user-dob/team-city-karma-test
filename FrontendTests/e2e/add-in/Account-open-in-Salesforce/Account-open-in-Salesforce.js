mode('Account open in Salesforce', function (config) {

	it('Account open in Salesforce', function (browser) {
		var addin = browser.page.addin();
		var name = 'OneAccountEEE'

		addin
			.search(name)
			.assert.containsText('.app_cards .card-info-fullname', name)
			.click('.app_card_template [data-name="detailed-actions-show"]')
			.waitAndClick('.app_card_template [data-name="open-in-salesforce"]')
			.api.windowHandles(function(result) {

				browser
					.pause(1000)
					.assert.equal(result.value.length, 2, 'There should be two windows open.')

				var newWindow = result.value[1]

				browser
					.switchWindow(newWindow)
					.waitForElementVisible('h2.topName', 10000)
					.assert.containsText('h2.topName', name)
					.end()
			})
	})
})