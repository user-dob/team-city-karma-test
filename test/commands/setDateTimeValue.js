exports.command = function setDateTimeValue(selector, value) {

	var client = this

	client.execute(function(selector, value){

		//jQuery(selector).parent().data("DateTimePicker").date(new Date())

		//jQuery('#datetimepicker1').focus()
		//jQuery('#datetimepicker1').click('#datetimepicker1 .input-group-addon')

		jQuery('#datetimepicker1').data("DateTimePicker").date(new Date(2000))

		//jQuery('#datetimepicker1 input').val(100)


		return true

	}, [selector, value], function(result){
		return true
	});

	return client
}

