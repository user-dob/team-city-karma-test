exports.command = function waitApiDone(url, milliseconds) {

	var client = this
	var SF_MAIL_APP_NOT_INIT = 'SF_MAIL_APP_NOT_INIT'
	var URL_TIMEOUT = 'URL_TIMEOUT'

	client.executeAsync(function (url, milliseconds, done) {

		var sfMailApp = window.sfMailApp

		if(sfMailApp && sfMailApp.seleniumManager) {

			var timeout = setTimeout(function () {
				clearTimeout(timeout)
				done(URL_TIMEOUT)
			}, milliseconds)

			sfMailApp.seleniumManager.on('api', function (data) {
				if(data.url === url) {
					clearTimeout(timeout)
					done(true)
				}
			})

		} else {
			done(SF_MAIL_APP_NOT_INIT)
		}

	}, [url, milliseconds], function (result) {

		if(result.value === URL_TIMEOUT) {
			client.assert.equal(null, true, 'url "'+url+'" timeout')
		}

		if(result.value === SF_MAIL_APP_NOT_INIT) {
			client.assert.equal(null, true, 'sfMailApp not init')
		}

	})

	return client
}

