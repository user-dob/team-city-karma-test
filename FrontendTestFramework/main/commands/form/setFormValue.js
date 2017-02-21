exports.command = function setFormValue(formSelector, fieldName, value) {

	var selector = formSelector + ' [data-name="'+fieldName+'"]'

	return this
		.clearValue(selector)
		.setValue(selector, value)
}
