import { Body, Controller, Post } from '@nestjs/common';
import { POIService } from './poi.service';
import { POIRequestShape } from './poi.dto';
import { OptionalAuth } from '@thallesp/nestjs-better-auth';

@OptionalAuth()
@Controller('/poi')
export default class POIController {
  constructor(private readonly poiService: POIService) {}

  @Post('/search')
  async sendRequest(@Body() body: POIRequestShape) {
    return this.poiService.retrievePOIs(body);
  }
}
