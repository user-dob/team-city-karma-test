exports.command = function setFormCheckBoxValue(formSelector, fieldName, value) {

	var client = this
	var selector = formSelector + ' [data-name="'+fieldName+'"]'

	client
		.assert.visible(selector)
		.execute(function (formSelector, fieldName, value, done) {

			var selector = formSelector + ' [data-name="'+fieldName+'"]'

			var el = jQuery(selector)
			var currentValue = el.is(':checked')

			if(currentValue !== value) {
				el.next().click()
			}

			done()

		}, [formSelector, fieldName, value], function (result) {
			return true
		})

	return client
}


