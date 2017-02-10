describe('Create Account', function() {

	var newAccountName = 'Account-' + Date.now()

	it('Create New Account', function (client) {

		client
			.openSmartCloudConnect({mailTitle: 'Verify your identity in Your Developer Edition'})

			.assert.visible('.create_block_overlay')
			.click('.create_block_overlay')
			.pause(100000)
			// .waitForElementVisible('.select2_opt_text[data-name="Account"]', 10000)
			// .click('.select2_opt_text[data-name="Account"]')
			// .waitForElementVisible('#create_record_modal', 10000)
			//
			// .setFormValue('#create_record_modal', 'Name', newAccountName)
			// .setFormDateTimeValue('#create_record_modal', 'SLAExpirationDate__c', new Date())
			// .setFormValue('#create_record_modal', 'SLASerialNumber__c', 12)
			//
			// .click('#create_record_modal button[data-name="create"]')
			// .waitForRequestCompleted(60000)
			//
			// .setValue('.app_search_controls .app_search_input', newAccountName)
			// .click('.app_search_controls .fa-search')
			//
			// .waitForRequestCompleted(60000)
			// .assert.containsText('.app_cards .card-info-fullname', newAccountName)
			// .end()
	});
})
