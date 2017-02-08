exports.command = function waitSearchByEmails(time) {

	return this
		.waitForElementVisible('.all_cards_opened', time)
}

