import { IsDateString, IsString } from "class-validator";

export class CreateEpisodeDTO{
    @IsString()
    name: string;

    @IsString()
    episode: string;
    
    @IsDateString()
    airDate: string;
}