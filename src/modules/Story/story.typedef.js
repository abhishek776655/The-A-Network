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

  type Query {
    getUsers: [User]
  }

  type Mutation {
    register(input: RegisterInput): RegisterResponse!
    login(email: String!, password: String!): LoginResponse!
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
