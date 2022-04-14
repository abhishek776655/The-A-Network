import UserTyepDef from "./modules/User/user.typedef";
import StoryTypeDefs from "./modules/Story/story.typedef";

import { mergeTypeDefs } from "@graphql-tools/merge";

const typedefs = mergeTypeDefs([UserTyepDef, StoryTypeDefs]);

export default typedefs;
