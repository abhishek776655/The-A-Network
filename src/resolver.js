import UserResolver from "./modules/User/user.resolver";
import merge from "lodash/merge";
import StoryResolver from "./modules/Story/story.resolver";

const resolvers = merge([StoryResolver, UserResolver]);

export default resolvers;
