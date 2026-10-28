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

  @Get("/reverse/:lat/:lon")
  getReverse(@Param( 'lat') lat: number, @Param('lon') lon: number) {
    return this.nomina.getReverse(lat, lon);
  }
  
  @Get("/lookup/:osm_id")
  getLookup(@Param('osm_id') osm_id: number) {
    return this.nomina.getLookup(osm_id);
  }}
