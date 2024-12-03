import { BadRequestException, Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, Post } from "@nestjs/common";
import { LocationService } from "./location.service";
import { CreateLocationDto } from "./dtoLocation/create-location.dto";

@Controller('location')
export class LocationController{

    constructor(private readonly locationService:LocationService){}

    @Get()
    async getAllLocation(){
        const locationFound = await this.locationService.getAllLocation()
        if(locationFound.length===0){
            throw new NotFoundException('No location found')
        }
        return locationFound;
    }

    @Post()
    async createLocation(@Body() data: CreateLocationDto){
        return await this.locationService.createLocation(data)
    }

    @Delete(':id')
    async deleteLocation(@Param('id') id:string){
        const numericId = Number(id);
        if(isNaN(numericId)){
            throw new BadRequestException('Invalid Character ID FORMAT')
        }
        const locationClear = await this.locationService.deleteLocation(numericId)
        if(!locationClear){
            throw new HttpException(
                { message: 'Lo siento, no puedes eliminarlo si quieres el proyecto ve a mi github mallquidev' },
                HttpStatus.METHOD_NOT_ALLOWED,
            );
        }
    }
}