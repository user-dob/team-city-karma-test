describe('outlook.office.com/owa', function() {

	it('Demo test owa login', function (client) {

		client
			.openSmartCloudConnect({mailTitle: 'Your Daily Digest for Chatter'})
			.setValue('.app_search_input', 'test')
			.click('.fa-search')
			.pause(4000)
			.assert.containsText('.app_cards .card-info-fullname', 'ContactForTestIphone')
			.end()
	});

})