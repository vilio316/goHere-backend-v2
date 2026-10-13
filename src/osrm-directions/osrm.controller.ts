import { Controller, Get, Header, Param, Req } from '@nestjs/common';
import OSRMService from './osrm.service';
import { OptionalAuth } from '@thallesp/nestjs-better-auth';
import dotenv from 'dotenv';
dotenv.config();

@OptionalAuth()
@Controller('osrm')
export class OSRMController {
  constructor(private readonly osrm: OSRMService) {}
  @Get('/directions/:coordinates')
  getDirections(@Param('coordinates') coordinates: string) {
    return this.osrm.getDirections(coordinates);
  }
}
