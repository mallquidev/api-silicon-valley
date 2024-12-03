import { Body, Controller, Get, NotFoundException, Param, Post } from "@nestjs/common";
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
        return await this.characterEpisodeService.createCharacterEpisode(data)
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