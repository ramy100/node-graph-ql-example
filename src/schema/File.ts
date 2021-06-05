import { GraphQLArgs } from 'graphql';

const { ApolloServer, gql } = require('apollo-server');

export const fileTypeDefs = gql`
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }

  extend type Query {
    uploads: [File]
  }

  extend type Mutation {
    singleUpload(file: Upload!): File!
  }
`;

export const fileResolvers = {
  Query: {
    uploads: (parent: any, args: any) => {},
  },
  Mutation: {
    singleUpload: (parent: any, args: any) => {
      console.log(args);
      return args.file.then((file: any) => {
        //Contents of Upload scalar: https://github.com/jaydenseric/graphql-upload#class-graphqlupload
        //file.createReadStream() is a readable node stream that contains the contents of the uploaded file
        //node stream api: https://nodejs.org/api/stream.html
        return file;
      });
    },
  },
};
