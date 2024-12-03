import { Module } from "@nestjs/common";
import { CharacterController } from "./character.controller";
import { CharacterService } from "./character.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    controllers: [CharacterController],
    providers: [CharacterService],
    imports: [PrismaModule]
})
export class CharacterModule  {}