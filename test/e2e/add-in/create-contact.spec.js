// describe('Create Contact', function() {
//
// 	var name = 'Contact-' + Date.now()
//
// 	it('Create New Contact', function (client) {
//
// 		client
// 			.openSmartCloudConnect({mailTitle: 'Verify your identity in Your Developer Edition'})
//
// 			.assert.visible('.create_block_overlay')
// 			.click('.create_block_overlay')
// 			.waitForElementVisible('.select2_opt_text[data-name="Contact"]', 10000)
// 			.click('.select2_opt_text[data-name="Account"]')
// 			.waitForElementVisible('#create_record_modal', 10000)
//
// 			.setFormValue('#create_record_modal', 'FirstName', name)
//
// 			.click('#create_record_modal button[data-name="create"]')
// 			.waitForRequestCompleted(60000)
//
// 			.setValue('.app_search_controls .app_search_input', name)
// 			.click('.app_search_controls .fa-search')
// 			.pause(1000)
//
// 			.waitForRequestCompleted(60000)
// 			.assert.containsText('.app_cards .card-info-fullname', name)
// 	});
//
// 	afterEach(function(client, done) {
// 		client
// 			.removeLastCreateObject(function () {
// 				done()
// 				client.end()
// 			})
//
// 	});
//
// })
//
