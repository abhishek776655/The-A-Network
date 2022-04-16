const { gql } = require("apollo-server");

const storyTypeDefs = gql`
  scalar DateTime

  enum TagType {
    Positive
    Negative
  }
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
    type: TagType!
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
`;

export default storyTypeDefs;
