import { ApolloServer } from 'apollo-server';
import { mongoDb } from './db/dbConnetion';
import { BookResolvers, bookTypeDef } from './schema/Book';
import rootTypeDefs from './schema/schema';
import { fileTypeDefs, fileResolvers } from './schema/File';
import { userResolvers, userTypeDef } from './schema/User';
import { JwtService } from './services/Jwt.service';
import { auth } from './directives/auth';
import { UserService } from './services/User.service';
import { UserDoc } from './models/User/User.model';

const server = new ApolloServer({
  typeDefs: [rootTypeDefs, fileTypeDefs, bookTypeDef, userTypeDef],
  resolvers: [BookResolvers, fileResolvers, userResolvers],
  schemaDirectives: { auth },
  context: async ({ req }) => {
    const token = req.headers.authorization?.split(' ')[1] || '';
    const userId = await JwtService.decodeToken<string>(token);
    let user: UserDoc | null = null;
    if (userId) {
      user = await UserService.findbyId(userId);
    }
    return { user };
  },
});

mongoDb.connect('localhost', 'test');

server.listen(4000).then(({ url }) => console.log(`🚀 Server ready at ${url}`));
