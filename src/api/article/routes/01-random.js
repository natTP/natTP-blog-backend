// TODO graphql compatible
module.exports = {
  routes: [
    {
      method: "GET",
      path: "/articles/random",
      handler: "article.random",
    },
  ],
};
