import { extendType, intArg, objectType, stringArg } from "nexus";

import { Context } from "@/graphql/context";

export const Message = objectType({
  name: "Message",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("email");
    t.string("message");
    t.string("created_at");
  },
});

export const MessagesQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("messages", {
      type: "Response",
      args: {
        first: intArg(),
        after: stringArg(),
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      async resolve(
        _,
        { first, after }: { first: number; after: string },
        { prisma }: Context,
      ) {
        let queryResult = null;

        if (after) {
          queryResult = await prisma.messages.findMany({
            take: first,
            skip: 1,
            cursor: {
              id: after,
            },
            orderBy: {
              id: "desc",
            },
          });
        } else {
          queryResult = await prisma.messages.findMany({
            take: first,
            orderBy: {
              id: "desc",
            },
          });
        }

        if (queryResult.length > 0) {
          const lastResult = queryResult[queryResult.length - 1];
          const cursor = lastResult.id;

          const messages = await prisma.messages.findMany({
            take: first,
            cursor: {
              id: cursor,
            },
            orderBy: {
              id: "desc",
            },
          });

          const result = {
            pageInfo: {
              endCursor: cursor,
              hasNextPage: messages.length >= first,
            },
            edges: queryResult.map((message) => ({
              cursor: message.id,
              node: message,
            })),
          };

          return result;
        }

        return {
          pageInfo: {
            endCursor: null,
            hasNextPage: false,
          },
          edges: [],
        };
      },
    });
  },
});

export const Edge = objectType({
  name: "Edge",
  definition(t) {
    t.string("cursor");
    t.field("node", {
      type: Message,
    });
  },
});

export const PageInfo = objectType({
  name: "PageInfo",
  definition(t) {
    t.string("endCursor");
    t.boolean("hasNextPage");
  },
});

export const Response = objectType({
  name: "Response",
  definition(t) {
    t.field("pageInfo", { type: PageInfo });
    t.list.field("edges", {
      type: Edge,
    });
  },
});
