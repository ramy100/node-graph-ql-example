import { IsAlpha, IsNotEmpty, MinLength } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsAlpha()
  @MinLength(10)
  title!: String;

  @IsNotEmpty()
  @IsAlpha()
  @MinLength(10)
  author!: String;

  @IsNotEmpty()
  user_id!: String;

  @IsNotEmpty()
  file!: String;
}

export class UpdateBookDto {
  @IsNotEmpty()
  @IsAlpha()
  @MinLength(10)
  title?: String;

  @IsNotEmpty()
  @IsAlpha()
  @MinLength(10)
  author?: String;

  //   @IsNotEmpty()
  //   user_id?: String;

  @IsNotEmpty()
  file?: String;
}
