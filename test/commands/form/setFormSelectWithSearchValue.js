exports.command = function setFormSelectWithSearchValue(formSelector, fieldName, value) {

	var client = this

	var selector = formSelector + ' select[data-name="'+fieldName+'"]+span'
	var searchFieldSelector = formSelector +' .select2-container--open .select2-search__field'
	var searchResultSelector = formSelector +' .select2-container--open .select2-results ul>li[title="'+value+'"]'

	client
		.click(selector)
		.waitForElementVisible(searchFieldSelector, 1000)
		.setValue(searchFieldSelector, value)
		.waitForElementVisible(searchResultSelector, 10000)
		.click(searchResultSelector)

	return client
}

