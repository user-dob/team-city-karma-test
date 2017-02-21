exports.command = function openEvent(title) {

	var client = this
	var owa = client.page.owa();

	owa
		.waitAndClick('@CalendarButton')
		.waitForElementVisible('@SearchCalendarInput', 10000)
		.click('@SearchCalendarInput')
		.setValue('@SearchCalendarInput', title)
		.waitAndClick('@RunSearchButton')
		.waitAndClick('div[aria-label="'+title+'"]')

	return client
}

