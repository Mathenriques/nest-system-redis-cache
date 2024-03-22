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
    const cachedUsers = await this.cacheManager.get('users');

    if (cachedUsers) {
      console.log("Achado no Cache!", cachedUsers);
      return cachedUsers;
    }

    console.log('Busca no Banco de dados!')
    const usersDb = await this.prismaService.user.findMany();

    await this.cacheManager.set('users', usersDb, 10000)

    return usersDb 

  }
  
  public async createUser(data: CreateUserDto) {

    const user = await this.prismaService.user.create({ data })
    
    return user
  }
}