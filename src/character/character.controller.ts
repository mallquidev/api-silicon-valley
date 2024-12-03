import { BadRequestException, Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { CharacterService } from "./character.service";
import { Character } from "@prisma/client";
import { CreateCharacterDTO } from "./dtoCharacter/create-character.dto";
import { UpdateCharacterDTO } from "./dtoCharacter/update-character.dto";

@Controller('uniquecharacter')
export class CharacterController  {

    constructor(private readonly characterService: CharacterService) {}

    @Get()
    async getAllCharacters(){
        const character = await this.characterService.getAllCharacters()
        if(character.length === 0){
            throw new NotFoundException('No Character found')
        }

        return character
    }

    @Get(':id')
    async getCharacter(@Param('id')id: string){
        const numeriCId = Number(id);
        if(isNaN(numeriCId)){
            throw new BadRequestException('Invalid Character ID format')
        }
        const characterOne = await this.characterService.getCharacterById(Number(id))
        if(!characterOne) {
            throw new NotFoundException(`Character with ID ${numeriCId} not found`)
        }
        return characterOne;
    }

    @Post()
    async createCharacter(@Body() data: CreateCharacterDTO){
        return await this.characterService.createCharacter(data)
    }

    @Delete(':id')
    async deletCharacter(@Param('id')id: string){
        const numericId = Number(id);
        if(isNaN(numericId)){
            throw new BadRequestException('Invalid Character ID FORMAT')
        }

        const deleteResult = await this.characterService.deleteCharacter(numericId)
        if(!deleteResult) {
            throw new HttpException(
                { message: 'Lo siento, no puedes eliminarlo si quieres el proyecto ve a mi github mallquidev' },
                HttpStatus.METHOD_NOT_ALLOWED,
            );
        }
        
    }

    /* @Put(':id')
    async updateCharacter(@Param('id')id: string, @Body() data: UpdateCharacterDTO){
        return this.characterService.updateCharacter(Number(id), data)
    }
    */
    @Put(':id')
    async updateCharacter(@Param('id')id: string, @Body() data: UpdateCharacterDTO){
        throw new HttpException(
            { message: 'Lo siento, no puedes eliminarlo si quieres el proyecto ve a mi github mallquidev' },
            HttpStatus.METHOD_NOT_ALLOWED,
        );
    }

}