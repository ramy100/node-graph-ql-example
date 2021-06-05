import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  constructor(email: string, password: string) {
    (this.email = email), (this.password = password);
  }

  @IsNotEmpty()
  @IsEmail()
  email!: String;

  @IsNotEmpty()
  @IsAlphanumeric()
  @MinLength(10)
  password!: String;
}

export class UpdateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email?: String;

  @IsNotEmpty()
  @IsAlphanumeric()
  @MinLength(10)
  password?: String;
}
