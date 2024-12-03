import { Module } from "@nestjs/common";
import { CharacterEpisodeController } from "./characterEpisode.controller";
import { CharacterEpisodeService } from "./characterEpisode.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers: [CharacterEpisodeController],
    providers: [CharacterEpisodeService],
    imports: [PrismaModule]
})
export class CharacterEpisodeModule{}