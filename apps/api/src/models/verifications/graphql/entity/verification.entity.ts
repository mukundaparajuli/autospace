import { ObjectType } from '@nestjs/graphql';
import { Verification as VerificationType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class Verification
  implements RestrictProperties<Verification, VerificationType>
{
  id: string;
  createdAt: Date;
  updatedAt: Date;
  verified: boolean;
  adminId: string;
  garageId: string;
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
