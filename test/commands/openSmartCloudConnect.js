var config = require('../config.json')
var owa = config.owa
var addin = config.addin

exports.command = function openSmartCloudConnect(options) {

	var options = options || {}
	var login = options.login || owa.login
	var password = options.password || owa.password
	var mailTitle = options.mailTitle || owa.mail
	var addInName = options.addInName || addin.name

	return this
		.owaLogin(login, password)
		.openEmail(mailTitle)
		.openAddIn(addInName)
		//.waitForRequestCompleted(180000)
}
