var util = require('util'),
	events = require('events');

var CommandAction = function() {
	events.EventEmitter.call(this);
	this.protocol = require('nightwatch/lib/api/protocol.js')(this.client);
};

util.inherits(CommandAction, events.EventEmitter);

CommandAction.prototype.command = function() {
	var self = this
	setTimeout(function () {
		self.check();
	}, 1000)
	return this;
};

CommandAction.prototype.check = function() {
	var self = this;

	function condition(done) {

		var editButton = jQuery('button[title="Continue editing"]:visible:first-child')

		if(editButton.length) {
			editButton.click()
		} else {
			jQuery('button[title="Reply all"]:visible').click()
		}

		done()
	}

	this.protocol.executeAsync.call(this.client, condition, function(result) {
		return self.emit('complete');
	});
};

module.exports = CommandAction;
