import { Module } from "@nestjs/common";
import { EpisodeController } from "./episode.controller";
import { EpisodeService } from "./episode.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers: [EpisodeController],
    providers: [EpisodeService],
    imports: [PrismaModule]
})
export class EpisodeModule{}