describe('select2', function() {

	var newAccountName = 'Account-' + Date.now()

	it('open', function (client) {

		client
			.openSmartCloudConnect({mailTitle: 'Verify your identity in Your Developer Edition'})
			.click('.create_block_overlay')
			.waitForElementVisible('.select2_opt_text[data-name="Account"]', 10000)
			.click('.select2_opt_text[data-name="Account"]')
			.waitForElementVisible('#create_record_modal', 10000)

			.pause(100000000)
			.end()

	});
})

