import { Body, Controller, Get, Post } from "@nestjs/common";
import { EpisodeService } from "./episode.service";
import { CreateEpisodeDTO } from "./dtoEpisode/create-episode.dto";

@Controller('episode')
export class EpisodeController{
    constructor(private readonly episodeService:EpisodeService){}

    @Get()
    async getAllEpisode(){
        return await this.episodeService.getAllEpisode()
    }

    @Post()
    async createEpisode(@Body() data:CreateEpisodeDTO){
        return await this.episodeService.createEpisode(data)
    }
}