import { Module } from "@nestjs/common";
import { PrismaModule } from "../prisma/prisma.module";
import { SaveLocationsService } from "./save-locations.service";
import { SaveLocationsController } from "./save-locations.controller";

@Module({
  imports: [PrismaModule],
  providers: [SaveLocationsService],
  controllers: [SaveLocationsController],
})
export class SaveLocationsModule {}