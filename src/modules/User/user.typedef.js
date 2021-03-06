const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar DateTime

  enum Gender {
    Male
    Female
    Other
    Transgender
  }

  type User {
    id: ID!
    first_name: String!
    last_name: String!
    password: String!
    DOB: DateTime
    gender: Gender!
    email: String!
    username: String!
    stories: [Story]
  }

  type UserResponse {
    id: ID!
    first_name: String!
    last_name: String!
    DOB: DateTime
    gender: Gender!
    email: String!
    username: String!
  }

  type RegisterResponse {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    username: String!
  }

  type LoginResponse {
    token: String!
    user: UserResponse
  }

  input RegisterInput {
    name: String!
    email: String!
    password: String!
    gender: Gender!
    username: String!
  }

  type Query {
    getUsers: [User]
  }

  type Mutation {
    register(input: RegisterInput): RegisterResponse!
    login(email: String!, password: String!): LoginResponse!
  }
`;

export default typeDefs;
