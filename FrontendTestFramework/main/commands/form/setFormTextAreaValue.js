exports.command = function setFormTextAreaValue(formSelector, fieldName, value) {

	var client = this
	var selector = formSelector + ' [data-name="'+fieldName+'"]'

	client
		.assert.visible(selector)
		.execute(function (formSelector, fieldName, value, done) {

			var selector = formSelector + ' [data-name="'+fieldName+'"]'

			jQuery(selector).val(value).trigger('change')

			done()

		}, [formSelector, fieldName, value], function (result) {
			return true
		})

	return client
}


