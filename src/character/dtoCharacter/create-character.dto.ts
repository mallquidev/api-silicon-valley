import { IsInt, IsString } from 'class-validator'

export class CreateCharacterDTO{
    @IsString()
    name: string;

    @IsString()
    title: string;

    @IsString()
    company: string;

    @IsString()
    status: string;
    
    @IsString()
    image: string;

    @IsInt()
    locationId: number;
}