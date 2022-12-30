"use strict";

const article = require("./api/article/graphql");

const extensions = [article];

module.exports = (strapi) => {
  const extensionService = strapi.plugin("graphql").service("extension");

  for (const extension of extensions) {
    extensionService.use(extension(strapi));
  }
};
