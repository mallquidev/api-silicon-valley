import { Injectable } from "@nestjs/common";
import { Location } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateLocationDto } from "./dtoLocation/create-location.dto";

@Injectable()
export class LocationService{

    constructor(private prisma: PrismaService){}

    async getAllLocation():Promise<Location[]>{
        return await this.prisma.location.findMany()
    }

    async createLocation(data:CreateLocationDto):Promise<Location>{
        return this.prisma.location.create({
            data:{
                name: data.name,
                address: data.address,
                type: data.type
            }

        })
    }

}