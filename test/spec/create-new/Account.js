// describe('Create Account', function() {
//
// 	it('Create New Account', function (client) {
//
// 		client
// 			.openSmartCloudConnect({mailTitle: 'Verify your identity in Your Developer Edition'})
// 			.click('.o365cs-notifications-closeButton')
// 			.click('.create_block_overlay')
// 			.waitForElementVisible('.select2_opt_text[data-name="Contact"]', 10000)
// 			.click('.select2_opt_text[data-name="Contact"]')
// 			.waitForElementVisible('#create_record_modal', 10000)
// 			.execute(function () {
// 				jQuery()
// 			}, [], function () {
// 				return true
// 			})
// 			.pause(300000000)
// 			.end()
// 	});
//
// })
//
//
// describe('Create Account', function() {
//
// 	var newAccountName = 'Account-' + Date.now()
//
// 	it('Create New Account', function (client) {
//
// 		client
// 			.openSmartCloudConnect({mailTitle: 'Verify your identity in Your Developer Edition'})
// 			.click('.create_block_overlay')
// 			.waitForElementVisible('.select2_opt_text[data-name="Account"]', 10000)
// 			.click('.select2_opt_text[data-name="Account"]')
// 			.waitForElementVisible('#create_record_modal', 10000)
//
// 			.waitForAjaxCompleted()
//
// 			// SET FIELD DATA
// 			.setValue('#create_record_modal input[data-name="Name"]', newAccountName)
// 			.click('#create_record_modal input[data-name="SLAExpirationDate__c"]+span')
// 			.setValue('#create_record_modal input[data-name="SLASerialNumber__c"]', '12')
//
// 			.click('#create_record_modal button[data-name="create"]')
// 			.pause(500)
//
// 			.waitForAjaxCompleted()
//
// 			.setValue('.app_search_controls .app_search_input', newAccountName)
// 			.click('.app_search_controls .fa-search')
//
// 			.waitForAjaxCompleted()
// 			.assert.containsText('.app_cards .card-info-fullname', newAccountName)
// 			.end()
// 	});
//
// })


describe('Create Account', function() {

	it('Create New Account', function (client) {

		client
			.openSmartCloudConnect({mailTitle: 'Verify your identity in Your Developer Edition'})
			.click('.create_block_overlay')
			.waitForElementVisible('.select2_opt_text[data-name="Account"]', 10000)
			.click('.select2_opt_text[data-name="Account"]')
			.pause(1000000)
			//.end()
	});

})


// describe('Create Account', function() {
//
// 	var newAccountName = 'Account-test-name-' + Date.now()
//
// 	it('Create New Account', function (client) {
//
// 		client
// 			.openSmartCloudConnect({mailTitle: 'Verify your identity in Your Developer Edition'})
// 			.click('.create_block_overlay')
// 			.waitForElementVisible('.select2_opt_text[data-name="Account"]', 10000)
// 			.click('.select2_opt_text[data-name="Account"]')
// 			.waitForElementVisible('#create_record_modal', 10000)
//
// 			.setValue('#create_record_modal input[data-name="Name"]', newAccountName)
// 			//.setDateTimeValue('#create_record_modal input[data-name="SLAExpirationDate__c"]', new Date())
//
// 			.click('#create_record_modal input[data-name="SLAExpirationDate__c"]+span')
//
// 			.setValue('#create_record_modal input[data-name="SLASerialNumber__c"]', '12')
//
// 			.click('#create_record_modal button[data-name="create"]')
// 			.pause(1000)
// 			.end()
// 	});
//
// 	it('Check New Account exist', function (client) {
// 		client
// 			.openSmartCloudConnect({mailTitle: 'Verify your identity in Your Developer Edition'})
// 			.pause(1000)
// 			.setValue('.app_search_controls .app_search_input', newAccountName)
// 			.click('.app_search_controls .fa-search')
// 			.pause(3000)
// 			.assert.containsText('.app_cards .card-info-fullname', newAccountName)
// 			.end()
//
// 	})
//
// })


// describe('Create Account', function() {
//
// 	it('Create New Account', function (client) {
//
// 		client
// 			.url('http://eonasdan.github.io/bootstrap-datetimepicker/')
// 			.waitForElementVisible('body', 3000)
// 			.setDateTimeValue('#datetimepicker1', new Date())
//
// 		//.end()
// 	});
//
// })
//
