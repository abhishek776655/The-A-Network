const { ApolloServer } = require("apollo-server");
import { getUser } from "./services/authorization";
import resolvers from "./resolver";
import typedefs from "./typedefs";
import prismaInit from "./services/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});
prismaInit(prisma);
const server = new ApolloServer({
  resolvers: resolvers,
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

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
