import { Injectable } from '@nestjs/common';

@Injectable()
export default class OSRMService {
  async getDirections() {
    const request = await fetch('');
    const response = await request.json();
    if (!response)
      return {
        message: "Oops. We're not getting a valid response for that right now!",
      };
    return {
      response,
    };
  }
}
