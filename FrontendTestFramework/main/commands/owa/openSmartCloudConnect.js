var Mode = require('../../mode')

exports.command = function openSmartCloudConnect(options, modeName, done) {

	var client = this

	var owaOptions = client.globals.config.owa
	var addinOptions = client.globals.config.addin

	var options = options || {}
	var login = options.login || owaOptions.login
	var password = options.password || owaOptions.password
	var addInName = options.addInName || addinOptions.name

	modeName = modeName || Mode.EMAIL_READ_MODE

	if(modeName === Mode.EMAIL_READ_MODE) {
		var title = options.title || owaOptions.defaultEmail
		return openEmailReadMode.call(this, login, password, title, addInName, done)
	}

	if(modeName === Mode.EMAIL_COMPOSE_MODE) {
		var title = options.title || owaOptions.defaultEmail
		return openEmailComposeMode.call(this, login, password, title, addInName, done)
	}

	if(modeName === Mode.EVENT_READ_MODE) {
		var title = options.title || owaOptions.defaultEvent
		return openEventReadMode.call(this, login, password, title, addInName, done)
	}

	if(modeName === Mode.EVENT_COMPOSE_MODE) {
		var title = options.title || owaOptions.defaultEvent
		return openEventComposeMode.call(this, login, password, title, addInName, done)
	}

	return this
}

function openEmailReadMode(login, password, title, addInName, done) {
	return this
		.owaLogin(login, password)
		.openEmail(title)
		.waitForElementVisible('.disableTextSelection[aria-label="Message header"]', 10000)
		.pause(1000)
		.execute(function () {
			// TODO not 100% logic
			jQuery('.disableTextSelection[aria-label="Message header"] button[title="Reply all"]:visible').parents('.disableTextSelection:first').click()
		}, [])
		.openAddIn(addInName)
		.waitForRequestCompleted(180000, done)
}

function openEmailComposeMode(login, password, title, addInName, done) {
	return this
		.owaLogin(login, password)
		.openEmail(title)
		.checkDraft()
		.waitForElementVisible('button.o365button[aria-label="Send"]', 10000)
		.openAddIn(addInName)
		.waitForRequestCompleted(180000, done)
}

function openEventReadMode(login, password, title, addInName, done) {
	return this
		.owaLogin(login, password)
		.openEvent(title)
		.openAddIn(addInName)
		.waitForRequestCompleted(180000, done)
}

function openEventComposeMode(login, password, title, addInName, done) {
	return this
		.owaLogin(login, password)
		.openEvent(title)
		.waitAndClick('button[aria-label="Edit"]')
		.waitForElementVisible('input[aria-label="Add a title for the event"]', 5000)
		.openAddIn(addInName)
		.waitForRequestCompleted(180000, done)
}
