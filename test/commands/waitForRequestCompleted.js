var util = require('util'),
	events = require('events');

var CommandAction = function() {
	events.EventEmitter.call(this);
	this.startTimer = null;
	this.ms = null;
	this.secondTest = false
	this.protocol = require('nightwatch/lib/api/protocol.js')(this.client);
};

util.inherits(CommandAction, events.EventEmitter);

CommandAction.prototype.command = function(milliseconds) {
	this.startTimer = Date.now();
	this.ms = milliseconds || 10000;
	this.check();
	return this;
};

CommandAction.prototype.check = function(time) {
	var self = this;

	time = time || 300

	function condition() {
		return sfMailApp.seleniumManager.isRequestPending()
	}

	this.protocol.execute.call(this.client, condition, function(result) {
		var now = Date.now()

		var isRequestPending = result.value === true
		var isRequestCompleted = !isRequestPending

		if(now - self.startTimer > self.ms) {
			var msg = 'Timed out while waiting for condition after ' + self.ms + ' milliseconds.';
			self.client.assertion(false, false, false, msg, true);
			return self.emit('complete');
		}

		if(isRequestPending) {
			self.secondTest = false
			setTimeout(function () {
				self.check()
			}, time)
		}

		if(isRequestCompleted) {
			if(self.secondTest) {
				var msg = 'Condition was satisfied after ' + (now - self.startTimer) + ' milliseconds.';
				self.client.assertion(true, true, false, msg, true);
				return self.emit('complete');
			} else {
				self.secondTest = true
				self.check(500)
			}
		}
	});
};

module.exports = CommandAction;
