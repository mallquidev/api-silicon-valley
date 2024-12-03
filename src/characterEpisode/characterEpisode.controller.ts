import { Body, Controller, Get, HttpException, HttpStatus, NotFoundException, Param, Post } from "@nestjs/common";
import { CharacterEpisodeService } from "./characterEpisode.service";
import { CharacterEpisodeDTO } from "src/episode/dtoEpisode/create-character-episode.dto";

@Controller('character')
export class CharacterEpisodeController{
    constructor(private readonly characterEpisodeService:CharacterEpisodeService){}

    /* @Get()
    async getAllCharacterEpisode(){
        const characterEpi = await this.characterEpisodeService.getAllCharacterEpisode()
        if(characterEpi.length === 0){
            throw new NotFoundException('No Character found')
        }

        return characterEpi
    } */

    @Get()
    async getAllCharacter(){
        const foundCharacter = await this.characterEpisodeService.getAllCharacters()
        if(foundCharacter.length === 0){
            throw new NotFoundException('No Character found')
        }
        return foundCharacter;
    }

    @Post()
    async createCharacterEpisode(@Body() data:CharacterEpisodeDTO){
        //return await this.characterEpisodeService.createCharacterEpisode(data)
        throw new HttpException(
            { message: 'Lo siento, no puedes eliminarlo si quieres el proyecto ve a mi github mallquidev' },
            HttpStatus.METHOD_NOT_ALLOWED,
        );
    }


    @Get(':id')
    async getCharacterDetails(@Param('id') id: string) {
        const characterId = Number(id);
        if (isNaN(characterId)) {
            throw new Error('ID inválido');
        }
        return await this.characterEpisodeService.getCharactersWithEpisodes(characterId);
    }
    
    
}