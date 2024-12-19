import { Field, InputType, PickType } from '@nestjs/graphql';
import { User } from '../entity/user.entity';
import { AuthProviderType } from '@prisma/client';

@InputType()

export class RegisterWithProvidersInput extends PickType(User, ['id', 'name', 'image'], InputType) {
    @Field(() => AuthProviderType)
    type: AuthProviderType
}

export class RegisterWithCredentialsInput {
    @Field({ nullable: true })
    id: string;
    name: string;
    email: string;
    password: string;
    image?: string;
}