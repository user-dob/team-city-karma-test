exports.command = function openCreateRecordModalCommon(name) {
	return this
		.waitAndClick('@CreateBlock')
		.waitAndClick('.select2_opt_text[data-name="'+name+'"]')
		.waitForElementVisible('@CreateRecordModal', 10000)
}
