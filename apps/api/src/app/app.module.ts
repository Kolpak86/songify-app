import { Module } from '@nestjs/common';
import { SongsModule } from '../songs/songs.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
