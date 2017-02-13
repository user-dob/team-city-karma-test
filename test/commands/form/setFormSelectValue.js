exports.command = function setFormSelectValue(formSelector, fieldName, value) {

	var client = this

	client.execute(function (formSelector, fieldName, value, done) {

		jQuery(formSelector + ' select[data-name="'+fieldName+'"]').val(value).trigger('change');

		done()

	}, [formSelector, fieldName, value], function (result) {
		return true
	})

	return client
}
