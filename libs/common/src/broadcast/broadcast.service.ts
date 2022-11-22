import { Injectable } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory } from "@nestjs/microservices";
import { MicroserviceNames, available_microservices_list, available_microservices_set } from "../enums/microservices/_microservices.enum";
import { RmqService } from "../rmq/rmq.service";


@Injectable()
export class BroadcastService {
  // generic alternative to discovery mechanism
  

  microservice_clients: { [key:string]: ClientProxy } = {};
  
  constructor() {
    for (const microservice of available_microservices_list) {
      const client: ClientProxy = ClientProxyFactory.create(RmqService.getOptions(microservice));
      this.microservice_clients[microservice] = client;
    }
  }

  async broadcastEventToAllMicroservices(
    event: string,
    data: any,
    excluding?: MicroserviceNames[]
  ) {
    console.log(`broadcasting event...`, { event, data, excluding });
    for (const microservice of available_microservices_list) {
      const ignoreMicroservice = excluding && excluding.includes(microservice as MicroserviceNames);
      if (ignoreMicroservice) {
        continue;
      }
      const client = this.microservice_clients[microservice];
      client.emit(event, data || {});
    }
  }

  async broadcastEventToSelectMicroservices(params: {
    event: string,
    data: any,
    microserviceNamesList: MicroserviceNames[]
  }) {
    console.log(`broadcasting event...`, params);
    for (const microservice of params.microserviceNamesList) {
      if (!available_microservices_set.has(microservice)) {
        console.log(`microservice is not available for handling: ${microservice}; continuing...`);
        continue;
      }

      const client: ClientProxy = this.microservice_clients[microservice];
      if (!client) {
        console.log(`no client found by: ${microservice}; continuing...`);
        continue;
      }
      client.emit(params.event, params.data || {});
    }
  }
}