"use strict";

module.exports =
  (strapi) =>
  ({ nexus }) => ({
    typeDefs: `
        type RandomArticleResponse {
            data: [ArticleEntity]!
        }

        extend type Query {
            randomArticle(limit: Int, exclude: ID): RandomArticleResponse
        }
    `,
    resolvers: {
      Query: {
        randomArticle: {
          resolve: async (parent, args, context) => {
            const DEFAULT_LIMIT = 3;
            const limit = args.limit || DEFAULT_LIMIT;
            const excludedIds = args.exclude ? [args.exclude] : [];

            const ids = (
              await strapi.db.connection
                .select("id")
                .from("articles")
                .whereNotIn("id", excludedIds)
                .orderByRaw("RANDOM()")
                .limit(limit)
            ).map((it) => it.id);

            console.log(limit, excludedIds);
            console.log(ids);

            const data = await strapi.entityService.findMany(
              "api::article.article",
              {
                filters: {
                  id: {
                    $in: ids,
                  },
                },
              }
            );

            return { data };
          },
        },
      },
    },
  });
