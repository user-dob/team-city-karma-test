var request = require('request');

function removeObject(url, identityToken, id, type) {
	var options = {
		url: url,
		method: 'DELETE',
		headers: {
			'X-Identity-Token': identityToken,
			'Content-Type': 'application/json;charset=UTF-8'
		},
		strictSSL: false,
		qs: {
			id: id,
			type: type
		}
	};

	return request(options, function(error, response, body) {

		if(error) {
			var msg = 'delete object id="'+id+'" type="'+type+'" fail'
			console.log(msg)
		}
	})
}

exports.command = function removeNewObjects() {

	var client = this
	var apiUrl = client.globals.addin.api

	client.execute(function () {
		return sfMailApp.seleniumManager.getNewObjects()
	}, [], function (result) {
		var data = result.value

		if(!data.identityToken) {
			throw new Error('identityToken no found');
		}

		removeObject = removeObject.bind(removeObject, apiUrl + '/Delete/Deleter', data.identityToken)

		if(Array.isArray(data.newObjects)) {

			data.newObjects.forEach(function (newObject) {
				removeObject(newObject.id, newObject.type)
			})
		}
	})

	return client
}


