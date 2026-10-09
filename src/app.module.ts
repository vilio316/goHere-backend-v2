import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { auth } from './auth';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { OSRMMoudle } from './osrm-directions/osrm.module';

@Module({
  imports: [
    AuthModule.forRoot({
      auth,
    }),

    OSRMMoudle,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
