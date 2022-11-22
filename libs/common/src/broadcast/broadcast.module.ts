import { Module } from "@nestjs/common";
import { MicroserviceNamesList } from "../enums/microservices/_microservices.enum";
import { RmqModule } from "../rmq/rmq.module";
import { BroadcastService } from "./broadcast.service";




@Module({
  imports: [
    // register clients for all microservices by name
    // RmqModule.registerClients(MicroserviceNamesList),
  ],
  providers: [BroadcastService],
  exports: [BroadcastService],
})
export class BroadcastModule {}
