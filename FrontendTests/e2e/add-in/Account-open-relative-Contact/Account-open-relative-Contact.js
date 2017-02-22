// mode('Account open relative Contact', function (config) {
//
// 	it('Account open relative Contact', function (browser) {
// 		var addin = browser.page.addin();
// 		var name = 'OneAccountEEE'
//
// 		addin
// 			.search(name)
// 			.assert.containsText('.app_cards .card-info-fullname', name)
// 			.click('.app_card_template .relatives_btn_title[data-name="Contact"]')
// 			.waitForElementVisible('.app_card_template .card_related_type_menu:not(.closed)', 10000)
// 			.assert.visible('.app_card_template .card_related_type_menu:not(.closed) .title_modal')
// 			.getText('.app_card_template .card_related_type_menu:not(.closed) .title_modal', function (result) {
//
// 				browser
// 					.click('.app_card_template .card_related_type_menu:not(.closed)')
// 					.waitForRequestCompleted(60000)
// 					.assert.containsText('.app_card.opened [data-name="Account.Name"] .text', name)
// 					.end()
//
// 			})
// 	})
//
// })
//
//
//
