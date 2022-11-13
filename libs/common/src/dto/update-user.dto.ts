import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateUserDto {  
  @IsString()
  @IsOptional()
  username?: string;

  @IsString()
  @IsOptional()
  displayname?: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsString()
  @IsOptional()
  bio?: string;

  @IsString()
  @IsOptional()
  icon_link?: string;

  @IsString()
  @IsOptional()
  icon_id?: string;

  @IsString()
  @IsOptional()
  wallpaper_link?: string;

  @IsString()
  @IsOptional()
  wallpaper_id?: string;

  @IsBoolean()
  @IsOptional()
  is_public?: boolean;

  @IsBoolean()
  @IsOptional()
  person_verified?: boolean;

  @IsBoolean()
  @IsOptional()
  email_verified?: boolean;

  @IsBoolean()
  @IsOptional()
  phone_verified?: boolean;
}