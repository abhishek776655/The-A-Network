const { gql } = require("apollo-server");

const TagTypedef = gql`
  enum TagType {
    Positive
    Negative
  }
  type Tag {
    id: ID!
    name: String!
    Type: TagType!
    likesByTag: [Like]
    stories: [Story]
  }
  type Query {
    getTags: [TagResponse]
  }
  type TagResponse {
    id: ID!
    name: String!
    Type: TagType!
  }
`;
export default TagTypedef;
