exports.command = function setFormValue(formSelector, fieldName, value) {
	return this
		.setValue(formSelector + ' [data-name="'+fieldName+'"]', value)
}
