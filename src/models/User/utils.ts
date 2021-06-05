import bcrypt from 'bcrypt';
import { CreateUserDto, UpdateUserDto } from './user-dto';

export const hashPassword = async (user: CreateUserDto | UpdateUserDto) => {
  if (user.password)
    try {
      const password = await bcrypt.hash(user.password, 10);
      user.password = password;
    } catch (error) {
      console.log(error);
    }
};
