import { Body, Controller, Get, HttpException, HttpStatus, Post } from "@nestjs/common";
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
        //return await this.episodeService.createEpisode(data)
        throw new HttpException(
            { message: 'Lo siento, no puedes eliminarlo si quieres el proyecto ve a mi github mallquidev' },
            HttpStatus.METHOD_NOT_ALLOWED,
        );
    }
}