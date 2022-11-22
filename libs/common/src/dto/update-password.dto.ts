import { IsNotEmpty, IsNumber, IsString, Matches } from "class-validator";


export class UserPasswordUpdateDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @Matches(/[^\s]{7,}/)
  @IsNotEmpty()
  currentPassword: string;

  @IsString()
  @Matches(/[^\s]{7,}/)
  @IsNotEmpty()
  newPassword: string;
}