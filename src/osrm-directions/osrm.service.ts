import { Injectable } from '@nestjs/common';
import dotenv from 'dotenv';
dotenv.config();
@Injectable()
export default class OSRMService {
  async getDirections(coordinates: string) {
    const request = await fetch(
      `${process.env.ROUTING_BASE_URL}/api/osrm/route/v1/driving/${coordinates}?geometries=polyline`,
      {
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': String(process.env.ROUTING_GATEWAY_API_KEY) ?? '',
        },
      },
    );
    const response = await request.json();
    return response;
  }
}
