"use strict";

/**
 *  article controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::article.article", ({ strapi }) => ({
  random: async (ctx) => {
    const query = ctx.request.query;
    const DEFAULT_LIMIT = 3;
    const limit = query.limit || DEFAULT_LIMIT;
    const excludedIds = query.exclude ? [query.exclude] : [];

    const result = await strapi.db.connection
      .select("*")
      .from("articles")
      .whereNotIn("id", excludedIds)
      .orderByRaw("RANDOM()")
      .limit(limit);

    return result;
  },
}));
