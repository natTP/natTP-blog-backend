// FIXME always 404 on this route
// TODO gatsby compatible
module.exports = {
  routes: [
    {
      method: "GET",
      path: "articles/random",
      handler: "article.random",
      config: {
        auth: {
          scope: ["find"],
        },
      },
    },
  ],
};
