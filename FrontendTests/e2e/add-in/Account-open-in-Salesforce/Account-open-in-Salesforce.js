function test(modeKey) {
	
	return function (browser) {
		var addin = browser.page.addin();
		var name = 'OneAccountEEE'

		addin
			.openSmartCloudConnect({}, modeKey)
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
	}
}

describe('Account open in Salesforce [email read mode]', function () {
	it('Account open in Salesforce', test(Mode.EMAIL_READ_MODE))
})

describe('Account open in Salesforce [email compose mode]', function () {
	it('Account open in Salesforce', test(Mode.EMAIL_COMPOSE_MODE))
})

describe('Account open in Salesforce [event read mode]', function () {
	it('Account open in Salesforce', test(Mode.EVENT_READ_MODE))
})

describe('Account open in Salesforce [email compose mode]', function () {
	it('Account open in Salesforce', test(Mode.EVENT_COMPOSE_MODE))
})

