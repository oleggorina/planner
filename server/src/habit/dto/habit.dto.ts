import { IsBoolean, IsOptional, IsString } from "class-validator";

export class HabitDto {
    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    createdAt?: string;

    @IsBoolean()
    @IsOptional()
    isCompleted: boolean;

    @IsString()
    @IsOptional()
    completedAt?: string;
}