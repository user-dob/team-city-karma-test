var request = require('request');

var id = '0010Y00000E5PTIQA3'
var type = 'Account'
var identityToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImVuaDlCSnJWUFU1aWpWMXFqWmpWLWZMMmJjbyJ9.eyJhcHBjdHhzZW5kZXIiOiIwMDAwMDAwMi0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDBAMjhhNDI1ZjUtZWZjMS00OTQ1LWFlYzMtZmIyYzU2OWQwMDU1IiwiaXNicm93c2VyaG9zdGVkYXBwIjoiVHJ1ZSIsImFwcGN0eCI6IntcIm1zZXhjaHVpZFwiOlwiN2I3ZTcyMWEtMGRkYi00ODRmLWEwZWYtM2IwNTc2ZWZmZTVhXCIsXCJ2ZXJzaW9uXCI6XCJFeElkVG9rLlYxXCIsXCJhbXVybFwiOlwiaHR0cHM6Ly9vdXRsb29rLm9mZmljZTM2NS5jb206NDQzL2F1dG9kaXNjb3Zlci9tZXRhZGF0YS9qc29uLzFcIn0iLCJpc3MiOiIwMDAwMDAwMi0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDBAMjhhNDI1ZjUtZWZjMS00OTQ1LWFlYzMtZmIyYzU2OWQwMDU1IiwiYXVkIjoiaHR0cHM6Ly9sb2NhbGhvc3Q6NDQzMDUvbWFpbi5odG1sIiwiZXhwIjoxNDg3MDA0ODE5LCJuYmYiOjE0ODY5NzYwMTl9.GgTD2DW4CIlGZJdYpMV1fKgOOCfn_pY5BHrdCCfpQ6zKgc5HRD5BK0WkLXr4LP3or218ypxnQr5WMTPHSWu1FLRB-l0uvYIaF3xDzGAd_qy_TnilNqKY7Qm4L3vjJz6oN0e4YVrV5IJImK62Kn6fD3VMWl49SM3zRY0EiWWbMPsvuZm7o10n5-IlXgoZMsjMlM1sFPtk9JYTEtBqOsLmH5oO40Xo16Y70Siu7Y2aF0pxinCod_zLfk2VtEcVaRKcq6YUuF8YnuDpOS8RYUE4g49K4SW_b7aDI3GBHNqYrxzuYc4nQrN-kc9Qn8TLI3p56oNoc45JEPoP2xM2umFm4Q'

var options = {
	url: 'https://localhost:44305/Delete/Deleter',
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

request(options, function(error, response, body) {

	console.log(error)

	if(response) {
		console.log(response.statusCode)
		console.log(response)
	}

})

