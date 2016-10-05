'use strict';

/**
 * Module dependencies
 */
var organizationLevelPolicy = require('../policies/organizationLevels.policy'),
  organizationLevelController = require('../controllers/organizationLevels.controller');

module.exports = function (app) {
  // Articles collection routes

  // Single article routes
  app.route('/v1/orglevels/').all(organizationLevelPolicy.isAllowed)
    .get(organizationLevelController.read)

};
