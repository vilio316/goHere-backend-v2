import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class SaveLocationsService {
    constructor(private readonly prisma: PrismaService) {}    

        async saveLocation(osm_id: number, name: string, user_id: string) {
           const savedLocations = await this.prisma.savedLocations.findUnique({
            where: {
                userId: user_id
            }
        })
        if(!savedLocations) {throw new Error('User data not found')}
            const {locations } = savedLocations 
            const locationsArray = Array.isArray(locations) ? locations : []
            const updatedLocations = [...locationsArray, {osm_id, name}]
            return this.prisma.savedLocations.update({
                where: {
                    userId: user_id
                },
                data: {
                    locations: updatedLocations
                }
            })
        }

        async getSavedLocations(user_id: string) {
            const savedLocations = await this.prisma.savedLocations.findUnique({
                where: {
                    userId: user_id
                }
            })    
            if(!savedLocations) {throw new Error('User data not found')}
            return savedLocations.locations
        }}
