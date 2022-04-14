"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  scalar DateTime\n\n  enum Gender {\n    Male\n    Female\n    Other\n    Transgender\n  }\n\n  type User {\n    id: ID!\n    first_name: String!\n    last_name: String!\n    password: String!\n    DOB: DateTime\n    gender: Gender!\n    email: String!\n    username: String!\n    stories: [Story]\n  }\n\n  type UserResponse {\n    id: ID!\n    first_name: String!\n    last_name: String!\n    DOB: DateTime\n    gender: Gender!\n    email: String!\n    username: String!\n  }\n\n  type RegisterResponse {\n    id: ID!\n    first_name: String!\n    last_name: String!\n    email: String!\n    username: String!\n  }\n\n  type LoginResponse {\n    token: String!\n    user: UserResponse\n  }\n\n  input RegisterInput {\n    name: String!\n    email: String!\n    password: String!\n    gender: Gender!\n    username: String!\n  }\n\n  type Query {\n    getUsers: [User]\n  }\n\n  type Mutation {\n    register(input: RegisterInput): RegisterResponse!\n    login(email: String!, password: String!): LoginResponse!\n  }\n"], ["\n  scalar DateTime\n\n  enum Gender {\n    Male\n    Female\n    Other\n    Transgender\n  }\n\n  type User {\n    id: ID!\n    first_name: String!\n    last_name: String!\n    password: String!\n    DOB: DateTime\n    gender: Gender!\n    email: String!\n    username: String!\n    stories: [Story]\n  }\n\n  type UserResponse {\n    id: ID!\n    first_name: String!\n    last_name: String!\n    DOB: DateTime\n    gender: Gender!\n    email: String!\n    username: String!\n  }\n\n  type RegisterResponse {\n    id: ID!\n    first_name: String!\n    last_name: String!\n    email: String!\n    username: String!\n  }\n\n  type LoginResponse {\n    token: String!\n    user: UserResponse\n  }\n\n  input RegisterInput {\n    name: String!\n    email: String!\n    password: String!\n    gender: Gender!\n    username: String!\n  }\n\n  type Query {\n    getUsers: [User]\n  }\n\n  type Mutation {\n    register(input: RegisterInput): RegisterResponse!\n    login(email: String!, password: String!): LoginResponse!\n  }\n"]);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require("apollo-server"),
    gql = _require.gql;

var typeDefs = gql(_templateObject);

exports.default = typeDefs;