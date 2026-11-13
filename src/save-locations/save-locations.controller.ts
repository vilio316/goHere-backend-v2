import { Controller, Get, Param, Post } from "@nestjs/common";
import { SaveLocationsService } from "./save-locations.service";
import { Body } from "@nestjs/common";
import { SaveLocationsDto } from "./dto/save-locations.dto";

@Controller('/locations')
export class SaveLocationsController {
    constructor(private readonly saveService: SaveLocationsService) {}

    @Get(':user_id')
    getSavedLocations(@Param('user_id') user_id: string) {
        return this.saveService.getSavedLocations(user_id)
    }

    @Post('save')
    saveLocation(@Body() body:SaveLocationsDto) {
        return this.saveService.saveLocation(body.osm_id, body.name, body.user_id)
    }
}