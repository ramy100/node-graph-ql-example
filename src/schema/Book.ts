const { gql } = require('apollo-server');
const {
  BookQueries,
  BookMutations,
} = require('../controllers/Book.controller');

export const bookTypeDef = gql`
  directive @auth on FIELD_DEFINITION
  type Book {
    id: ID
    title: String
    author: String
    file: String
  }

  type BookQueries {
    getBook(id: ID!): Book
    getBooks: [Book]
  }

  type BookMutations {
    addBook(title: String!, author: String!, file: Upload): Book
  }

  extend type Query {
    bookQueries: BookQueries
  }

  extend type Mutation {
    bookMutations: BookMutations @auth
  }
`;

export const BookResolvers = {
  Query: {
    bookQueries: () => new BookQueries(),
  },
  Mutation: {
    bookMutations: () => new BookMutations(),
  },
};
