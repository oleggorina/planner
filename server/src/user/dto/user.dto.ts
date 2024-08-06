import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class UserDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsEmail()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    @MinLength(6, {message: 'Password must be at least 6 characters long'})
    password?: string;
}