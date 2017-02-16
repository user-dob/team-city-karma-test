var LOGIN = 'VBTestSF365@decadd.onmicrosoft.com'
var PASSWORD = 'aB123456'
var MAIL_TITLE = 'Verify your identity in Your Developer Edition'
var ADD_IN_NAME = 'SmartCloud Connect for Salesforce.com'

describe('outlook.office.com/owa', function() {

	// it('owa login', function (client) {
	// 	client
	// 		.url("http://www.google.com")
	// 		.waitForElementVisible('body', 1000)
	// 		.setValueIE('input[type=text]', 'nightwatch')
	// 		.pause(2000)
	// 		.end()
	// });

	it('owa login', function (client) {
		client
			.owaLogin(LOGIN, PASSWORD)
			.assert.title('Mail - VBTestSF365 - Outlook')
			.end()
	});

	// it('open email by title', function (client) {
	//
	// 	var xPathEmailTitle = '//*[@id="primaryContainer"]/div[5]/div/div[1]/div/div[4]/div[3]/div/div[4]/div[1]/div/div/div[3]/div[2]/div[2]/div[1]/div[1]/span'
	//
	// 	client
	// 		.owaLogin(LOGIN, PASSWORD)
	// 		.openEmail(MAIL_TITLE)
	// 		.useXpath()
	// 		.waitForElementVisible(xPathEmailTitle, 60000)
	// 		.assert.containsText(xPathEmailTitle, MAIL_TITLE)
	// 		.useCss()
	// 		.end()
	//
	// })
	//
	// it('open add-in by name', function (client) {
	// 	client
	// 		.owaLogin(LOGIN, PASSWORD)
	// 		.openEmail(MAIL_TITLE)
	// 		.openAddIn(ADD_IN_NAME)
	// 		.waitForElementVisible('.sfdc_app_frame', 2000)
	// 		.end()
	// })


})