import { storyInputToStory, storyToStoryResponse } from "./story.dto";

export default {
  Mutation: {
    createStory: async (parent, args, context, info) => {
      try {
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
      } catch (e) {
        console.log(e);
        return e;
      }
    },
  },
};
