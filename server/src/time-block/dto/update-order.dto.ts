import { IsArray, IsNumber } from "class-validator";

export class UpdateOrderDto {
    @IsArray()
    @IsNumber({}, {each: true})
    ids: number[];
}