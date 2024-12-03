import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateEpisodeDTO } from "./dtoEpisode/create-episode.dto";
import { Episode } from "@prisma/client";

@Injectable()
export class EpisodeService{
    constructor(private prisma:PrismaService){}

    async getAllEpisode():Promise<Episode[]>{
        return await this.prisma.episode.findMany()
    }

    async createEpisode(data:CreateEpisodeDTO):Promise<Episode>{
        return await this.prisma.episode.create({
            data:{
                name: data.name,
                episode: data.episode,
                airDate: data.airDate
            }
        })
    }

}