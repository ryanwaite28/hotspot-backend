import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, Matches } from "class-validator";
import { UserGenders, UserSexes } from "../enums/person-identities.enum";

export class CreateUserDto {
  @IsEnum(UserSexes)
  @IsOptional()
  @IsNotEmpty()
  sex?: string;
  
  @IsEnum(UserGenders)
  @IsOptional()
  @IsNotEmpty()
  gender?: string;

  @Matches(/[a-zA-Z0-9\-\_\.]{2,50}/)
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  displayname: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @Matches(/[^\s]{7,}/)
  @IsNotEmpty()
  password: string;
}