import { Body, Controller, Get, Post, UseInterceptors } from "@nestjs/common";
import { UsersServices } from "./users.service";
import { CreateUserDto } from "./users.dto";
import { CacheInterceptor } from "@nestjs/cache-manager";

@Controller('users')
@UseInterceptors(CacheInterceptor)
export class UsersController {

  constructor(private readonly usersService: UsersServices) {}

  @Get()
  async getAllUsers() {
    return this.usersService.getAllUsers()

  }

  @Post()
  async createUser(@Body() userData: CreateUserDto) {
    return this.usersService.createUser(userData)
    
  }
}