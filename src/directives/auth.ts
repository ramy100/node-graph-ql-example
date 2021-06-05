import { AuthenticationError, SchemaDirectiveVisitor } from 'apollo-server';
import { defaultFieldResolver } from 'graphql';

export class auth extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: any) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async function (...args: any[]) {
      const context = args[2];
      if (!context.user) throw new AuthenticationError('not logged');
      const result = await resolve.apply(this, args);
      return result;
    };
  }
}
