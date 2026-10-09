import { Controller, Get, Param } from '@nestjs/common';
import OSRMService from './osrm.service';
import { OptionalAuth } from '@thallesp/nestjs-better-auth';

@OptionalAuth()
@Controller('osrm')
export class OSRMController {
  constructor(private readonly osrm: OSRMService) {}

  @Get('/directions/:coordinates')
  getDirections(@Param('coordinates') coordinates: string) {}
}
