"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  scalar DateTime\n  type Story {\n    id: ID!\n    text: String!\n    author: User!\n    tags: [Tag]\n    likedBy: [Like]\n  }\n\n  type Tag {\n    id: ID!\n    name: String!\n    image: String!\n    likesByTag: [Like]\n    storiesId: [String]\n    stories: [Story]\n  }\n\n  type Like {\n    id: ID!\n    story: Story!\n    user: User!\n    tag: Tag\n  }\n  type Mutation {\n    createStory(input: CreateStoryInput): StoryResponse!\n  }\n\n  type StoryResponse {\n    id: ID!\n    text: String\n    author: UserResponse\n    Tags: [Tag]\n  }\n\n  input CreateStoryInput {\n    text: String!\n    tags: [ID]\n  }\n"], ["\n  scalar DateTime\n  type Story {\n    id: ID!\n    text: String!\n    author: User!\n    tags: [Tag]\n    likedBy: [Like]\n  }\n\n  type Tag {\n    id: ID!\n    name: String!\n    image: String!\n    likesByTag: [Like]\n    storiesId: [String]\n    stories: [Story]\n  }\n\n  type Like {\n    id: ID!\n    story: Story!\n    user: User!\n    tag: Tag\n  }\n  type Mutation {\n    createStory(input: CreateStoryInput): StoryResponse!\n  }\n\n  type StoryResponse {\n    id: ID!\n    text: String\n    author: UserResponse\n    Tags: [Tag]\n  }\n\n  input CreateStoryInput {\n    text: String!\n    tags: [ID]\n  }\n"]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require("apollo-server"),
    gql = _require.gql;

var storyTypeDefs = gql(_templateObject);

exports.default = storyTypeDefs;