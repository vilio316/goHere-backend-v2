import { Module } from '@nestjs/common';
import { HttpClientModule } from '@nestjs/http-client';
import NominatimService from './nominatim.service';
import NominatimController from './nominatim.controller';

@Module({
  imports: [
    HttpClientModule.register({
      baseUrl: process.env.NOMINATIM_BASE_URL,
      timeout: '5s',
    }),
  ],
  providers: [NominatimService],
  controllers: [NominatimController],
})
export default class NominatimModule {}
