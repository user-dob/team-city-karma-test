describe('Create Account', function() {

	var name = 'Account-' + Date.now()

	console.log(name)

	it('Create New Account', function (client) {

		client
			.openSmartCloudConnect({mailTitle: 'Verify your identity in Your Developer Edition'})

			.assert.visible('.create_block_overlay')
			.click('.create_block_overlay')
			.waitForElementVisible('.select2_opt_text[data-name="Account"]', 10000)
			.click('.select2_opt_text[data-name="Account"]')
			.waitForElementVisible('#create_record_modal', 10000)

			.setFormValue('#create_record_modal', 'Name', name)
			.setFormDateTimeValue('#create_record_modal', 'SLAExpirationDate__c', new Date())
			.setFormValue('#create_record_modal', 'SLASerialNumber__c', 12)

			.setFormSelectValue('#create_record_modal', 'Active__c', 'Yes')
			.setFormSelectValue('#create_record_modal', 'SLA__c', 'Platinum')
			//.setFormSelectWithSearchValue('#create_record_modal', 'OwnerId', 'Chatter Expert')
			.setFormTextAreaValue('#create_record_modal', 'Description', 'test Description')

			.click('#create_record_modal button[data-name="create"]')
			.waitForRequestCompleted(60000)

			.setValue('.app_search_controls .app_search_input', name)
			.click('.app_search_controls .fa-search')
			.pause(1000)

			.waitForRequestCompleted(60000)
			.assert.containsText('.app_cards .card-info-fullname', name)
	});

	afterEach(function(client, done) {
		client
			.removeLastCreateObject(done)
			.end()
	});


})
