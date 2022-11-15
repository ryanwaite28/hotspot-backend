import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { catchError, Observable, tap } from 'rxjs';
import { AuthMicroserviceMessages } from '../enums/microservices/auth-microservice.enum';
import { MicroserviceNames } from '../enums/microservices/_microservices.enum';
import { AuthGuard } from '@nestjs/passport';


// @Injectable()
// export class JwtAuthGuard implements CanActivate {
//   constructor(@Inject(MicroserviceNames.AUTH) private authMicroserviceClient: ClientProxy) {}

//   canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
//     const authentication = this.getAuthentication(context);

//     return this.authMicroserviceClient.send(AuthMicroserviceMessages.VALIDATE_USER_LOGIN, { authentication })
//       .pipe(
//         tap((res) => {
//           this.addUser(res, context);
//         }),
//         catchError(() => {
//           throw new UnauthorizedException();
//         }),
//       );
//   }

//   private getAuthentication(context: ExecutionContext) {
//     let authentication: string;

//     if (context.getType() === 'rpc') {
//       authentication = context.switchToRpc().getData().authentication;
//     }
//     else if (context.getType() === 'http') {
//       const req = context.switchToHttp().getRequest<Request>();
//       authentication = req.headers.get('Authorization');
//     }

//     if (!authentication) {
//       throw new UnauthorizedException(
//         'No value was provided for Authentication',
//       );
//     }
    
//     return authentication;
//   }

//   private addUser(user: any, context: ExecutionContext) {
//     if (context.getType() === 'rpc') {
//       context.switchToRpc().getData().user = user;
//     }
//     else if (context.getType() === 'http') {
//       context.switchToHttp().getRequest().user = user;
//     }
//   }
// }


@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
