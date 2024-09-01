import { IsISO8601, IsNumber, IsString } from "class-validator";

export class EventDto {

    @IsString()
    name: string

    @IsNumber()
    lat: number

    @IsNumber()
    lng: number

    @IsISO8601()
    time: string

    @IsString()
    description: string

}