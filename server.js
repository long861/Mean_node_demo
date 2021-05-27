'use strict';

/**
 * Module dependencies.
 */
var app = require('./config/lib/app');
global.APP_ROOT = __dirname;
var server = app.start();
