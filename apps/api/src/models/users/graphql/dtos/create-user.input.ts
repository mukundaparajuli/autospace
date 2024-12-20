import { Field, InputType, ObjectType, PickType, registerEnumType } from '@nestjs/graphql';
import { User } from '../entity/user.entity';
import { AuthProviderType } from '@prisma/client';

registerEnumType(AuthProviderType, {
  name: "AuthProviderType"
})

@InputType()
export class RegisterWithProvidersInput extends PickType(
  User,
  ['id', 'name', 'image'],
  InputType,
) {
  @Field(() => AuthProviderType, { nullable: true })
  type: AuthProviderType;
}

@InputType()
export class RegisterWithCredentialsInput {
  @Field({ nullable: true })
  id: string;
  name: string;
  email: string;
  password: string;
  @Field({ nullable: true })
  image?: string;
}

@InputType()
export class LoginInput extends PickType(RegisterWithCredentialsInput,
  [
    'email',
    'password'
  ]
) {
}

@ObjectType()
export class LoginOutput {
  token: string;
}