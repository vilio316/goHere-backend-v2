import { Controller, Get, Param } from '@nestjs/common';
import NominatimService from './nominatim.service';
import { OptionalAuth } from '@thallesp/nestjs-better-auth';

@OptionalAuth()
@Controller('/search')
export default class NominatimController {
  constructor(private readonly nomina: NominatimService) {}

  @Get(':query')
  getByQuery(@Param('query') query: string) {
    return this.nomina.searchNomina(query);
  }
}
