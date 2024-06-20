import { buildSchema } from "graphql";

const schema = buildSchema(`
type User {
  _id: ID!
  userName: String!
  email: String!
  password: String
  description: String
  profile: String
}

input UserInput {
  userName: String!
  email: String!
  password: String!
}

type AuthData {
  userId: ID!
  token: String!
}

type RootQuery {
  login(email: String!, password: String!): AuthData!
  getUserById(userId: ID!): User
}

type RootMutation {
  register(userInput: UserInput): User
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`);

export default schema;
