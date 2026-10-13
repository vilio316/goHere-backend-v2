import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { HttpClient, HttpResponseError } from '@nestjs/http-client';
import dotenv from 'dotenv';
dotenv.config();
@Injectable()
export default class OSRMService {
  constructor(private readonly http: HttpClient) {}
  async getDrivingRoute(coordinates: string) {
    try {
      const { data } = await this.http.get(
        `/api/osrm/route/v1/driving/${coordinates}`,
      );
      return data;
    } catch (error) {
      if (error instanceof HttpResponseError) {
        if (error.status === 400) throw new BadRequestException('Bad Request');
        if (error.status === 401)
          throw new UnauthorizedException(
            "You're not authorised to access this content",
          );
      }
    }
  }

  async getDistanceMatrix(coordinates: string) {
    try {
      const { data } = await this.http.get(
        `/api/osrm/table/v1/driving/${coordinates}`,
      );
      return data;
    } catch (error) {
      if (error instanceof HttpResponseError) {
        if (error.status === 400) throw new BadRequestException('Bad Request');
        if (error.status === 401)
          throw new UnauthorizedException(
            "You're not authorised to access this content",
          );
      }
    }
  }

  async getTrip(coordinates: string) {
    try {
      const { data } = await this.http.get(
        `/api/osrm/trip/v1/driving/${coordinates}`,
      );
      return data;
    } catch (error) {
      if (error instanceof HttpResponseError) {
        if (error.status === 400) throw new BadRequestException('Bad Request');
        if (error.status === 401)
          throw new UnauthorizedException(
            "You're not authorised to access this content",
          );
      }
    }
  }
}
