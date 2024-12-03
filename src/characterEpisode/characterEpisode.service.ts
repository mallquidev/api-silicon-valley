import { Injectable } from "@nestjs/common";
import { CharacterEpisode, Prisma } from "@prisma/client";
import { CharacterEpisodeDTO } from "src/episode/dtoEpisode/create-character-episode.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CharacterEpisodeService{
    constructor(private prisma:PrismaService){}

    async getAllCharacterEpisode():Promise<CharacterEpisode[]>{
        return await this.prisma.characterEpisode.findMany()
    }

    async getAllCharacters():Promise<CharacterEpisode[]>{
        return this.prisma.$queryRaw(
            Prisma.sql`SELECT get_all_characters();`
        );
    }
    
    async createCharacterEpisode(data:CharacterEpisodeDTO):Promise<CharacterEpisode>{
        return await this.prisma.characterEpisode.create({
            data
        })
    }
    async getCharactersWithEpisodes(characterId: number): Promise<any> {
        return await this.prisma.$queryRaw(
            Prisma.sql`SELECT * FROM "public"."get_character_by_id"(${characterId}::integer)`
        );
    }

    
}