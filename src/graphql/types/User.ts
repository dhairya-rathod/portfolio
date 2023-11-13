import { enumType, extendType, objectType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.id("id");
    t.string("first_name");
    t.string("last_name");
    t.string("email");
    t.field("role", { type: Role });
    t.boolean("active");
    t.boolean("deleted");
    t.string("created_at");
  },
});

export const UserQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("users", {
      type: "User",
      resolve(_parent: unknown, _args: unknown, ctx: any) {
        return ctx.prisma.user.findMany();
      },
    });
  },
});

const Role = enumType({
  name: "Role",
  members: ["USER", "ADMIN"],
});
