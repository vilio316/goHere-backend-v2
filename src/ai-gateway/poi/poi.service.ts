import { BadRequestException, Injectable } from '@nestjs/common';
import { HttpClient, HttpResponseError } from '@nestjs/http-client';
import dotenv from 'dotenv';
import { POIRequestShape } from './poi.dto';
dotenv.config();

@Injectable()
export class POIService {
  constructor(private readonly http: HttpClient) {}

  async retrievePOIs(body: POIRequestShape): Promise<any> {
    try {
      const { data } = await this.http.post('/v1/places/search', {
        json: body,
      });
      return data;
    } catch (error: any) {
      if (error.status === 400 && error instanceof HttpResponseError)
        throw new BadRequestException('Bad Request');
    }
  }
}
