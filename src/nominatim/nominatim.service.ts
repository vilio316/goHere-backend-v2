import { BadRequestException, Injectable } from '@nestjs/common';
import { HttpClient, HttpResponseError } from '@nestjs/http-client';

@Injectable()
export default class NominatimService {
  constructor(private readonly http: HttpClient) {}

  async searchNomina(query: string) {
    try {
      const { data } = await this.http.get(`/search?q=${query}`);
      return data;
    } catch (error) {
      if (error instanceof HttpResponseError && error.status === 400)
        throw new BadRequestException('Bad Request');
    }
  }
}
