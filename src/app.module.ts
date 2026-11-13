import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { auth } from './auth';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { OSRMMoudle } from './osrm-directions/osrm.module';
import AIModule from './ai-gateway/ai.module';
import NominatimModule from './nominatim/nominatim.module';
import { SaveLocationsModule } from './save-locations/save-locations.module';

@Module({
  imports: [
    AuthModule.forRoot({
      auth,
    }),

    OSRMMoudle,
    AIModule,
    NominatimModule,
    SaveLocationsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
