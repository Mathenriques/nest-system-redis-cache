import { Inject, Injectable } from "@nestjs/common";
import { PrismaService } from "src/config/prisma/prisma.service";
import { CreateUserDto } from "./users.dto";
import { Cache } from "cache-manager";

@Injectable()
export class UsersServices {

  constructor(
    @Inject('CACHE_MANAGER') private cacheManager: Cache,
    private readonly prismaService: PrismaService
  ) {}


  public async getAllUsers() {
    const usersDb = await this.prismaService.user.findMany();

    return usersDb 

  }
  
  public async createUser(data: CreateUserDto) {

    const user = await this.prismaService.user.create({ data })
    
    return user
  }
}