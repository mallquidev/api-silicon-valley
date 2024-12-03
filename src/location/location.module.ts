import { Module } from "@nestjs/common";
import { LocationController } from "./location.controller";
import { LocationService } from "./location.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers: [LocationController],
    providers: [LocationService],
    imports: [PrismaModule]
})
export class LocationModule{}