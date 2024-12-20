import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { FindManyUserArgs, FindUniqueUserArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import {
  RegisterWithCredentialsInput,
  RegisterWithProvidersInput,
} from './dtos/create-user.input';
import { UpdateUserInput } from './dtos/update-user.input';
import bcrypt, { compare, genSaltSync, hashSync } from 'bcryptjs';
import { v4 as uuid } from 'uuid';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService
  ) { }

  async registerUserWithCredentialsInput({
    name,
    image,
    email,
    password,
  }: RegisterWithCredentialsInput) {
    const checkEmail = await this.prisma.credentails.findUnique({
      where: {
        email,
      },
    });
    if (checkEmail) {
      throw new BadRequestException('User already exists');
    }

    const salt = genSaltSync(20)
    const hashedPassword = hashSync(password, salt);

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
          },
        },
        AuthProvider: {
          create: {
            AuthProviderType: 'CREDENTIALS',
          },
        },
      },
      include: {
        Credentials: true,
      },
    });
  }

  async registerUserWithProvidersInput({
    image,
    name,
    id,
    type,
  }: RegisterWithProvidersInput) {
    return await this.prisma.user.create({
      data: {
        id,
        name,
        image,
        AuthProvider: {
          create: {
            AuthProviderType: type,
          },
        },
      },
    });
  }

  async login({
    email,
    password
  }) {

    // get the user 
    const user = await this.prisma.user.findFirst({

      where: {
        Credentials: {
          email
        }
      },
      include: {
        Credentials: true
      }
    })


    // check if that email exists
    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // check if the password matches or not
    const matchPassword = compare(password, user.Credentials.passwordHash);

    if (!matchPassword) {
      throw new UnauthorizedException('Invalid email or password');
    }

    // generate jwt token now
    const jwtToken = this.jwtService.sign(
      {
        'id': user.id
      },
      {
        algorithm: 'HS256'
      }
    )

    return { token: jwtToken };

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
