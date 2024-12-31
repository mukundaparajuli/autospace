import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './models/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { CustomersModule } from './models/customers/customers.module';
import { AdminsModule } from './models/admins/admins.module';
import { ManagersModule } from './models/managers/managers.module';
// import { ValetsModule } from './models/valets/valets.module';
import { AddressesModule } from './models/addresses/addresses.module';
import { GaragesModule } from './models/garages/garages.module';
// import { SlotsModule } from './models/slots/slots.module';
// import { BookingsModule } from './models/bookings/bookings.module';
import { ValetAssignmentsModule } from './models/valet-assignments/valet-assignments.module';
// import { BookingTimelinesModule } from './models/booking-timelines/booking-timelines.module';
import { VerificationsModule } from './models/verifications/verifications.module';
import { ReviewsModule } from './models/reviews/reviews.module';
import { CompaniesModule } from './models/companies/companies.module';
import { BookingTimelinesModule } from './models/booking-timelines/booking-timelines.module';
import { BookingsModule } from './models/bookings/bookings.module';
import { SlotsModule } from './models/slots/slots.module';
import { ValetsModule } from './models/valets/valets.module';

const MAX_AGE = 24 * 60 * 60;
@Module({
  imports: [
    ConfigModule.forRoot(),

    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: MAX_AGE },
    }),

    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      introspection: true,

      // field resolver enhancers refer to techniques or tools used to extend, modify, or enhance the functionality of field resolvers.

      fieldResolverEnhancers: ['guards'],
      autoSchemaFile: 'schema.gql',
      buildSchemaOptions: {
        numberScalarMode: 'integer', //by default they are in float form
      },
      debug: true,
      playground: true,
    }),
    UsersModule,
    CustomersModule,
    AdminsModule,
    ManagersModule,
    ValetsModule,
    CompaniesModule,
    AddressesModule,
    GaragesModule,
    SlotsModule,
    BookingsModule,
    ValetAssignmentsModule,
    BookingTimelinesModule,
    VerificationsModule,
    ReviewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
