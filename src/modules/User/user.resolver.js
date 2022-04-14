import { userInputToUser, userToUserResponse } from "./user.dto";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AuthenticationError, UserInputError } from "apollo-server";
import requiresAuth from "../../services/permission";
export default {
  Query: {
    getUsers: requiresAuth.createResolver(
      async (parent, args, context, info) => {
        return await context.prisma.user.findMany();
      }
    ),
  },
  Mutation: {
    register: async (parent, args, { prisma }, info) => {
      const doesUserExist = prisma.user.findUnique({
        where: {
          email: args.input.email,
        },
      });
      if (doesUserExist) {
        throw new UserInputError("Email already exist");
      }
      const hashedPassword = await bcrypt.hash(args.input.password, 12);
      const data = userInputToUser(args, hashedPassword);
      const user = await prisma.user.create({ data: data });
      const ReponseUser = user;
      return ReponseUser;
    },
    login: async (parent, args, context, info) => {
      const user = await context.prisma.user.findFirst({
        where: {
          email: {
            equals: args.email,
          },
        },
      });

      if (!user) {
        throw new Error("No such user found");
      }

      const valid = await bcrypt.compare(args.password, user.password);
      if (!valid) {
        throw new Error("Invalid password");
      }
      const privateKey = "fjkdsjfklsdjkfjskd";
      var token = jwt.sign({ userId: user.id }, privateKey);
      return {
        token: token,
        user: user,
      };
    },
  },
};
