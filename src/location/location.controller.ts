import { Body, Controller, Get, NotFoundException, Post } from "@nestjs/common";
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
}