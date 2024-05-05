import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { plainToInstance } from "class-transformer";
import { Observable, map } from "rxjs";
import { User } from "../user";

@Injectable()
export class UserInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        return next.handle()
            .pipe(map(data => {
                return plainToInstance(User, data)
            }))
    }
}
