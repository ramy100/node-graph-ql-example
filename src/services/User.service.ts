import { CreateUserDto, UpdateUserDto } from '../models/User/user-dto';
import { UserModel } from '../models/User/User.model';

export const UserService = {
  create: async (user: CreateUserDto) => await UserModel.create({ ...user }),
  deleteAll: async () => await UserModel.deleteMany({}),
  findall: async () => await UserModel.find({}),
  findbyEmail: async (email: string) => await UserModel.findOne({ email }),
  findbyId: async (id: string) => await UserModel.findById(id),
};
