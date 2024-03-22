import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersServices } from "./users.service";
import { CreateUserDto } from "./users.dto";
import { create } from "domain";

@Controller('users')
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