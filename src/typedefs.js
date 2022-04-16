import UserTyepDef from "./modules/User/user.typedef";
import StoryTypeDefs from "./modules/Story/story.typedef";
import TagTypeDefs from "./modules/Tag/tag.typedef";
import { mergeTypeDefs } from "@graphql-tools/merge";

const typedefs = mergeTypeDefs([UserTyepDef, StoryTypeDefs, TagTypeDefs]);

export default typedefs;
