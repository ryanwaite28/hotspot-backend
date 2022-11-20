import { IsNotEmpty, IsString, Matches } from "class-validator";


export class UserPasswordUpdateDto {
  @IsString()
  @Matches(/[^\s]{7,}/)
  @IsNotEmpty()
  currentPassword: string;

  @IsString()
  @Matches(/[^\s]{7,}/)
  @IsNotEmpty()
  password: string;
  newPassword: string;
}