import { UserMutations, UserQueries } from '../controllers/User.controller';

const { gql } = require('apollo-server');

export const userTypeDef = gql`
  type User {
    id: ID
    email: String
    password: String
  }

  type UserQueries {
    getUser(id: ID!): User
    getUsers: [User] @auth
  }

  type UserMutations {
    addUser(email: String!, password: String!): String
    deleteAll: Boolean
  }

  extend type Query {
    userQueries: UserQueries
  }

  extend type Mutation {
    userMutations: UserMutations
  }
`;

export const userResolvers = {
  Query: {
    userQueries: () => new UserQueries(),
  },
  Mutation: {
    userMutations: () => new UserMutations(),
  },
};
