mode('Account open relative Contact', function (config) {

	it('Account open relative Contact', function (browser) {
		var addin = browser.page.addin();
		var name = 'OneAccountEEE'

		addin
			.search(name)
			.assert.containsText('.app_cards .card-info-fullname', name)
			.end()
	})

})