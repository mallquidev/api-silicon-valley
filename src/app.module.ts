import { Module } from '@nestjs/common';
import { CharacterModule } from './character/character.module';
import { LocationModule } from './location/location.module';
import { EpisodeModule } from './episode/episode.module';
import { CharacterEpisodeModule } from './characterEpisode/characterEpisode.module';


@Module({
  imports: [CharacterModule, LocationModule, EpisodeModule, CharacterEpisodeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
