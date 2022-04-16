import { userInputToUser, userToUserResponse } from "./user.dto";
import bcrypt from "bcrypt";
import jwt, { TokenExpiredError } from "jsonwebtoken";
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
      const doesEmailExist = await prisma.user.findUnique({
        where: {
          email: args.input.email,
        },
      });

      const doesUsernameExist = await prisma.user.findUnique({
        where: {
          username: args.input.username,
        },
      });
      const validationErrors = {};
      if (doesUsernameExist) {
        validationErrors.username = "Username already exist";
      }
      if (doesEmailExist) {
        validationErrors.email = "Email already exist";
      }
      if (Object.keys(validationErrors).length > 0) {
        throw new UserInputError(
          "Failed to register due to validation errors",
          { validationErrors }
        );
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

      console.log(user);

      const validationErrors = {};
      if (!user) {
        validationErrors.email = "No such user found";
      }
      const valid = await bcrypt.compare(args.password, user.password);
      if (!valid) {
        validationErrors.password = "Password is incorrect";
      }
      if (Object.keys(validationErrors).length > 0) {
        throw new UserInputError(
          "Failed to register due to validation errors",
          { validationErrors }
        );
      }
      console.log(process.env.AUTH_SECRET_KEY);
      var accessToken = jwt.sign(
        { userId: user.id },
        process.env.AUTH_SECRET_KEY,
        {
          expiresIn: 3600,
        }
      );
      const refreshToken = jwt.sign(
        { userId: user.id },
        process.env.AUTH_SECRET_KEY,
        {
          expiresIn: 86400,
        }
      );

      const updatedUser = await context.prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          refreshToken: refreshToken,
        },
      });
      return {
        accessToken: accessToken,
        user: user,
        refreshToken: refreshToken,
      };
    },

    getAcessToken: async (parent, args, context, info) => {
      let refreshToken = args.refreshToken;
      try {
        let refreshTokenPayload = jwt.verify(
          refreshToken,
          process.env.AUTH_SECRET_KEY
        );
        const user = await context.prisma.user.findFirst({
          where: { refreshToken: { equals: refreshToken } },
        });
        if (!user || user.id !== refreshTokenPayload.userId) {
          throw new AuthenticationError("Bad Token");
        }
        var newAccessToken = jwt.sign(
          { userId: user.id },
          process.env.AUTH_SECRET_KEY,
          {
            expiresIn: 3600,
          }
        );
        return newAccessToken;
      } catch (TokenExpiredError) {
        throw new AuthenticationError(TokenExpiredError.message);
      }
    },
  },
};
