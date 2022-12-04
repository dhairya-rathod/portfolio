import { extendType, objectType } from "nexus";

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
    t.nonNull.list.field("messages", {
      type: "Message",
      resolve(_parent: unknown, _args: unknown, ctx: any) {
        return ctx.prisma.messages.findMany();
      },
    });
  },
});
