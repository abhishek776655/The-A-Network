export default {
  Query: {
    getTags: async (parent, args, context, info) => {
      let tags = await context.prisma.tag.findMany();
      console.log(tags);
      return tags;
    },
  },
};
