import { Priority } from "@prisma/client";
import { Transform } from "class-transformer";
import { IsArray, IsBoolean, IsEnum, IsOptional, IsString } from "class-validator";

export class TaskDto {
    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    createdAt?: string;

    @IsBoolean()
    @IsOptional()
    isCompleted?: boolean;

    @IsEnum(Priority)
    @Transform(({value}) => ('' + value).toLowerCase())
    priority: Priority;
}