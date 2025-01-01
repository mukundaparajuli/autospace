import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  addressName: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  garages: Array<Garage>;
  id?: Maybe<Scalars['String']['output']>;
  lat: Scalars['Int']['output'];
  long: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type AddressWhereUniqueInput = {
  id: Scalars['String']['input'];
};

export type Admin = {
  __typename?: 'Admin';
  createdAt: Scalars['DateTime']['output'];
  id?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  verificationCount: Scalars['Int']['output'];
  verifications: Array<Verification>;
};

export type AdminWhereUniqueInput = {
  id: Scalars['String']['input'];
};

export enum AuthProviderType {
  Credentials = 'CREDENTIALS',
  GithubProvider = 'GITHUB_PROVIDER',
  GoogleProvider = 'GOOGLE_PROVIDER'
}

export type Booking = {
  __typename?: 'Booking';
  bookingTimelineId: Scalars['Int']['output'];
  bookingTimelines: Array<BookingTimeline>;
  createdAt: Scalars['DateTime']['output'];
  customer: Customer;
  customerId: Scalars['String']['output'];
  endTime: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  passcode: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  pricePerHour?: Maybe<Scalars['Int']['output']>;
  slotId: Scalars['String']['output'];
  startTime: Scalars['DateTime']['output'];
  status: BookingStatus;
  totalPrice?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  valetAssignments: Array<ValetAssignment>;
  vehicleNumber: Scalars['String']['output'];
};

export enum BookingStatus {
  Booked = 'BOOKED',
  CheckedIn = 'CHECKED_IN',
  CheckedOut = 'CHECKED_OUT',
  ValetAssignedForCheckIn = 'VALET_ASSIGNED_FOR_CHECK_IN',
  ValetAssignedForCheckOut = 'VALET_ASSIGNED_FOR_CHECK_OUT',
  ValetPickedUp = 'VALET_PICKED_UP',
  ValetReturned = 'VALET_RETURNED'
}

export type BookingTimeline = {
  __typename?: 'BookingTimeline';
  bookingId: Scalars['String']['output'];
  bookingTimeline: Booking;
  id: Scalars['Int']['output'];
  manager: Manager;
  managerId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<BookingStatus>;
  timestamp: Scalars['DateTime']['output'];
  valet: Valet;
  valetId?: Maybe<Scalars['String']['output']>;
};

export type BookingTimelineWhereUniqueInput = {
  id: Scalars['Int']['input'];
};

export type BookingWhereUniqueInput = {
  id: Scalars['String']['input'];
};

export type Company = {
  __typename?: 'Company';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  garages: Array<Manager>;
  id: Scalars['String']['output'];
  managers: Array<Manager>;
  slots: Array<Manager>;
  updatedAt: Scalars['DateTime']['output'];
  valets: Array<Manager>;
};

export type CompanyWhereUniqueInput = {
  id: Scalars['String']['input'];
};

export type CreateAddressInput = {
  addressName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lat: Scalars['Int']['input'];
  long: Scalars['Int']['input'];
};

export type CreateAdminInput = {
  id?: InputMaybe<Scalars['String']['input']>;
};

export type CreateBookingInput = {
  bookingTimelineId: Scalars['Int']['input'];
  customerId: Scalars['String']['input'];
  endTime: Scalars['DateTime']['input'];
  id: Scalars['String']['input'];
  passcode: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  pricePerHour?: InputMaybe<Scalars['Int']['input']>;
  slotId: Scalars['String']['input'];
  startTime: Scalars['DateTime']['input'];
  totalPrice?: InputMaybe<Scalars['Int']['input']>;
  vehicleNumber: Scalars['String']['input'];
};

export type CreateBookingTimelineInput = {
  bookingId: Scalars['String']['input'];
  status?: InputMaybe<BookingStatus>;
};

