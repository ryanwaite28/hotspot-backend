import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WsResponse
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';



@WebSocketGateway(parseInt(process.env.PORT), {
  transports: ['websocket'],
  cors: {
    origin: process.env.CORS_ORIGINS?.split(',')
  }
})
export class WebApiGatewayWebSocketHandler implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() server: Server;

  afterInit(server: Server) {

  }

  handleConnection(socket: Socket) {

  }

  handleDisconnect(socket: Socket) {

  }

}