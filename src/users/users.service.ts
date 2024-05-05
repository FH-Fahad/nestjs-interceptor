import { Injectable } from '@nestjs/common';
import { Users } from './user';

@Injectable()
export class UsersService {
    getUsers() {
        return Users;
    }
}