export type CreateCompanyInput = {
  description: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type CreateCustomerInput = {
  displayName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateGarageInput = {
  addressId: Scalars['String']['input'];
  companyId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  garageName: Scalars['String']['input'];
  id: Scalars['String']['input'];
  image: Array<Scalars['String']['input']>;
};

export type CreateManagerInput = {
  companyId: Scalars['String']['input'];
  displayName: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type CreateReviewInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  customerId: Scalars['String']['input'];
  garageId: Scalars['String']['input'];
  id: Scalars['Int']['input'];
  rating: Scalars['Int']['input'];
};

export type CreateValetAssignmentInput = {
  bookingId: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type CreateVerificationInput = {
  adminId: Scalars['String']['input'];
  garageId: Scalars['String']['input'];
  id: Scalars['String']['input'];
  verified: Scalars['Boolean']['input'];
};

export type Customer = {
  __typename?: 'Customer';
  bookings: Array<Booking>;
  createdAt: Scalars['DateTime']['output'];
  displayName: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  reviews: Array<Booking>;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type CustomerWhereUniqueInput = {
  id: Scalars['String']['input'];
};

export type Garage = {
  __typename?: 'Garage';
  address: Company;
  addressId: Scalars['String']['output'];
  company: Company;
  companyId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  garageName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image: Array<Scalars['String']['output']>;
  reviews: Array<Review>;
  updatedAt: Scalars['DateTime']['output'];
  verifications: Array<Verification>;
};

export type GarageWhereUniqueInput = {
  id: Scalars['String']['input'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginOutput = {
  __typename?: 'LoginOutput';
  token: Scalars['String']['output'];
};

export type Manager = {
  __typename?: 'Manager';
  bookingTimelines: Array<BookingTimeline>;
  company: Company;
  companyId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  displayName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
};

export type ManagerWhereUniqueInput = {
  id: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAddress: Address;
  createAdmin: Admin;
  createBooking: Booking;
  createBookingTimeline: BookingTimeline;
  createCompany: Company;
  createCustomer: Customer;
  createGarage: Garage;
  createManager: Manager;
  createReview: Review;
  createUserWithCredentailsInput: User;
  createUserWithProvidersInput: User;
  createValetAssignment: ValetAssignment;
  createVerification: Verification;
  loginUser: LoginOutput;
  removeAddress: Address;
  removeAdmin: Admin;
  removeBooking: Booking;
  removeBookingTimeline: BookingTimeline;
  removeCompany: Company;
  removeCustomer: Customer;
  removeGarage: Garage;
  removeManager: Manager;
  removeReview: Review;
  removeUser: User;
  removeValetAssignment: ValetAssignment;
  removeVerification: Verification;
  updateAddress: Address;
  updateAdmin: Admin;
  updateBooking: Booking;
  updateBookingTimeline: BookingTimeline;
  updateCompany: Company;
  updateCustomer: Customer;
  updateGarage: Garage;
  updateManager: Manager;
  updateReview: Review;
  updateUser: User;
  updateValetAssignment: ValetAssignment;
  updateVerification: Verification;
};


export type MutationCreateAddressArgs = {
  createAddressInput: CreateAddressInput;
};


export type MutationCreateAdminArgs = {
  createAdminInput: CreateAdminInput;
};


export type MutationCreateBookingArgs = {
  createBookingInput: CreateBookingInput;
};


export type MutationCreateBookingTimelineArgs = {
  createBookingTimelineInput: CreateBookingTimelineInput;
};


export type MutationCreateCompanyArgs = {
  createCompanyInput: CreateCompanyInput;
};


export type MutationCreateCustomerArgs = {
  createCustomerInput: CreateCustomerInput;
};


export type MutationCreateGarageArgs = {
  createGarageInput: CreateGarageInput;
};


export type MutationCreateManagerArgs = {
  createManagerInput: CreateManagerInput;
};


export type MutationCreateReviewArgs = {
  createReviewInput: CreateReviewInput;
};


export type MutationCreateUserWithCredentailsInputArgs = {
  createUserWithCredentailsInput: RegisterWithCredentialsInput;
};


export type MutationCreateUserWithProvidersInputArgs = {
  createUserWithProvidersInput: RegisterWithProvidersInput;
};


export type MutationCreateValetAssignmentArgs = {
  createValetAssignmentInput: CreateValetAssignmentInput;
};


export type MutationCreateVerificationArgs = {
  createVerificationInput: CreateVerificationInput;
};


export type MutationLoginUserArgs = {
  loginInput: LoginInput;
};


export type MutationRemoveAddressArgs = {
  where: AddressWhereUniqueInput;
};


export type MutationRemoveAdminArgs = {
  where: AdminWhereUniqueInput;
};


export type MutationRemoveBookingArgs = {
  where: BookingWhereUniqueInput;
};


export type MutationRemoveBookingTimelineArgs = {
  where: BookingTimelineWhereUniqueInput;
};


export type MutationRemoveCompanyArgs = {
  where: CompanyWhereUniqueInput;
};


export type MutationRemoveCustomerArgs = {
  where: CustomerWhereUniqueInput;
};


export type MutationRemoveGarageArgs = {
  where: GarageWhereUniqueInput;
};


export type MutationRemoveManagerArgs = {
  where: ManagerWhereUniqueInput;
};


export type MutationRemoveReviewArgs = {
  where: ReviewWhereUniqueInput;
};


export type MutationRemoveUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationRemoveValetAssignmentArgs = {
  where: ValetAssignmentWhereUniqueInput;
};


export type MutationRemoveVerificationArgs = {
  where: VerificationWhereUniqueInput;
};


export type MutationUpdateAddressArgs = {
  updateAddressInput: UpdateAddressInput;
};


export type MutationUpdateAdminArgs = {
  updateAdminInput: UpdateAdminInput;
};


export type MutationUpdateBookingArgs = {
  updateBookingInput: UpdateBookingInput;
};


export type MutationUpdateBookingTimelineArgs = {
  updateBookingTimelineInput: UpdateBookingTimelineInput;
};


export type MutationUpdateCompanyArgs = {
  updateCompanyInput: UpdateCompanyInput;
};


export type MutationUpdateCustomerArgs = {
  updateCustomerInput: UpdateCustomerInput;
};


export type MutationUpdateGarageArgs = {
  updateGarageInput: UpdateGarageInput;
};


export type MutationUpdateManagerArgs = {
  updateManagerInput: UpdateManagerInput;
};


export type MutationUpdateReviewArgs = {
  updateReviewInput: UpdateReviewInput;
};


export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};


export type MutationUpdateValetAssignmentArgs = {
  updateValetAssignmentInput: UpdateValetAssignmentInput;
};


export type MutationUpdateVerificationArgs = {
  updateVerificationInput: UpdateVerificationInput;
};

export type Query = {
  __typename?: 'Query';
  address: Address;
  addresses: Array<Address>;
  admin: Admin;
  admins: Array<Admin>;
  booking: Booking;
  bookingTimeline: BookingTimeline;
  bookingTimelines: Array<BookingTimeline>;
  bookings: Array<Booking>;
  companies: Array<Company>;
  company: Company;
  customer: Customer;
  customers: Array<Customer>;
  garage: Garage;
  garages: Array<Garage>;
  manager: Manager;
  managers: Array<Manager>;
  review: Review;
  reviews: Array<Review>;
  user: User;
  users: Array<User>;
  valetAssignment: ValetAssignment;
  valetAssignments: Array<ValetAssignment>;
  verification: Verification;
  verifications: Array<Verification>;
};


export type QueryAddressArgs = {
  where: AddressWhereUniqueInput;
};


export type QueryAdminArgs = {
  where: AdminWhereUniqueInput;
};


export type QueryBookingArgs = {
  where: BookingWhereUniqueInput;
};


export type QueryBookingTimelineArgs = {
  where: BookingTimelineWhereUniqueInput;
};


export type QueryCompanyArgs = {
  where: CompanyWhereUniqueInput;
};


export type QueryCustomerArgs = {
  where: CustomerWhereUniqueInput;
};


export type QueryGarageArgs = {
  where: GarageWhereUniqueInput;
};


export type QueryManagerArgs = {
  where: ManagerWhereUniqueInput;
};


export type QueryReviewArgs = {
  where: ReviewWhereUniqueInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryValetAssignmentArgs = {
  where: ValetAssignmentWhereUniqueInput;
};


export type QueryVerificationArgs = {
  where: VerificationWhereUniqueInput;
};

export type RegisterWithCredentialsInput = {
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type RegisterWithProvidersInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  type?: InputMaybe<AuthProviderType>;
};

export type Review = {
  __typename?: 'Review';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  customer: Customer;
  customerId: Scalars['String']['output'];
  garage: Customer;
  garageId: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ReviewWhereUniqueInput = {
  id: Scalars['Int']['input'];
};

export type UpdateAddressInput = {
  addressName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  lat?: InputMaybe<Scalars['Int']['input']>;
  long?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateAdminInput = {
  id: Scalars['String']['input'];
};

export type UpdateBookingInput = {
  bookingTimelineId?: InputMaybe<Scalars['Int']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['String']['input'];
  passcode?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  pricePerHour?: InputMaybe<Scalars['Int']['input']>;
  slotId?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  totalPrice?: InputMaybe<Scalars['Int']['input']>;
  vehicleNumber?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBookingTimelineInput = {
  bookingId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  status?: InputMaybe<BookingStatus>;
};

export type UpdateCompanyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type UpdateCustomerInput = {
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type UpdateGarageInput = {
  addressId?: InputMaybe<Scalars['String']['input']>;
  companyId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  garageName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  image?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdateManagerInput = {
  companyId?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type UpdateReviewInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  garageId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  rating?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateUserInput = {
  id: Scalars['String']['input'];
};

export type UpdateValetAssignmentInput = {
  bookingId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
};

export type UpdateVerificationInput = {
  adminId?: InputMaybe<Scalars['String']['input']>;
  garageId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  verified?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User = {
  __typename?: 'User';
  admin?: Maybe<Admin>;
  createdAt: Scalars['DateTime']['output'];
  customer?: Maybe<Admin>;
  id?: Maybe<Scalars['String']['output']>;
  image: Scalars['String']['output'];
  manager?: Maybe<Admin>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  valet?: Maybe<Admin>;
};

export type UserWhereUniqueInput = {
  id: Scalars['String']['input'];
};

export type Valet = {
  __typename?: 'Valet';
  companyId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  displayName: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ValetAssignment = {
  __typename?: 'ValetAssignment';
  booking: Booking;
  bookingId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  pickUpLat?: Maybe<Scalars['Int']['output']>;
  pickUpLong?: Maybe<Scalars['Int']['output']>;
  pickupValet: Valet;
  pickupValetId?: Maybe<Scalars['String']['output']>;
  returnLat?: Maybe<Scalars['Int']['output']>;
  returnLong?: Maybe<Scalars['Int']['output']>;
  returnValet: Valet;
  returnValetId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ValetAssignmentWhereUniqueInput = {
  id: Scalars['String']['input'];
};

export type Verification = {
  __typename?: 'Verification';
  admin: Admin;
  adminId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  garage: Admin;
  garageId: Scalars['String']['output'];
  id: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  verified: Scalars['Boolean']['output'];
};

export type VerificationWhereUniqueInput = {
  id: Scalars['String']['input'];
};

export type MutationMutationVariables = Exact<{
  createUserWithCredentailsInput: RegisterWithCredentialsInput;
}>;


export type MutationMutation = { __typename?: 'Mutation', createUserWithCredentailsInput: { __typename?: 'User', id?: string | null, name: string, image: string, createdAt: any, updatedAt: any } };

export const namedOperations = {
  Mutation: {
    Mutation: 'Mutation'
  }
}

export const MutationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Mutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createUserWithCredentailsInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"RegisterWithCredentialsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUserWithCredentailsInput"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createUserWithCredentailsInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createUserWithCredentailsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<MutationMutation, MutationMutationVariables>;