import { storyInputToStory, storyToStoryResponse } from "./story.dto";

export default {
  Mutation: {
    createStory: async (parent, args, context, info) => {
      if (!context.user) {
        throw new AuthenticationError("you must be logged in");
      }
      console.log(context.user.userId);
      const story = await context.prisma.story.create({
        data: storyInputToStory(args, context.user.userId),
        include: {
          author: true,
        },
      });
      console.log(story);
      return story;
    },
  },
  Query: {
    getStoriesByTag: async (parent, args, context, info) => {
      const stories = await context.prisma.story.findMany({
        where: {
          tags: {
            some: {
              id: {
                in: args.input.tags,
              },
            },
          },
        },
        skip: args.input.page,
        take: args.input.pageSize,
        orderBy: {
          createdAt: "asc",
        },
      });

      console.log(stories);
      return stories;
    },
  },
};
