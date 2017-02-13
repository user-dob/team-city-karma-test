var request = require('request');

exports.command = function removeLastCreateObject(cb) {

	var client = this

	client.execute(function () {
		return sfMailApp.seleniumManager.getLastCreateObjectData()
	}, [], function (result) {
		var data = result.value

		if(data.lastCreateObject) {

			var options = {
				url: 'https://localhost:44305/Delete/Deleter',
				method: 'DELETE',
				headers: {
					'X-Identity-Token': data.identityToken,
					'Content-Type': 'application/json;charset=UTF-8'
				},
				strictSSL: false,
				qs: {
					id: data.lastCreateObject.id,
					type: data.lastCreateObject.type
				}
			};

			request(options, function(error, response, body) {

				if(error) {
					var msg = 'delete object id="'+data.lastCreateObject.id+'" type="'+data.lastCreateObject.type+'" fail'
					console.log(msg)
					return
				}

				cb()
			})

			return
		}

		var msg = 'lastCreateObject not faund'
		console.log(msg)

		//client.assert.equal(true, false, msg)
		//client.assertion(false, false, false, msg, true);
		cb()

	})

	return client

}


