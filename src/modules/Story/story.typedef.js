const { gql } = require("apollo-server");

const storyTypeDefs = gql`
  scalar DateTime
  type Story {
    id: ID!
    text: String!
    author: User!
    tags: [Tag]
    likedBy: [Like]
  }

  type Tag {
    id: ID!
    name: String!
    image: String!
    likesByTag: [Like]
    storiesId: [String]
    stories: [Story]
  }

  type Like {
    id: ID!
    story: Story!
    user: User!
    tag: Tag
  }
  type Mutation {
    createStory(input: CreateStoryInput): StoryResponse!
  }
  type Query {
    getStoriesByTag(input: GetStoriesByTagInput): [StoryResponse]
  }

  type StoryResponse {
    id: ID!
    text: String
    author: UserResponse
    Tags: [Tag]
  }

  input CreateStoryInput {
    text: String!
    tags: [ID]
  }
  input GetStoriesByTagInput {
    tags: [ID]
    pageSize: Int!
    page: Int!
  }
`;

export default storyTypeDefs;
