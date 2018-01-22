'use strict';

var winston = require('winston');
require('winston-loggly-bulk');

const tsFormat = () => (new Date()).toLocaleTimeString();

// Initialize winston library
winston.loggers.add('development', {
	console: {
		level: 'debug',
		colorize: 'true',
		label: 'development',
		timestamp: tsFormat
	},
	file: {
		filename: './app.log',
		level: 'silly',
		timestamp: tsFormat
	},
	Loggly: {
		token: "a257e4b8-8e8f-4404-8a8b-39930e3bb736",
		subdomain: "natanaeladit",
		level: 'verbose',
		timestamp: tsFormat
	}
});
var winston_dev = winston.loggers.get('development');

module.exports = winston_dev;