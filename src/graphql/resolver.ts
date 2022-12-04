import { Context } from "@/graphql/context";

export const resolvers = {
  Query: {
    messages: (_parent: unknown, _args: unknown, ctx: Context) => {
      return ctx.prisma.messages.findMany();
    },
    users: (_parent: unknown, _args: unknown, ctx: Context) => {
      return ctx.prisma.user.findMany();
    },
  },
};
