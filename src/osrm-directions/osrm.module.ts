import { Module } from '@nestjs/common';
import OSRMService from './osrm.service';
import { OSRMController } from './osrm.controller';

@Module({
  controllers: [OSRMController],
  imports: [],
  providers: [OSRMService],
})
export class OSRMMoudle {}
