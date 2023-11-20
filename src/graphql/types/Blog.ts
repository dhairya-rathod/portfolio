import { extendType, intArg, nonNull, objectType, stringArg } from "nexus";

import { User } from "@/graphql/types";

interface BlogWithPaginationArgs {
  cursor: string;
  take: number;
  // skip: number;
}

export const Blog = objectType({
  name: "Blog",
  definition(t) {
    t.id("id");
    t.string("title");
    t.string("slug");
    t.string("content");
    t.string("tags");
    t.boolean("active");
    t.string("created_at");
    t.string("updated_at");
    t.field("created_by", { type: User });
    t.list.field("images", {
      type: BlogImages,
      resolve(parent: any, _args: unknown, ctx: any) {
        return ctx.prisma.BlogImage.findMany({
          where: {
            id: parent.id,
          },
        });
      },
    });
  },
});

const PageInfo = objectType({
  name: "PageInfo",
  definition(t) {
    t.string("endCursor");
    t.boolean("hasNextPage");
  },
});

const BlogEdge = objectType({
  name: "BlogEdge",
  definition(t) {
    t.field("node", { type: Blog });
  },
});

const BlogsWithPagination = objectType({
  name: "BlogsWithPagination",
  definition(t) {
    t.field("pageInfo", { type: PageInfo });
    t.list.field("edges", { type: BlogEdge });
  },
});

const BlogImages = objectType({
  name: "BlogImages",
  definition(t) {
    t.id("id");
    t.string("url");
  },
});

export const BlogQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("blogs", {
      type: Blog,
      resolve(_parent: unknown, _args: unknown, ctx: any) {
        return ctx.prisma.blog.findMany();
      },
    });
  },
});

export const BlogsPaginationQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("blogsWithPagination", {
      type: BlogsWithPagination,
      args: { cursor: stringArg(), take: intArg(), skip: intArg() },
      // TODO: fix error
      async resolve(_parent: unknown, _args: BlogWithPaginationArgs, ctx: any) {
        const result = await ctx.prisma.blog.findMany({
          take: _args.take ?? 10,
          ...(_args.cursor && {
            skip: 1, // Do not include the cursor itself in the query result.
            cursor: {
              id: _args.cursor,
            },
          }),
        });

        if (result.length == 0) {
          return {
            pageInfo: {
              lastCursor: "",
              hasNextPage: false,
            },
            edges: [{ node: {} }],
          };
        }

        const lastBlogInResults: any = result[result.length - 1];
        const cursor: string = lastBlogInResults.id;

        const nextPage = await ctx.prisma.blog.findMany({
          // Same as before, limit the number of events returned by this query.
          take: _args.take ?? 10,
          skip: 1, // Do not include the cursor itself in the query result.
          cursor: {
            id: cursor,
          },
        });

        const edges = result.map((blog: any) => ({
          node: blog,
        }));

        return {
          pageInfo: {
            endCursor: cursor,
            hasNextPage: nextPage.length > 0,
          },
          edges: edges,
        };

        // return ctx.prisma.blog.findMany({
        //   take: _args.take ?? 10,
        //   skip: _args.skip ?? 0,
        //   cursor: {
        //     id: _args.cursor ?? 1,
        //   },
        // });
      },
    });
  },
});

export const BlogByIdQuery = extendType({
  type: "Query",
  definition: (t) => {
    t.field("blogById", {
      type: Blog,
      args: { id: nonNull(stringArg()) },
      resolve(_parent: unknown, args: { id: string }, ctx: any) {
        return ctx.prisma.blog.findUnique({
          where: {
            id: args.id,
          },
        });
      },
    });
  },
});
