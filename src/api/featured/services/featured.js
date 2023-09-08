'use strict';

/**
 * featured service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::featured.featured');
