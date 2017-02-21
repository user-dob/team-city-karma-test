var Framework = require('../FrontendTestFramework/main')
var config = require('./config')

global.framework = new Framework(config)
global.mode = framework.mode

module.exports = framework.getNightWatchConfig()
