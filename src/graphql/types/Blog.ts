import { extendType, nonNull, objectType, stringArg } from "nexus";

import { User } from "@/graphql/types";

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

export const BlogQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("blogs", {
      type: "Blog",
      resolve(_parent: unknown, _args: unknown, ctx: any) {
        return ctx.prisma.blog.findMany();
      },
    });
  },
});

export const BlogByIdQuery = extendType({
  type: "Query",
  definition: (t) => {
    t.field("blogById", {
      type: "Blog",
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
