import { GraphQLError } from 'graphql';
import { UserService } from '../services/User.service';
import { CreateUserDto } from '../models/User/user-dto';
import { validateClass } from '../utils';
import { UserInputError } from 'apollo-server';
import { JwtService } from '../services/Jwt.service';
import { UserDoc } from '../models/User/User.model';

export class UserQueries {
  constructor() {}
  getUser({ id }: { id: string }) {}

  async getUsers(args: any, context: { user: UserDoc }) {
    try {
      return await UserService.findall();
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

export class UserMutations {
  constructor() {}
  async addUser({ email, password }: { email: string; password: string }) {
    try {
      const newUser = new CreateUserDto(email, password);
      const errors = await validateClass(newUser);
      if (errors) return new UserInputError(JSON.stringify(errors));

      const exists = await UserService.findbyEmail(email);
      if (exists) return new UserInputError('Email already registered');

      const user = await UserService.create({ email, password });
      return await JwtService.generateToken(user.id);
    } catch (error) {
      console.log(error.message);
      return new GraphQLError('Server Error');
    }
  }

  async deleteAll() {
    try {
      await UserService.deleteAll();
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
