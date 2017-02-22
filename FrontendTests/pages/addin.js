module.exports = {
	elements: {
		SearchInput: {
			selector: '.app_search_controls .app_search_input'
		},
		SearchButton: {
			selector: '.app_search_controls .fa-search'
		},
		CreateBlock: {
			selector: '.create_block_overlay'
		},
		CreateRecordModal: {
			selector: '#create_record_modal'
		}
	},
	commands: [
		{
			openCreateRecordModal: framework.getCommand('openCreateRecordModal')
		},
		{
			search: framework.getCommand('search')
		},
		{
			pause: function (time) {
				this.api.pause(time)
				return this
			}
		},
		{
			end: function () {
				this.api
					.execute(function () {
						window.close()
					}, [])
					.end()
				return this
			}
		}
	]
}
