import { Module } from '@nestjs/common';
import POIController from './poi/poi.controller';
import { POIService } from './poi/poi.service';
import { HttpClientModule } from '@nestjs/http-client';
import dotenv from 'dotenv';
dotenv.config();

@Module({
  controllers: [POIController],
  providers: [POIService],
  exports: [],
  imports: [
    HttpClientModule.register({
      baseUrl: process.env.AI_GATEWAY_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.AI_GATEWAY_KEY}`,
      },
    }),
  ],
})
export default class AIModule {}
