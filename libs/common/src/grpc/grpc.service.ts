import { Injectable } from "@nestjs/common";
import { Transport } from "@nestjs/microservices";
import { join } from "path";
import { MicroserviceNames } from "../enums/microservices/_microservices.enum";


@Injectable()
export class GrpcService {
  static getOptions(microservice: MicroserviceNames) {
    return {
      transport: Transport.GRPC,
      options: {
        package: microservice.toLowerCase(),
        protoPath: join(__dirname, `microservices-proto/${microservice.toLowerCase()}.proto`),
      },
    }
  }
}