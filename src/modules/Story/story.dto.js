export const storyInputToStory = (args, userId) => {
  let tagsObjectArr = [];
  args.input.tags.forEach((tag) => {
    let obj = { id: tag };
    tagsObjectArr.push(obj);
  });

  const data = {
    text: args.input.text,
    author: {
      connect: { id: userId },
    },
    tags: {
      connect: tagsObjectArr,
    },
  };
  return data;
};
