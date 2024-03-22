import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/config/prisma/prisma.service";
import { CreateUserDto } from "./users.dto";

@Injectable()
export class UsersServices {

  constructor(private readonly prismaService: PrismaService) {}


  public async getAllUsers() {
    return await this.prismaService.user.findMany();
  }
  
  public async createUser(data: CreateUserDto) {

    const user = await this.prismaService.user.create({ data })
    
    return user
  }
}