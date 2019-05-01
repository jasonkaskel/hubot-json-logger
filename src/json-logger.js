const JSONLog = require('node-json-logger')

// Description
//   hubot script for using a JSON logger
//
// Author
//   Jason Kaskel <jason.kaskel@gmail.com>

module.exports = function (robot) {
    robot.logger = new JSONLog({ level: process.env.HUBOT_LOG_LEVEL || 'info' })
}
