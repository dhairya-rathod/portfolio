import { extendType, intArg, nonNull, objectType, stringArg } from "nexus";

import { User } from "@/graphql/types";

interface BlogWithInfinitePaginationArgs {
  cursor?: string | null | undefined;
  take?: number | null | undefined;
}

interface BlogWithNumberPaginationArgs {
  page: number;
  take: number;
}

//* return object types
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

const BlogImages = objectType({
  name: "BlogImages",
  definition(t) {
    t.id("id");
    t.string("url");
  },
});

const BlogsWithInfinitePagination = objectType({
  name: "BlogsWithInfinitePagination",
  definition(t) {
    t.field("pageInfo", {
      type: objectType({
        name: "BlogsPageInfoInfinite",
        definition(t) {
          t.string("endCursor");
          t.boolean("hasNextPage");
        },
      }),
    });
    t.list.field("records", { type: Blog });
  },
});

const BlogsWithNumberPagination = objectType({
  name: "BlogsWithNumberPagination",
  definition(t) {
    t.field("pageInfo", {
      type: objectType({
        name: "BlogsPageInfoNumber",
        definition(t) {
          t.int("totalRecords");
        },
      }),
    });
    t.list.field("records", { type: Blog });
  },
});

//* return query data
export const BlogQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("blogs", {
      type: Blog,
      resolve(_: unknown, _args: unknown, ctx: any) {
        return ctx.prisma.blog.findMany();
      },
    });
  },
});

export const BlogsWithInfinitePaginationQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("blogsWithInfinitePagination", {
      type: BlogsWithInfinitePagination,
      args: { cursor: stringArg(), take: nonNull(intArg()) },
      async resolve(
        _: unknown,
        args: BlogWithInfinitePaginationArgs,
        ctx: any,
      ) {
        const result = await ctx.prisma.blog.findMany({
          take: args.take ?? 10,
          ...(args.cursor && {
            skip: 1, // Do not include the cursor itself in the query result.
            cursor: {
              id: args.cursor,
            },
          }),
          orderBy: {
            created_at: "desc",
          },
        });

        if (result.length == 0) {
          return {
            pageInfo: {
              lastCursor: "",
              hasNextPage: false,
            },
            records: [],
          };
        }

        const lastBlogInResults: any = result[result.length - 1];
        const cursor: string = lastBlogInResults.id;

        const nextPage = await ctx.prisma.blog.findMany({
          // Same as before, limit the number of events returned by this query.
          take: args.take ?? 10,
          skip: 1, // Do not include the cursor itself in the query result.
          cursor: {
            id: cursor,
          },
          orderBy: {
            created_at: "desc",
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
      },
    });
  },
});

export const BlogsWithNumberPaginationQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.field("blogsWithNumberPaginationQuery", {
      type: BlogsWithNumberPagination,
      args: { page: nonNull(intArg()), take: nonNull(intArg()) },
      async resolve(_: unknown, args: BlogWithNumberPaginationArgs, ctx: any) {
        const records = await ctx.prisma.blog.findMany({
          skip: (args.page - 1) * args.take,
          take: args.take,
          orderBy: {
            created_at: "desc",
          },
        });

        if (records.length === 0) {
          return {
            pageInfo: {
              totalRecords: 0,
            },
            records: [],
          };
        }

        const totalRecords = await ctx.prisma.blog.count();
        return {
          pageInfo: {
            totalRecords: totalRecords,
          },
          records,
        };
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
      resolve(_: unknown, args: { id: string }, ctx: any) {
        return ctx.prisma.blog.findUnique({
          where: {
            id: args.id,
          },
        });
      },
    });
  },
});
