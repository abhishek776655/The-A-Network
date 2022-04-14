import { PrismaClient } from "@prisma/client";
const { ApolloServer } = require("apollo-server");
import { getUser } from "./services/authorization";
import resolvers from "./resolver";
import typedefs from "./typedefs";

const prisma = new PrismaClient();
const server = new ApolloServer({
  resolver: resolvers,
  typeDefs: typedefs,
  context: async ({ req }) => {
    const token = req.headers.authorization || "";
    const user = await getUser(token);
    return {
      user: user,
      prisma: prisma,
    };
  },
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
