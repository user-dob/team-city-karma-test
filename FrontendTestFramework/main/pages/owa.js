module.exports = {
	url: 'https://outlook.office.com/owa/',
	elements: {
		LoginInput: {
			selector: '#cred_userid_inputtext'
		},
		PasswordInput: {
			selector: '#cred_password_inputtext'
		},
		SearchButton: {
			selector: 'button[aria-label="Activate Search Textbox"]'
		},
		SearchInput: {
			selector: 'input[aria-label="Search mail and people, type your search term then press enter to search."'
		},
		CalendarButton: {
			selector: 'button[aria-label="Go to Calendar"'
		},
		SearchCalendarInput: {
			selector: 'input[aria-label="Search calendar text box. Type your query, then press Enter"'
		},
		RunSearchButton: {
			selector: 'button[aria-label="Run search"]'
		}
	},
	commands: [
		{
			execute: function (body, args, callback) {
				this.api.execute(body, args, callback)
				return this
			}
		},
		{
			pause: function (time) {
				this.api.pause(time)
				return this
			}
		}
	]
}
