exports.command = function setDateTimeValue(selector, value) {

	var client = this

	client.execute(function(selector, value){

		value = value || new Date()

		jQuery(selector).parent().find('.input-group-addon').click()

		//jQuery('#create_record_modal input[data-name="SLAExpirationDate__c"]').parent().data("DateTimePicker").date(new Date())

		return true

	}, [selector, value], function(result){
		return true
	});

	return client
}

