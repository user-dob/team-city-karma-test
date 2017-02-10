describe('Search', function() {

	it('Search Account', function (client) {

		var name = 'Account-1486718740522'

		client
			.openSmartCloudConnect({mailTitle: 'Verify your identity in Your Developer Edition'})


			.setValue('.app_search_controls .app_search_input', name)
			.click('.app_search_controls .fa-search')

			.waitApiDone('/Query/Search', 60000)
			.assert.containsText('.app_cards .card-info-fullname', name)
			.end()
	});
})

