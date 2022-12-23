"use strict";

/**
 *  article controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::article.article", ({ strapi }) => ({
  random: async (ctx) => {
    return { message: "hello" };
    // const result = await strapi
    //   .query("article")
    //   .model.query((qb) => {
    //     qb.orderByRaw("RANDOM()");
    //   })
    //   .fetchAll();

    // return result.toJSON();
  },
}));
