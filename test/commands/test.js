exports.command = function test() {

	var client = this

	client.execute(function(greet){

		jQuery('.app_create_options').val('Account').trigger('change.select2')

		sfMailApp.createRecordManager.showDialog('Account')

	}, ["Hello"], function(result){
		return true
	});

	return client
}
