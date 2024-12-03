import { Injectable } from "@nestjs/common";
import { Character } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCharacterDTO } from "./dtoCharacter/create-character.dto";
import { UpdateCharacterDTO } from "./dtoCharacter/update-character.dto";

@Injectable()
export class CharacterService  {

    constructor(private prisma: PrismaService) {}

    async getAllCharacters(): Promise<Character[]> {
        return this.prisma.character.findMany();
    }

    async getCharacterById(id: number): Promise<Character> {
        return this.prisma.character.findUnique({
            where: {
                id
            }
        });
    }

    async createCharacter(data:CreateCharacterDTO):Promise<Character> {
        return this.prisma.character.create({
            data:{
                name: data.name,
                title: data.title,
                company: data.company,
                image: data.image,
                status: data.status,
                locationId: data.locationId
            }
        });
    }

    async updateCharacter(id: number, data: UpdateCharacterDTO): Promise<Character> {
        return this.prisma.character.update({
            where: {
                id
            },
            data
        });
    }

    async deleteCharacter(id: number): Promise<boolean> {
        try {
            await this.prisma.character.delete({
              where: { id },
            });
      
            return true;
        }catch (error) {
            return false;
        }
    }






}