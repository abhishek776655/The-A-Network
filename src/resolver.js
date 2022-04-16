import UserResolver from "./modules/User/user.resolver";
import merge from "lodash/merge";
import StoryResolver from "./modules/Story/story.resolver";
import TagResolver from "./modules/Tag/tag.resolver";

const resolvers = merge([StoryResolver, UserResolver, TagResolver]);

export default resolvers;
