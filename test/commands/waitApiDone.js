exports.command = function waitApiDone(url, milliseconds) {

	var client = this

	client.executeAsync(function (url, milliseconds, done) {

		var sfMailApp = window.sfMailApp

		if(sfMailApp && sfMailApp.seleniumManager) {

			var timeout = setTimeout(function () {
				done(false)
			}, milliseconds)

			sfMailApp.seleniumManager.on('api', function (data) {
				if(data.url === url) {
					clearTimeout(timeout)
					done(true)
				}
			})

		} else {
			// TODO
			done(false)
		}

	}, [url, milliseconds], function (result) {
		client.assert.equal(result.value, true, 'url message')
	})

	return client
}

