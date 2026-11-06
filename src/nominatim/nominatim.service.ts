import { BadRequestException, Injectable } from '@nestjs/common';
import { HttpClient, HttpResponseError } from '@nestjs/http-client';

@Injectable()
export default class NominatimService {
  constructor(private readonly http: HttpClient) {}

  async searchNomina(query: string) {
    try {
      const { data } = await this.http.get(`/search?q=${query}&extratags=1&addressdetails=1&format=json`);
      return data;
    } catch (error) {
      if (error instanceof HttpResponseError && error.status === 400)
        throw new BadRequestException('Bad Request');
    }
  }

  async getReverse(lat: number, lon: number) {
    try {
      const { data } = await this.http.get(`/reverse?lat=${lat}&lon=${lon}&format=json&extratags=1`);
      return data;
    } catch (error) {
      if (error instanceof HttpResponseError && error.status === 400)
        throw new BadRequestException('Bad Request');
    }}

  async getLookup(osm_id: number) {
    try {
      const { data } = await this.http.get(`/lookup?osm_ids=N${osm_id},W${osm_id},R${osm_id}&format=json&extratags=1`);
      return data;
    } catch (error) {
      if (error instanceof HttpResponseError && error.status === 400)
        throw new BadRequestException('Bad Request');
    }
}}
