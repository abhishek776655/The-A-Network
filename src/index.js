import { PrismaClient } from "@prisma/client";
const { ApolloServer } = require("apollo-server");
import { getUser } from "./services/authorization";
import resolvers from "./resolver";
import typedefs from "./typedefs";

const prisma = new PrismaClient();
const server = new ApolloServer({
  resolvers: resolvers,
  typeDefs: typedefs,
  context: async ({ req }) => {
    const token = req.headers.authorization || "";
    console.log(token);
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
