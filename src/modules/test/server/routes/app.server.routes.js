'use strict';

module.exports = function (application) {

  var test = require('../controllers/test.server.controller');

  application.route('/test').get(test.getTestInfo);
};
