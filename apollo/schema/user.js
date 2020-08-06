import { gql } from "apollo-server-micro";

export default gql`
  extend type Query {
    users: [User!]
    user(id: ID!): User
    me: User
  }

  extend type Mutation {
    signUp(
      usuario: String!
      password: String!
      nombre: String!
      apellidos: String!
    ): Token!

    signIn(login: String!, password: String!): Token!
    updateUser(username: String!): User!
    deleteUser(id: ID!): Boolean!
  }

  type Token {
    token: String!
  }

  type User {
    id: ID!
    nombre: String!
    apellidos: String!
    usuario: String!
    password: String!
  }
`;
