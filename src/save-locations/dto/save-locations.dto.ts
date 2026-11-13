export class SaveLocationsDto {
    name: string; 
    osm_id: number;
    user_id: string;
}

export interface SaveLocationParams{
    name: string;
    osm_id: number;
}