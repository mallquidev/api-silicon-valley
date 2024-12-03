import { IsInt, IsNotEmpty } from "class-validator";

export class CharacterEpisodeDTO{
    @IsInt()
    @IsNotEmpty()
    characterId: number;

    @IsInt()
    @IsNotEmpty()
    episodeId: number;
}