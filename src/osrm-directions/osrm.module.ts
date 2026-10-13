import { Module } from '@nestjs/common';
import OSRMService from './osrm.service';
import { OSRMController } from './osrm.controller';
import { HttpClientModule } from '@nestjs/http-client';

@Module({
  controllers: [OSRMController],
  imports: [
    HttpClientModule.register({
      headers: {
        'X-API-KEY': process.env.ROUTING_GATEWAY_API_KEY,
      },
      baseUrl: process.env.ROUTING_GATEWAY_BASE_URL,
    }),
  ],
  providers: [OSRMService],
})
export class OSRMMoudle {}
