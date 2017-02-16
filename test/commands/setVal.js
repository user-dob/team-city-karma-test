
exports.command = function setVal(selector, value) {

	var client = this
	
	client.execute(function (selector, value) {

		jQuery(selector).val(value)

	}, [selector, value], function () {
		
	})

	return client

}


