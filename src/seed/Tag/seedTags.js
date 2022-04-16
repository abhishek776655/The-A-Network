const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const TagsData = require("./TagData");
console.log("fadsl'");
async function createTags() {
  const tags = await prisma.tag.createMany({ data: TagsData });
}
createTags()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
