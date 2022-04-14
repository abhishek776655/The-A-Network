export const storyInputToStory = (args, userId) => {
  const data = {
    text: args.input.text,
    author: {
      connect: { id: userId },
    },
    tags: {
      connect: args.input.tags,
    },
  };
  return data;
};
