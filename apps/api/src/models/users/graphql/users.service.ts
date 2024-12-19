import { BadRequestException, Injectable } from '@nestjs/common';
import { FindManyUserArgs, FindUniqueUserArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { RegisterWithCredentialsInput, RegisterWithProvidersInput } from './dtos/create-user.input';
import { UpdateUserInput } from './dtos/update-user.input';
import { bcrypt } from "bcryptjs";
import { v4 as uuid } from "uuid";

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) { }

  async registerUserWithCredentialsInput({
    name, image, email, password
  }: RegisterWithCredentialsInput) {

    const checkEmail = await this.prisma.credentails.findUnique({
      where: {
        email
      }
    })
    if (checkEmail) {
      throw new BadRequestException('User already exists')
    }

    const salt = bcrypt.genSaltSync();
    const hashedPassword = await bcrypt.hashSync(password, salt);

    const id = uuid();

    return await this.prisma.user.create({
      data: {
        id,
        name,
        image,
        Credentials: {
          create: {
            email,
            passwordHash: hashedPassword,
          }
        },
        AuthProvider: {
          create: {
            AuthProviderType: 'CREDENTIALS'
          }
        },

      },
      include: {
        Credentials: true
      }
    })
  }

  async registerUserWithProvidersInput({ image, name, id, type }: RegisterWithProvidersInput) {
    return await this.prisma.user.create({
      data: {
        id,
        name,
        image,
        AuthProvider: {
          create: {
            AuthProviderType: type,
          }
        }
      },
    });
  }

  findAll(args: FindManyUserArgs) {
    return this.prisma.user.findMany(args);
  }

  findOne(args: FindUniqueUserArgs) {
    return this.prisma.user.findUnique(args);
  }

  update(updateUserInput: UpdateUserInput) {
    const { id, ...data } = updateUserInput;
    return this.prisma.user.update({
      where: { id },
      data: data,
    });
  }

  remove(args: FindUniqueUserArgs) {
    return this.prisma.user.delete(args);
  }
}
