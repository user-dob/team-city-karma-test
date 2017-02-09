var LOGIN = 'VBTestSF365.2@decadd.onmicrosoft.com'
var PASSWORD = 'aB123456'
var MAIL_TITLE = 'Verify your identity in Your Developer Edition'
var ADD_IN_NAME = 'L SCC for Salesforce.com'
//var ADD_IN_NAME = 'SmartCloud Connect for Salesforce.com'

exports.command = function openSmartCloudConnect(options) {

	var options = options || {}
	var login = options.login || LOGIN
	var password = options.password || PASSWORD
	var mailTitle = options.mailTitle || MAIL_TITLE
	var addInName = options.addInName || ADD_IN_NAME

	return this
		.owaLogin(login, password)
		.openEmail(mailTitle)
		.openAddIn(addInName)
		.waitSearchByEmails(60000)
}
