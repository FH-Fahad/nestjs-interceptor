import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserInterceptor } from './interceptors/user-interceptor';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  @UseInterceptors(UserInterceptor)
  getUsers() {
    return this.usersService.getUsers();
  }
}
