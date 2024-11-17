import {
  useQuery,
  useInfiniteQuery,
  useMutation,
  UseQueryOptions,
  UseInfiniteQueryOptions,
  InfiniteData,
  UseMutationOptions,
} from "@tanstack/react-query";
import { gqlFetcher } from "@/lib/gql-request";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: Date | string; output: Date | string };
  JSON: { input: any; output: any };
  Upload: { input: File | Blob; output: File | Blob };
};

export enum AccountStatus {
  Active = "Active",
  Deactivated = "Deactivated",
  Suspended = "Suspended",
}

export type Activity = {
  __typename?: "Activity";
  _count: ActivityCount;
  bookings?: Maybe<Array<Booking>>;
  coverImage?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  createdById: Scalars["Int"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedById?: Maybe<Scalars["Int"]["output"]>;
  description: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  image: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  outlet: Outlet;
  outletId: Scalars["Int"]["output"];
  requirement?: Maybe<Scalars["String"]["output"]>;
  slots?: Maybe<Array<ActivitySlot>>;
  status: ActivityStatus;
  updatedAt: Scalars["DateTime"]["output"];
  updatedById?: Maybe<Scalars["Int"]["output"]>;
};

export type ActivityCount = {
  __typename?: "ActivityCount";
  bookings: Scalars["Int"]["output"];
  slots: Scalars["Int"]["output"];
};

export type ActivityFindManyResult = {
  __typename?: "ActivityFindManyResult";
  data: Array<Activity>;
  total: Scalars["Int"]["output"];
};

export type ActivityListRelationFilter = {
  every?: InputMaybe<ActivityWhereInput>;
  none?: InputMaybe<ActivityWhereInput>;
  some?: InputMaybe<ActivityWhereInput>;
};

export type ActivityOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum ActivityOrderByRelevanceFieldEnum {
  CoverImage = "coverImage",
  Description = "description",
  Name = "name",
  Requirement = "requirement",
}

export type ActivityOrderByRelevanceInput = {
  fields: Array<ActivityOrderByRelevanceFieldEnum>;
  search: Scalars["String"]["input"];
  sort: SortOrder;
};

export type ActivityOrderByWithRelationInput = {
  _relevance?: InputMaybe<ActivityOrderByRelevanceInput>;
  bookings?: InputMaybe<BookingOrderByRelationAggregateInput>;
  coverImage?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrderInput>;
  deletedById?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  outlet?: InputMaybe<OutletOrderByWithRelationInput>;
  outletId?: InputMaybe<SortOrder>;
  requirement?: InputMaybe<SortOrderInput>;
  slots?: InputMaybe<ActivitySlotOrderByRelationAggregateInput>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedById?: InputMaybe<SortOrderInput>;
};

export type ActivityRelationFilter = {
  is?: InputMaybe<ActivityWhereInput>;
  isNot?: InputMaybe<ActivityWhereInput>;
};

export enum ActivityScalarFieldEnum {
  CoverImage = "coverImage",
  CreatedAt = "createdAt",
  CreatedById = "createdById",
  DeletedAt = "deletedAt",
  DeletedById = "deletedById",
  Description = "description",
  Id = "id",
  Name = "name",
  OutletId = "outletId",
  Requirement = "requirement",
  Status = "status",
  UpdatedAt = "updatedAt",
  UpdatedById = "updatedById",
}

export type ActivitySlot = {
  __typename?: "ActivitySlot";
  _count: ActivitySlotCount;
  activity: Activity;
  activityId: Scalars["Int"]["output"];
  bokkings?: Maybe<Array<Booking>>;
  createdAt: Scalars["DateTime"]["output"];
  createdById: Scalars["Int"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedById?: Maybe<Scalars["Int"]["output"]>;
  endTime: Scalars["DateTime"]["output"];
  id: Scalars["Int"]["output"];
  maxParticipants: Scalars["Int"]["output"];
  startTime: Scalars["DateTime"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  updatedById?: Maybe<Scalars["Int"]["output"]>;
};

export type ActivitySlotCount = {
  __typename?: "ActivitySlotCount";
  bokkings: Scalars["Int"]["output"];
};

export type ActivitySlotFindManyResult = {
  __typename?: "ActivitySlotFindManyResult";
  data: Array<ActivitySlot>;
  total: Scalars["Int"]["output"];
};

export type ActivitySlotListRelationFilter = {
  every?: InputMaybe<ActivitySlotWhereInput>;
  none?: InputMaybe<ActivitySlotWhereInput>;
  some?: InputMaybe<ActivitySlotWhereInput>;
};

export type ActivitySlotOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ActivitySlotOrderByWithRelationInput = {
  activity?: InputMaybe<ActivityOrderByWithRelationInput>;
  activityId?: InputMaybe<SortOrder>;
  bokkings?: InputMaybe<BookingOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrderInput>;
  deletedById?: InputMaybe<SortOrderInput>;
  endTime?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  maxParticipants?: InputMaybe<SortOrder>;
  startTime?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedById?: InputMaybe<SortOrderInput>;
};

export type ActivitySlotRelationFilter = {
  is?: InputMaybe<ActivitySlotWhereInput>;
  isNot?: InputMaybe<ActivitySlotWhereInput>;
};

export enum ActivitySlotScalarFieldEnum {
  ActivityId = "activityId",
  CreatedAt = "createdAt",
  CreatedById = "createdById",
  DeletedAt = "deletedAt",
  DeletedById = "deletedById",
  EndTime = "endTime",
  Id = "id",
  MaxParticipants = "maxParticipants",
  StartTime = "startTime",
  UpdatedAt = "updatedAt",
  UpdatedById = "updatedById",
}

export type ActivitySlotWhereInput = {
  AND?: InputMaybe<Array<ActivitySlotWhereInput>>;
  NOT?: InputMaybe<Array<ActivitySlotWhereInput>>;
  OR?: InputMaybe<Array<ActivitySlotWhereInput>>;
  activity?: InputMaybe<ActivityRelationFilter>;
  activityId?: InputMaybe<IntFilter>;
  bokkings?: InputMaybe<BookingListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  endTime?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  maxParticipants?: InputMaybe<IntFilter>;
  startTime?: InputMaybe<DateTimeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
};

export type ActivitySlotWhereUniqueInput = {
  AND?: InputMaybe<Array<ActivitySlotWhereInput>>;
  NOT?: InputMaybe<Array<ActivitySlotWhereInput>>;
  OR?: InputMaybe<Array<ActivitySlotWhereInput>>;
  activity?: InputMaybe<ActivityRelationFilter>;
  activityId?: InputMaybe<IntFilter>;
  bokkings?: InputMaybe<BookingListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  endTime?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  maxParticipants?: InputMaybe<IntFilter>;
  startTime?: InputMaybe<DateTimeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
};

export enum ActivityStatus {
  Available = "Available",
  Unavailable = "Unavailable",
}

export type ActivityWhereInput = {
  AND?: InputMaybe<Array<ActivityWhereInput>>;
  NOT?: InputMaybe<Array<ActivityWhereInput>>;
  OR?: InputMaybe<Array<ActivityWhereInput>>;
  bookings?: InputMaybe<BookingListRelationFilter>;
  coverImage?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  outlet?: InputMaybe<OutletRelationFilter>;
  outletId?: InputMaybe<IntFilter>;
  requirement?: InputMaybe<StringNullableFilter>;
  slots?: InputMaybe<ActivitySlotListRelationFilter>;
  status?: InputMaybe<EnumActivityStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
};

export type ActivityWhereUniqueInput = {
  AND?: InputMaybe<Array<ActivityWhereInput>>;
  NOT?: InputMaybe<Array<ActivityWhereInput>>;
  OR?: InputMaybe<Array<ActivityWhereInput>>;
  bookings?: InputMaybe<BookingListRelationFilter>;
  coverImage?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<StringFilter>;
  outlet?: InputMaybe<OutletRelationFilter>;
  outletId?: InputMaybe<IntFilter>;
  requirement?: InputMaybe<StringNullableFilter>;
  slots?: InputMaybe<ActivitySlotListRelationFilter>;
  status?: InputMaybe<EnumActivityStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
};

export type Admin = {
  __typename?: "Admin";
  _count: AdminCount;
  active: Scalars["Boolean"]["output"];
  allOutlets: Scalars["Boolean"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  createdById?: Maybe<Scalars["Int"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedById?: Maybe<Scalars["Int"]["output"]>;
  email: Scalars["String"]["output"];
  fullName: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  outlets?: Maybe<Array<Outlet>>;
  role: Role;
  updatedAt: Scalars["DateTime"]["output"];
  updatedById?: Maybe<Scalars["Int"]["output"]>;
};

export type AdminCount = {
  __typename?: "AdminCount";
  ApprovedGroup: Scalars["Int"]["output"];
  UserReport: Scalars["Int"]["output"];
  outlets: Scalars["Int"]["output"];
};

export type AdminFindManyResult = {
  __typename?: "AdminFindManyResult";
  data: Array<Admin>;
  total: Scalars["Int"]["output"];
};

export type AdminListRelationFilter = {
  every?: InputMaybe<AdminWhereInput>;
  none?: InputMaybe<AdminWhereInput>;
  some?: InputMaybe<AdminWhereInput>;
};

export type AdminNullableRelationFilter = {
  is?: InputMaybe<AdminWhereInput>;
  isNot?: InputMaybe<AdminWhereInput>;
};

export type AdminOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum AdminOrderByRelevanceFieldEnum {
  Email = "email",
  FullName = "fullName",
  Password = "password",
  RefreshToken = "refreshToken",
  ResetPasswordToken = "resetPasswordToken",
}

export type AdminOrderByRelevanceInput = {
  fields: Array<AdminOrderByRelevanceFieldEnum>;
  search: Scalars["String"]["input"];
  sort: SortOrder;
};

export type AdminOrderByWithRelationInput = {
  ApprovedGroup?: InputMaybe<GroupOrderByRelationAggregateInput>;
  UserReport?: InputMaybe<UserReportOrderByRelationAggregateInput>;
  _relevance?: InputMaybe<AdminOrderByRelevanceInput>;
  active?: InputMaybe<SortOrder>;
  allOutlets?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrderInput>;
  deletedAt?: InputMaybe<SortOrderInput>;
  deletedById?: InputMaybe<SortOrderInput>;
  email?: InputMaybe<SortOrder>;
  fullName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  outlets?: InputMaybe<OutletOrderByRelationAggregateInput>;
  password?: InputMaybe<SortOrder>;
  refreshToken?: InputMaybe<SortOrderInput>;
  refreshTokenExpiry?: InputMaybe<SortOrderInput>;
  resetPasswordExpiry?: InputMaybe<SortOrderInput>;
  resetPasswordToken?: InputMaybe<SortOrderInput>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedById?: InputMaybe<SortOrderInput>;
};

export enum AdminScalarFieldEnum {
  Active = "active",
  AllOutlets = "allOutlets",
  CreatedAt = "createdAt",
  CreatedById = "createdById",
  DeletedAt = "deletedAt",
  DeletedById = "deletedById",
  Email = "email",
  FullName = "fullName",
  Id = "id",
  Password = "password",
  RefreshToken = "refreshToken",
  RefreshTokenExpiry = "refreshTokenExpiry",
  ResetPasswordExpiry = "resetPasswordExpiry",
  ResetPasswordToken = "resetPasswordToken",
  Role = "role",
  UpdatedAt = "updatedAt",
  UpdatedById = "updatedById",
}

export type AdminWhereInput = {
  AND?: InputMaybe<Array<AdminWhereInput>>;
  ApprovedGroup?: InputMaybe<GroupListRelationFilter>;
  NOT?: InputMaybe<Array<AdminWhereInput>>;
  OR?: InputMaybe<Array<AdminWhereInput>>;
  UserReport?: InputMaybe<UserReportListRelationFilter>;
  active?: InputMaybe<BoolFilter>;
  allOutlets?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  email?: InputMaybe<StringFilter>;
  fullName?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  outlets?: InputMaybe<OutletListRelationFilter>;
  password?: InputMaybe<StringFilter>;
  refreshToken?: InputMaybe<StringNullableFilter>;
  refreshTokenExpiry?: InputMaybe<DateTimeNullableFilter>;
  resetPasswordExpiry?: InputMaybe<DateTimeNullableFilter>;
  resetPasswordToken?: InputMaybe<StringNullableFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
};

export type AdminWhereUniqueInput = {
  AND?: InputMaybe<Array<AdminWhereInput>>;
  ApprovedGroup?: InputMaybe<GroupListRelationFilter>;
  NOT?: InputMaybe<Array<AdminWhereInput>>;
  OR?: InputMaybe<Array<AdminWhereInput>>;
  UserReport?: InputMaybe<UserReportListRelationFilter>;
  active?: InputMaybe<BoolFilter>;
  allOutlets?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  fullName?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  outlets?: InputMaybe<OutletListRelationFilter>;
  password?: InputMaybe<StringFilter>;
  refreshToken?: InputMaybe<Scalars["String"]["input"]>;
  refreshTokenExpiry?: InputMaybe<DateTimeNullableFilter>;
  resetPasswordExpiry?: InputMaybe<DateTimeNullableFilter>;
  resetPasswordToken?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<EnumRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
};

export enum ApprovalStatus {
  Approved = "Approved",
  Pending = "Pending",
  Rejected = "Rejected",
}

export type Booking = {
  __typename?: "Booking";
  activity: Activity;
  activityId: Scalars["Int"]["output"];
  activitySlot: ActivitySlot;
  activitySlotId: Scalars["Int"]["output"];
  attendedAt?: Maybe<Scalars["DateTime"]["output"]>;
  cancelledAt?: Maybe<Scalars["DateTime"]["output"]>;
  cancelledById?: Maybe<Scalars["Int"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  customer: Customer;
  customerId: Scalars["Int"]["output"];
  date: Scalars["DateTime"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  dueAt: Scalars["DateTime"]["output"];
  id: Scalars["Int"]["output"];
  notifiedAt?: Maybe<Scalars["DateTime"]["output"]>;
  outlet: Outlet;
  outletId: Scalars["Int"]["output"];
  persons: Scalars["Int"]["output"];
  refNo: Scalars["String"]["output"];
  status: BookingStatus;
  updatedAt: Scalars["DateTime"]["output"];
  verifiedById?: Maybe<Scalars["Int"]["output"]>;
};

export type BookingFindManyResult = {
  __typename?: "BookingFindManyResult";
  data: Array<Booking>;
  total: Scalars["Int"]["output"];
};

export type BookingListRelationFilter = {
  every?: InputMaybe<BookingWhereInput>;
  none?: InputMaybe<BookingWhereInput>;
  some?: InputMaybe<BookingWhereInput>;
};

export type BookingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum BookingOrderByRelevanceFieldEnum {
  RefNo = "refNo",
}

export type BookingOrderByRelevanceInput = {
  fields: Array<BookingOrderByRelevanceFieldEnum>;
  search: Scalars["String"]["input"];
  sort: SortOrder;
};

export type BookingOrderByWithRelationInput = {
  _relevance?: InputMaybe<BookingOrderByRelevanceInput>;
  activity?: InputMaybe<ActivityOrderByWithRelationInput>;
  activityId?: InputMaybe<SortOrder>;
  activitySlot?: InputMaybe<ActivitySlotOrderByWithRelationInput>;
  activitySlotId?: InputMaybe<SortOrder>;
  attendedAt?: InputMaybe<SortOrderInput>;
  cancelledAt?: InputMaybe<SortOrderInput>;
  cancelledById?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  customer?: InputMaybe<CustomerOrderByWithRelationInput>;
  customerId?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrderInput>;
  dueAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  notifiedAt?: InputMaybe<SortOrderInput>;
  outlet?: InputMaybe<OutletOrderByWithRelationInput>;
  outletId?: InputMaybe<SortOrder>;
  persons?: InputMaybe<SortOrder>;
  refNo?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  verifiedById?: InputMaybe<SortOrderInput>;
};

export enum BookingScalarFieldEnum {
  ActivityId = "activityId",
  ActivitySlotId = "activitySlotId",
  AttendedAt = "attendedAt",
  CancelledAt = "cancelledAt",
  CancelledById = "cancelledById",
  CreatedAt = "createdAt",
  CustomerId = "customerId",
  Date = "date",
  DeletedAt = "deletedAt",
  DueAt = "dueAt",
  Id = "id",
  NotifiedAt = "notifiedAt",
  OutletId = "outletId",
  Persons = "persons",
  RefNo = "refNo",
  Status = "status",
  UpdatedAt = "updatedAt",
  VerifiedById = "verifiedById",
}

export enum BookingStatus {
  Attended = "Attended",
  Booked = "Booked",
  Cancelled = "Cancelled",
  Unattended = "Unattended",
}

export type BookingWhereInput = {
  AND?: InputMaybe<Array<BookingWhereInput>>;
  NOT?: InputMaybe<Array<BookingWhereInput>>;
  OR?: InputMaybe<Array<BookingWhereInput>>;
  activity?: InputMaybe<ActivityRelationFilter>;
  activityId?: InputMaybe<IntFilter>;
  activitySlot?: InputMaybe<ActivitySlotRelationFilter>;
  activitySlotId?: InputMaybe<IntFilter>;
  attendedAt?: InputMaybe<DateTimeNullableFilter>;
  cancelledAt?: InputMaybe<DateTimeNullableFilter>;
  cancelledById?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<IntFilter>;
  date?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  dueAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  notifiedAt?: InputMaybe<DateTimeNullableFilter>;
  outlet?: InputMaybe<OutletRelationFilter>;
  outletId?: InputMaybe<IntFilter>;
  persons?: InputMaybe<IntFilter>;
  refNo?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumBookingStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  verifiedById?: InputMaybe<IntNullableFilter>;
};

export type BookingWhereUniqueInput = {
  AND?: InputMaybe<Array<BookingWhereInput>>;
  NOT?: InputMaybe<Array<BookingWhereInput>>;
  OR?: InputMaybe<Array<BookingWhereInput>>;
  activity?: InputMaybe<ActivityRelationFilter>;
  activityId?: InputMaybe<IntFilter>;
  activitySlot?: InputMaybe<ActivitySlotRelationFilter>;
  activitySlotId?: InputMaybe<IntFilter>;
  attendedAt?: InputMaybe<DateTimeNullableFilter>;
  cancelledAt?: InputMaybe<DateTimeNullableFilter>;
  cancelledById?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<IntFilter>;
  date?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  dueAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  notifiedAt?: InputMaybe<DateTimeNullableFilter>;
  outlet?: InputMaybe<OutletRelationFilter>;
  outletId?: InputMaybe<IntFilter>;
  persons?: InputMaybe<IntFilter>;
  refNo?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<EnumBookingStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  verifiedById?: InputMaybe<IntNullableFilter>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars["Boolean"]["input"]>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type CheckIn = {
  __typename?: "CheckIn";
  admitDate?: Maybe<Scalars["DateTime"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  customer: Customer;
  customerId: Scalars["Int"]["output"];
  date: Scalars["DateTime"]["output"];
  id: Scalars["Int"]["output"];
  outlet: Outlet;
  outletId: Scalars["Int"]["output"];
  ticketId?: Maybe<Scalars["String"]["output"]>;
};

export type CheckInFindManyResult = {
  __typename?: "CheckInFindManyResult";
  data: Array<CheckIn>;
  total: Scalars["Int"]["output"];
};

export type CheckInListRelationFilter = {
  every?: InputMaybe<CheckInWhereInput>;
  none?: InputMaybe<CheckInWhereInput>;
  some?: InputMaybe<CheckInWhereInput>;
};

export type CheckInOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum CheckInOrderByRelevanceFieldEnum {
  TicketId = "ticketId",
}

export type CheckInOrderByRelevanceInput = {
  fields: Array<CheckInOrderByRelevanceFieldEnum>;
  search: Scalars["String"]["input"];
  sort: SortOrder;
};

export type CheckInOrderByWithRelationInput = {
  _relevance?: InputMaybe<CheckInOrderByRelevanceInput>;
  admitDate?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  customer?: InputMaybe<CustomerOrderByWithRelationInput>;
  customerId?: InputMaybe<SortOrder>;
  date?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  outlet?: InputMaybe<OutletOrderByWithRelationInput>;
  outletId?: InputMaybe<SortOrder>;
  ticketId?: InputMaybe<SortOrderInput>;
};

export enum CheckInScalarFieldEnum {
  AdmitDate = "admitDate",
  CreatedAt = "createdAt",
  CustomerId = "customerId",
  Date = "date",
  Id = "id",
  OutletId = "outletId",
  TicketId = "ticketId",
}

export type CheckInWhereInput = {
  AND?: InputMaybe<Array<CheckInWhereInput>>;
  NOT?: InputMaybe<Array<CheckInWhereInput>>;
  OR?: InputMaybe<Array<CheckInWhereInput>>;
  admitDate?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<IntFilter>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  outlet?: InputMaybe<OutletRelationFilter>;
  outletId?: InputMaybe<IntFilter>;
  ticketId?: InputMaybe<StringNullableFilter>;
};

export type CheckInWhereUniqueInput = {
  AND?: InputMaybe<Array<CheckInWhereInput>>;
  NOT?: InputMaybe<Array<CheckInWhereInput>>;
  OR?: InputMaybe<Array<CheckInWhereInput>>;
  admitDate?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<IntFilter>;
  date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  outlet?: InputMaybe<OutletRelationFilter>;
  outletId?: InputMaybe<IntFilter>;
  ticketId?: InputMaybe<StringNullableFilter>;
};

export type CreateActivityInput = {
  coverImage?: InputMaybe<Scalars["Upload"]["input"]>;
  description: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  outletId: Scalars["Float"]["input"];
  requirement?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<ActivityStatus>;
};

export type CreateActivitySlotInput = {
  activityId: Scalars["Float"]["input"];
  endTime: Scalars["String"]["input"];
  maxParticipants: Scalars["Float"]["input"];
  startTime: Scalars["String"]["input"];
};

export type CreateAdminInput = {
  allOutlets?: InputMaybe<Scalars["Boolean"]["input"]>;
  email: Scalars["String"]["input"];
  fullName: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  role: Role;
};

export type CreateNewsfeedInput = {
  content: Scalars["String"]["input"];
  coverImage?: InputMaybe<Scalars["Upload"]["input"]>;
  deeplink?: InputMaybe<Scalars["String"]["input"]>;
  thumbnail?: InputMaybe<Scalars["Upload"]["input"]>;
  title: Scalars["String"]["input"];
};

export type CreateOutletInput = {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  address?: InputMaybe<Scalars["String"]["input"]>;
  branchCode?: InputMaybe<Scalars["String"]["input"]>;
  branchFnbCode?: InputMaybe<Scalars["String"]["input"]>;
  checkInRadius?: InputMaybe<Scalars["Float"]["input"]>;
  coverImage?: InputMaybe<Scalars["String"]["input"]>;
  endTime: Scalars["String"]["input"];
  latitude?: InputMaybe<Scalars["Float"]["input"]>;
  longitude?: InputMaybe<Scalars["Float"]["input"]>;
  name: Scalars["String"]["input"];
  startTime: Scalars["String"]["input"];
};

export type CreateRewardInput = {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  description: Scalars["String"]["input"];
  redemptionPoint: Scalars["Float"]["input"];
  termsAndConditions?: InputMaybe<Scalars["String"]["input"]>;
  thumbnail: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
  validityDays: Scalars["Float"]["input"];
};

export type Customer = {
  __typename?: "Customer";
  _count: CustomerCount;
  bookings?: Maybe<Array<Booking>>;
  checkins?: Maybe<Array<CheckIn>>;
  createdAt: Scalars["DateTime"]["output"];
  currentTier?: Maybe<Tier>;
  currentTierId?: Maybe<Scalars["Int"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  dob?: Maybe<Scalars["DateTime"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  exp: Scalars["Int"]["output"];
  experiences?: Maybe<Array<CustomerExperience>>;
  fullName: Scalars["String"]["output"];
  groupEventAttendees?: Maybe<Array<GroupEventAttendee>>;
  groups?: Maybe<Array<GroupUser>>;
  id: Scalars["Int"]["output"];
  managedGroups?: Maybe<Array<Group>>;
  nextTier?: Maybe<Tier>;
  nextTierId?: Maybe<Scalars["Int"]["output"]>;
  notifications?: Maybe<Array<CustomerNotification>>;
  phoneCode: Scalars["String"]["output"];
  phoneNo: Scalars["String"]["output"];
  points: Scalars["Int"]["output"];
  post?: Maybe<Array<Post>>;
  postComments?: Maybe<Array<PostComment>>;
  postLike?: Maybe<Array<PostLike>>;
  profilePicture?: Maybe<Scalars["String"]["output"]>;
  rewards?: Maybe<Array<CustomerReward>>;
  status: AccountStatus;
  unreadCount: Scalars["Int"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
};

export type CustomerCount = {
  __typename?: "CustomerCount";
  bookings: Scalars["Int"]["output"];
  checkins: Scalars["Int"]["output"];
  createdGroupEvents: Scalars["Int"]["output"];
  experiences: Scalars["Int"]["output"];
  groupEventAttendees: Scalars["Int"]["output"];
  groups: Scalars["Int"]["output"];
  managedGroups: Scalars["Int"]["output"];
  notifications: Scalars["Int"]["output"];
  post: Scalars["Int"]["output"];
  postComments: Scalars["Int"]["output"];
  postLike: Scalars["Int"]["output"];
  rewards: Scalars["Int"]["output"];
};

export type CustomerExperience = {
  __typename?: "CustomerExperience";
  createdAt: Scalars["DateTime"]["output"];
  customer: Customer;
  customerId: Scalars["Int"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  experience: Scalars["Int"]["output"];
  expiredAt?: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["Int"]["output"];
  meta?: Maybe<Scalars["JSON"]["output"]>;
  type: ExperienceType;
};

export type CustomerExperienceFindManyResult = {
  __typename?: "CustomerExperienceFindManyResult";
  data: Array<CustomerExperience>;
  total: Scalars["Int"]["output"];
};

export type CustomerExperienceListRelationFilter = {
  every?: InputMaybe<CustomerExperienceWhereInput>;
  none?: InputMaybe<CustomerExperienceWhereInput>;
  some?: InputMaybe<CustomerExperienceWhereInput>;
};

export type CustomerExperienceOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum CustomerExperienceOrderByRelevanceFieldEnum {
  Description = "description",
}

export type CustomerExperienceOrderByRelevanceInput = {
  fields: Array<CustomerExperienceOrderByRelevanceFieldEnum>;
  search: Scalars["String"]["input"];
  sort: SortOrder;
};

export type CustomerExperienceOrderByWithRelationInput = {
  _relevance?: InputMaybe<CustomerExperienceOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  customer?: InputMaybe<CustomerOrderByWithRelationInput>;
  customerId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  experience?: InputMaybe<SortOrder>;
  expiredAt?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  meta?: InputMaybe<SortOrderInput>;
  type?: InputMaybe<SortOrder>;
};

export enum CustomerExperienceScalarFieldEnum {
  CreatedAt = "createdAt",
  CustomerId = "customerId",
  Description = "description",
  Experience = "experience",
  ExpiredAt = "expiredAt",
  Id = "id",
  Meta = "meta",
  Type = "type",
}

export type CustomerExperienceWhereInput = {
  AND?: InputMaybe<Array<CustomerExperienceWhereInput>>;
  NOT?: InputMaybe<Array<CustomerExperienceWhereInput>>;
  OR?: InputMaybe<Array<CustomerExperienceWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<IntFilter>;
  description?: InputMaybe<StringNullableFilter>;
  experience?: InputMaybe<IntFilter>;
  expiredAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  meta?: InputMaybe<JsonNullableFilter>;
  type?: InputMaybe<EnumExperienceTypeFilter>;
};

export type CustomerExperienceWhereUniqueInput = {
  AND?: InputMaybe<Array<CustomerExperienceWhereInput>>;
  NOT?: InputMaybe<Array<CustomerExperienceWhereInput>>;
  OR?: InputMaybe<Array<CustomerExperienceWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<IntFilter>;
  description?: InputMaybe<StringNullableFilter>;
  experience?: InputMaybe<IntFilter>;
  expiredAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  meta?: InputMaybe<JsonNullableFilter>;
  type?: InputMaybe<EnumExperienceTypeFilter>;
};

export type CustomerFindManyResult = {
  __typename?: "CustomerFindManyResult";
  data: Array<Customer>;
  total: Scalars["Int"]["output"];
};

export type CustomerListRelationFilter = {
  every?: InputMaybe<CustomerWhereInput>;
  none?: InputMaybe<CustomerWhereInput>;
  some?: InputMaybe<CustomerWhereInput>;
};

export type CustomerNotification = {
  __typename?: "CustomerNotification";
  bookingId?: Maybe<Scalars["Int"]["output"]>;
  commentId?: Maybe<Scalars["Int"]["output"]>;
  content: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  customer: Customer;
  customerId: Scalars["Int"]["output"];
  customerRewardId?: Maybe<Scalars["Int"]["output"]>;
  deeplink?: Maybe<Scalars["String"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  expId?: Maybe<Scalars["Int"]["output"]>;
  groupId?: Maybe<Scalars["Int"]["output"]>;
  icon?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  metadata?: Maybe<Scalars["JSON"]["output"]>;
  newsfeedId?: Maybe<Scalars["Int"]["output"]>;
  pointId?: Maybe<Scalars["Int"]["output"]>;
  postId?: Maybe<Scalars["Int"]["output"]>;
  readAt?: Maybe<Scalars["DateTime"]["output"]>;
  thumbnail?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
};

export type CustomerNotificationListRelationFilter = {
  every?: InputMaybe<CustomerNotificationWhereInput>;
  none?: InputMaybe<CustomerNotificationWhereInput>;
  some?: InputMaybe<CustomerNotificationWhereInput>;
};

export type CustomerNotificationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CustomerNotificationWhereInput = {
  AND?: InputMaybe<Array<CustomerNotificationWhereInput>>;
  NOT?: InputMaybe<Array<CustomerNotificationWhereInput>>;
  OR?: InputMaybe<Array<CustomerNotificationWhereInput>>;
  bookingId?: InputMaybe<IntNullableFilter>;
  commentId?: InputMaybe<IntNullableFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<IntFilter>;
  customerRewardId?: InputMaybe<IntNullableFilter>;
  deeplink?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  expId?: InputMaybe<IntNullableFilter>;
  groupId?: InputMaybe<IntNullableFilter>;
  icon?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  newsfeedId?: InputMaybe<IntNullableFilter>;
  pointId?: InputMaybe<IntNullableFilter>;
  postId?: InputMaybe<IntNullableFilter>;
  readAt?: InputMaybe<DateTimeNullableFilter>;
  thumbnail?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CustomerNullableRelationFilter = {
  is?: InputMaybe<CustomerWhereInput>;
  isNot?: InputMaybe<CustomerWhereInput>;
};

export type CustomerOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum CustomerOrderByRelevanceFieldEnum {
  Email = "email",
  FcmToken = "fcmToken",
  FullName = "fullName",
  Password = "password",
  PhoneCode = "phoneCode",
  PhoneNo = "phoneNo",
  ProfilePicture = "profilePicture",
  RefreshToken = "refreshToken",
  ResetPasswordToken = "resetPasswordToken",
}

export type CustomerOrderByRelevanceInput = {
  fields: Array<CustomerOrderByRelevanceFieldEnum>;
  search: Scalars["String"]["input"];
  sort: SortOrder;
};

export type CustomerOrderByWithRelationInput = {
  _relevance?: InputMaybe<CustomerOrderByRelevanceInput>;
  bookings?: InputMaybe<BookingOrderByRelationAggregateInput>;
  checkins?: InputMaybe<CheckInOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdGroupEvents?: InputMaybe<GroupEventOrderByRelationAggregateInput>;
  currentTier?: InputMaybe<TierOrderByWithRelationInput>;
  currentTierId?: InputMaybe<SortOrderInput>;
  deletedAt?: InputMaybe<SortOrderInput>;
  dob?: InputMaybe<SortOrderInput>;
  email?: InputMaybe<SortOrderInput>;
  exp?: InputMaybe<SortOrder>;
  experiences?: InputMaybe<CustomerExperienceOrderByRelationAggregateInput>;
  fcmToken?: InputMaybe<SortOrderInput>;
  fullName?: InputMaybe<SortOrder>;
  groupEventAttendees?: InputMaybe<GroupEventAttendeeOrderByRelationAggregateInput>;
  groups?: InputMaybe<GroupUserOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  managedGroups?: InputMaybe<GroupOrderByRelationAggregateInput>;
  nextTier?: InputMaybe<TierOrderByWithRelationInput>;
  nextTierId?: InputMaybe<SortOrderInput>;
  notifications?: InputMaybe<CustomerNotificationOrderByRelationAggregateInput>;
  password?: InputMaybe<SortOrderInput>;
  phoneCode?: InputMaybe<SortOrder>;
  phoneNo?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  post?: InputMaybe<PostOrderByRelationAggregateInput>;
  postComments?: InputMaybe<PostCommentOrderByRelationAggregateInput>;
  postLike?: InputMaybe<PostLikeOrderByRelationAggregateInput>;
  profilePicture?: InputMaybe<SortOrderInput>;
  refreshToken?: InputMaybe<SortOrderInput>;
  refreshTokenExpiry?: InputMaybe<SortOrderInput>;
  resetPasswordExpiry?: InputMaybe<SortOrderInput>;
  resetPasswordToken?: InputMaybe<SortOrderInput>;
  rewards?: InputMaybe<CustomerRewardOrderByRelationAggregateInput>;
  status?: InputMaybe<SortOrder>;
  unreadCount?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type CustomerPoint = {
  __typename?: "CustomerPoint";
  createdAt: Scalars["DateTime"]["output"];
  customerId: Scalars["Int"]["output"];
  customerReward?: Maybe<CustomerReward>;
  customerRewardId?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  expiredAt?: Maybe<Scalars["DateTime"]["output"]>;
  expiredYear?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["Int"]["output"];
  meta?: Maybe<Scalars["JSON"]["output"]>;
  point: Scalars["Int"]["output"];
  receiptAmount?: Maybe<Scalars["Int"]["output"]>;
  receiptDate?: Maybe<Scalars["DateTime"]["output"]>;
  receiptId?: Maybe<Scalars["String"]["output"]>;
  type: PointType;
};

export type CustomerPointFindManyResult = {
  __typename?: "CustomerPointFindManyResult";
  data: Array<CustomerPoint>;
  total: Scalars["Int"]["output"];
};

export type CustomerPointListRelationFilter = {
  every?: InputMaybe<CustomerPointWhereInput>;
  none?: InputMaybe<CustomerPointWhereInput>;
  some?: InputMaybe<CustomerPointWhereInput>;
};

export type CustomerPointOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum CustomerPointOrderByRelevanceFieldEnum {
  Description = "description",
  ReceiptId = "receiptId",
}

export type CustomerPointOrderByRelevanceInput = {
  fields: Array<CustomerPointOrderByRelevanceFieldEnum>;
  search: Scalars["String"]["input"];
  sort: SortOrder;
};

export type CustomerPointOrderByWithRelationInput = {
  _relevance?: InputMaybe<CustomerPointOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  customerId?: InputMaybe<SortOrder>;
  customerReward?: InputMaybe<CustomerRewardOrderByWithRelationInput>;
  customerRewardId?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrderInput>;
  expiredAt?: InputMaybe<SortOrderInput>;
  expiredYear?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  meta?: InputMaybe<SortOrderInput>;
  point?: InputMaybe<SortOrder>;
  receiptAmount?: InputMaybe<SortOrderInput>;
  receiptDate?: InputMaybe<SortOrderInput>;
  receiptId?: InputMaybe<SortOrderInput>;
  type?: InputMaybe<SortOrder>;
};

export enum CustomerPointScalarFieldEnum {
  CreatedAt = "createdAt",
  CustomerId = "customerId",
  CustomerRewardId = "customerRewardId",
  Description = "description",
  ExpiredAt = "expiredAt",
  ExpiredYear = "expiredYear",
  Id = "id",
  Meta = "meta",
  Point = "point",
  ReceiptAmount = "receiptAmount",
  ReceiptDate = "receiptDate",
  ReceiptId = "receiptId",
  Type = "type",
}

export type CustomerPointWhereInput = {
  AND?: InputMaybe<Array<CustomerPointWhereInput>>;
  NOT?: InputMaybe<Array<CustomerPointWhereInput>>;
  OR?: InputMaybe<Array<CustomerPointWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customerId?: InputMaybe<IntFilter>;
  customerReward?: InputMaybe<CustomerRewardNullableRelationFilter>;
  customerRewardId?: InputMaybe<IntNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  expiredAt?: InputMaybe<DateTimeNullableFilter>;
  expiredYear?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  meta?: InputMaybe<JsonNullableFilter>;
  point?: InputMaybe<IntFilter>;
  receiptAmount?: InputMaybe<IntNullableFilter>;
  receiptDate?: InputMaybe<DateTimeNullableFilter>;
  receiptId?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<EnumPointTypeFilter>;
};

export type CustomerPointWhereUniqueInput = {
  AND?: InputMaybe<Array<CustomerPointWhereInput>>;
  NOT?: InputMaybe<Array<CustomerPointWhereInput>>;
  OR?: InputMaybe<Array<CustomerPointWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customerId?: InputMaybe<IntFilter>;
  customerReward?: InputMaybe<CustomerRewardNullableRelationFilter>;
  customerRewardId?: InputMaybe<IntNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  expiredAt?: InputMaybe<DateTimeNullableFilter>;
  expiredYear?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  meta?: InputMaybe<JsonNullableFilter>;
  point?: InputMaybe<IntFilter>;
  receiptAmount?: InputMaybe<IntNullableFilter>;
  receiptDate?: InputMaybe<DateTimeNullableFilter>;
  receiptId?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<EnumPointTypeFilter>;
};

export type CustomerRelationFilter = {
  is?: InputMaybe<CustomerWhereInput>;
  isNot?: InputMaybe<CustomerWhereInput>;
};

export type CustomerReward = {
  __typename?: "CustomerReward";
  _count: CustomerRewardCount;
  createdAt: Scalars["DateTime"]["output"];
  customer: Customer;
  customerId: Scalars["Int"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  description: Scalars["String"]["output"];
  expiredAt?: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["Int"]["output"];
  redemptionPoint: Scalars["Int"]["output"];
  remark?: Maybe<Scalars["String"]["output"]>;
  reward: Reward;
  rewardId: Scalars["Int"]["output"];
  termsAndConditions: Scalars["String"]["output"];
  thumbnail: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  usedAt?: Maybe<Scalars["DateTime"]["output"]>;
  validityDays: Scalars["Int"]["output"];
};

export type CustomerRewardCount = {
  __typename?: "CustomerRewardCount";
  CustomerPoint: Scalars["Int"]["output"];
};

export type CustomerRewardFindManyResult = {
  __typename?: "CustomerRewardFindManyResult";
  data: Array<CustomerReward>;
  total: Scalars["Int"]["output"];
};

export type CustomerRewardListRelationFilter = {
  every?: InputMaybe<CustomerRewardWhereInput>;
  none?: InputMaybe<CustomerRewardWhereInput>;
  some?: InputMaybe<CustomerRewardWhereInput>;
};

export type CustomerRewardNullableRelationFilter = {
  is?: InputMaybe<CustomerRewardWhereInput>;
  isNot?: InputMaybe<CustomerRewardWhereInput>;
};

export type CustomerRewardOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum CustomerRewardOrderByRelevanceFieldEnum {
  Description = "description",
  Remark = "remark",
  TermsAndConditions = "termsAndConditions",
  Thumbnail = "thumbnail",
  Title = "title",
}

export type CustomerRewardOrderByRelevanceInput = {
  fields: Array<CustomerRewardOrderByRelevanceFieldEnum>;
  search: Scalars["String"]["input"];
  sort: SortOrder;
};

export type CustomerRewardOrderByWithRelationInput = {
  CustomerPoint?: InputMaybe<CustomerPointOrderByRelationAggregateInput>;
  _relevance?: InputMaybe<CustomerRewardOrderByRelevanceInput>;
  createdAt?: InputMaybe<SortOrder>;
  customer?: InputMaybe<CustomerOrderByWithRelationInput>;
  customerId?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrder>;
  expiredAt?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  redemptionPoint?: InputMaybe<SortOrder>;
  remark?: InputMaybe<SortOrderInput>;
  reward?: InputMaybe<RewardOrderByWithRelationInput>;
  rewardId?: InputMaybe<SortOrder>;
  termsAndConditions?: InputMaybe<SortOrder>;
  thumbnail?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  usedAt?: InputMaybe<SortOrderInput>;
  validityDays?: InputMaybe<SortOrder>;
};

export enum CustomerRewardScalarFieldEnum {
  CreatedAt = "createdAt",
  CustomerId = "customerId",
  DeletedAt = "deletedAt",
  Description = "description",
  ExpiredAt = "expiredAt",
  Id = "id",
  RedemptionPoint = "redemptionPoint",
  Remark = "remark",
  RewardId = "rewardId",
  TermsAndConditions = "termsAndConditions",
  Thumbnail = "thumbnail",
  Title = "title",
  UpdatedAt = "updatedAt",
  UsedAt = "usedAt",
  ValidityDays = "validityDays",
}

export type CustomerRewardWhereInput = {
  AND?: InputMaybe<Array<CustomerRewardWhereInput>>;
  CustomerPoint?: InputMaybe<CustomerPointListRelationFilter>;
  NOT?: InputMaybe<Array<CustomerRewardWhereInput>>;
  OR?: InputMaybe<Array<CustomerRewardWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<IntFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  expiredAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  redemptionPoint?: InputMaybe<IntFilter>;
  remark?: InputMaybe<StringNullableFilter>;
  reward?: InputMaybe<RewardRelationFilter>;
  rewardId?: InputMaybe<IntFilter>;
  termsAndConditions?: InputMaybe<StringFilter>;
  thumbnail?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  usedAt?: InputMaybe<DateTimeNullableFilter>;
  validityDays?: InputMaybe<IntFilter>;
};

export type CustomerRewardWhereUniqueInput = {
  AND?: InputMaybe<Array<CustomerRewardWhereInput>>;
  CustomerPoint?: InputMaybe<CustomerPointListRelationFilter>;
  NOT?: InputMaybe<Array<CustomerRewardWhereInput>>;
  OR?: InputMaybe<Array<CustomerRewardWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<IntFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  expiredAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  redemptionPoint?: InputMaybe<IntFilter>;
  remark?: InputMaybe<StringNullableFilter>;
  reward?: InputMaybe<RewardRelationFilter>;
  rewardId?: InputMaybe<IntFilter>;
  termsAndConditions?: InputMaybe<StringFilter>;
  thumbnail?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  usedAt?: InputMaybe<DateTimeNullableFilter>;
  validityDays?: InputMaybe<IntFilter>;
};

export enum CustomerScalarFieldEnum {
  CreatedAt = "createdAt",
  CurrentTierId = "currentTierId",
  DeletedAt = "deletedAt",
  Dob = "dob",
  Email = "email",
  Exp = "exp",
  FcmToken = "fcmToken",
  FullName = "fullName",
  Id = "id",
  NextTierId = "nextTierId",
  Password = "password",
  PhoneCode = "phoneCode",
  PhoneNo = "phoneNo",
  Points = "points",
  ProfilePicture = "profilePicture",
  RefreshToken = "refreshToken",
  RefreshTokenExpiry = "refreshTokenExpiry",
  ResetPasswordExpiry = "resetPasswordExpiry",
  ResetPasswordToken = "resetPasswordToken",
  Status = "status",
  UnreadCount = "unreadCount",
  UpdatedAt = "updatedAt",
}

export type CustomerWhereInput = {
  AND?: InputMaybe<Array<CustomerWhereInput>>;
  NOT?: InputMaybe<Array<CustomerWhereInput>>;
  OR?: InputMaybe<Array<CustomerWhereInput>>;
  bookings?: InputMaybe<BookingListRelationFilter>;
  checkins?: InputMaybe<CheckInListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdGroupEvents?: InputMaybe<GroupEventListRelationFilter>;
  currentTier?: InputMaybe<TierNullableRelationFilter>;
  currentTierId?: InputMaybe<IntNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  dob?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringNullableFilter>;
  exp?: InputMaybe<IntFilter>;
  experiences?: InputMaybe<CustomerExperienceListRelationFilter>;
  fcmToken?: InputMaybe<StringNullableFilter>;
  fullName?: InputMaybe<StringFilter>;
  groupEventAttendees?: InputMaybe<GroupEventAttendeeListRelationFilter>;
  groups?: InputMaybe<GroupUserListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  managedGroups?: InputMaybe<GroupListRelationFilter>;
  nextTier?: InputMaybe<TierNullableRelationFilter>;
  nextTierId?: InputMaybe<IntNullableFilter>;
  notifications?: InputMaybe<CustomerNotificationListRelationFilter>;
  password?: InputMaybe<StringNullableFilter>;
  phoneCode?: InputMaybe<StringFilter>;
  phoneNo?: InputMaybe<StringFilter>;
  points?: InputMaybe<IntFilter>;
  post?: InputMaybe<PostListRelationFilter>;
  postComments?: InputMaybe<PostCommentListRelationFilter>;
  postLike?: InputMaybe<PostLikeListRelationFilter>;
  profilePicture?: InputMaybe<StringNullableFilter>;
  refreshToken?: InputMaybe<StringNullableFilter>;
  refreshTokenExpiry?: InputMaybe<DateTimeNullableFilter>;
  resetPasswordExpiry?: InputMaybe<DateTimeNullableFilter>;
  resetPasswordToken?: InputMaybe<StringNullableFilter>;
  rewards?: InputMaybe<CustomerRewardListRelationFilter>;
  status?: InputMaybe<EnumAccountStatusFilter>;
  unreadCount?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CustomerWhereUniqueInput = {
  AND?: InputMaybe<Array<CustomerWhereInput>>;
  NOT?: InputMaybe<Array<CustomerWhereInput>>;
  OR?: InputMaybe<Array<CustomerWhereInput>>;
  bookings?: InputMaybe<BookingListRelationFilter>;
  checkins?: InputMaybe<CheckInListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdGroupEvents?: InputMaybe<GroupEventListRelationFilter>;
  currentTier?: InputMaybe<TierNullableRelationFilter>;
  currentTierId?: InputMaybe<IntNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  dob?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringNullableFilter>;
  exp?: InputMaybe<IntFilter>;
  experiences?: InputMaybe<CustomerExperienceListRelationFilter>;
  fcmToken?: InputMaybe<StringNullableFilter>;
  fullName?: InputMaybe<StringFilter>;
  groupEventAttendees?: InputMaybe<GroupEventAttendeeListRelationFilter>;
  groups?: InputMaybe<GroupUserListRelationFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  managedGroups?: InputMaybe<GroupListRelationFilter>;
  nextTier?: InputMaybe<TierNullableRelationFilter>;
  nextTierId?: InputMaybe<IntNullableFilter>;
  notifications?: InputMaybe<CustomerNotificationListRelationFilter>;
  password?: InputMaybe<StringNullableFilter>;
  phoneCode?: InputMaybe<StringFilter>;
  phoneNo?: InputMaybe<StringFilter>;
  points?: InputMaybe<IntFilter>;
  post?: InputMaybe<PostListRelationFilter>;
  postComments?: InputMaybe<PostCommentListRelationFilter>;
  postLike?: InputMaybe<PostLikeListRelationFilter>;
  profilePicture?: InputMaybe<StringNullableFilter>;
  refreshToken?: InputMaybe<StringNullableFilter>;
  refreshTokenExpiry?: InputMaybe<DateTimeNullableFilter>;
  resetPasswordExpiry?: InputMaybe<DateTimeNullableFilter>;
  resetPasswordToken?: InputMaybe<StringNullableFilter>;
  rewards?: InputMaybe<CustomerRewardListRelationFilter>;
  status?: InputMaybe<EnumAccountStatusFilter>;
  unreadCount?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars["DateTime"]["input"]>;
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars["DateTime"]["input"]>;
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
};

export type EnumAccountStatusFilter = {
  equals?: InputMaybe<AccountStatus>;
  in?: InputMaybe<Array<AccountStatus>>;
  not?: InputMaybe<NestedEnumAccountStatusFilter>;
  notIn?: InputMaybe<Array<AccountStatus>>;
};

export type EnumActivityStatusFilter = {
  equals?: InputMaybe<ActivityStatus>;
  in?: InputMaybe<Array<ActivityStatus>>;
  not?: InputMaybe<NestedEnumActivityStatusFilter>;
  notIn?: InputMaybe<Array<ActivityStatus>>;
};

export type EnumApprovalStatusFilter = {
  equals?: InputMaybe<ApprovalStatus>;
  in?: InputMaybe<Array<ApprovalStatus>>;
  not?: InputMaybe<NestedEnumApprovalStatusFilter>;
  notIn?: InputMaybe<Array<ApprovalStatus>>;
};

export type EnumBookingStatusFilter = {
  equals?: InputMaybe<BookingStatus>;
  in?: InputMaybe<Array<BookingStatus>>;
  not?: InputMaybe<NestedEnumBookingStatusFilter>;
  notIn?: InputMaybe<Array<BookingStatus>>;
};

export type EnumExperienceTypeFilter = {
  equals?: InputMaybe<ExperienceType>;
  in?: InputMaybe<Array<ExperienceType>>;
  not?: InputMaybe<NestedEnumExperienceTypeFilter>;
  notIn?: InputMaybe<Array<ExperienceType>>;
};

export type EnumGroupUserStatusFilter = {
  equals?: InputMaybe<GroupUserStatus>;
  in?: InputMaybe<Array<GroupUserStatus>>;
  not?: InputMaybe<NestedEnumGroupUserStatusFilter>;
  notIn?: InputMaybe<Array<GroupUserStatus>>;
};

export type EnumMedaiTypeFilter = {
  equals?: InputMaybe<MedaiType>;
  in?: InputMaybe<Array<MedaiType>>;
  not?: InputMaybe<NestedEnumMedaiTypeFilter>;
  notIn?: InputMaybe<Array<MedaiType>>;
};

export type EnumPointTypeFilter = {
  equals?: InputMaybe<PointType>;
  in?: InputMaybe<Array<PointType>>;
  not?: InputMaybe<NestedEnumPointTypeFilter>;
  notIn?: InputMaybe<Array<PointType>>;
};

export type EnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type EnumSettingKeyFilter = {
  equals?: InputMaybe<SettingKey>;
  in?: InputMaybe<Array<SettingKey>>;
  not?: InputMaybe<NestedEnumSettingKeyFilter>;
  notIn?: InputMaybe<Array<SettingKey>>;
};

export type EnumUserReportStatusFilter = {
  equals?: InputMaybe<UserReportStatus>;
  in?: InputMaybe<Array<UserReportStatus>>;
  not?: InputMaybe<NestedEnumUserReportStatusFilter>;
  notIn?: InputMaybe<Array<UserReportStatus>>;
};

export enum ExperienceType {
  AttendBookedActivity = "ATTEND_BOOKED_ACTIVITY",
  AttendGroupEvent = "ATTEND_GROUP_EVENT",
  CheckIn = "CHECK_IN",
}

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

export type Group = {
  __typename?: "Group";
  _count: GroupCount;
  admin?: Maybe<Customer>;
  adminId?: Maybe<Scalars["Int"]["output"]>;
  approvedAt?: Maybe<Scalars["DateTime"]["output"]>;
  coverImage?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  createdById?: Maybe<Scalars["Int"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedById?: Maybe<Scalars["Int"]["output"]>;
  description: Scalars["String"]["output"];
  groupEvents?: Maybe<Array<GroupEvent>>;
  id: Scalars["Int"]["output"];
  lastActivityAt?: Maybe<Scalars["DateTime"]["output"]>;
  memberCount: Scalars["Int"]["output"];
  members?: Maybe<Array<GroupUser>>;
  minAge?: Maybe<Scalars["Int"]["output"]>;
  name: Scalars["String"]["output"];
  posts?: Maybe<Array<Post>>;
  postsCount: Scalars["Int"]["output"];
  rejectedAt?: Maybe<Scalars["DateTime"]["output"]>;
  rejectedReason?: Maybe<Scalars["String"]["output"]>;
  reviewedBy?: Maybe<Admin>;
  reviewedById?: Maybe<Scalars["Int"]["output"]>;
  status: ApprovalStatus;
  submittedAt?: Maybe<Scalars["DateTime"]["output"]>;
  tagLine?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
  updatedById?: Maybe<Scalars["Int"]["output"]>;
};

export type GroupCount = {
  __typename?: "GroupCount";
  groupEvents: Scalars["Int"]["output"];
  members: Scalars["Int"]["output"];
  posts: Scalars["Int"]["output"];
};

export type GroupEvent = {
  __typename?: "GroupEvent";
  _count: GroupEventCount;
  attendees?: Maybe<Array<GroupEventAttendee>>;
  attendeesCount: Scalars["Int"]["output"];
  coverImage?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  createdById?: Maybe<Scalars["Int"]["output"]>;
  creator: Customer;
  customerId: Scalars["Int"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedById?: Maybe<Scalars["Int"]["output"]>;
  description: Scalars["String"]["output"];
  eventDate: Scalars["DateTime"]["output"];
  group: Group;
  groupId: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  minAge?: Maybe<Scalars["Int"]["output"]>;
  outlet: Outlet;
  outletId: Scalars["Int"]["output"];
  post: Post;
  postId: Scalars["Int"]["output"];
  startTime: Scalars["DateTime"]["output"];
  status: ApprovalStatus;
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  updatedById?: Maybe<Scalars["Int"]["output"]>;
};

export type GroupEventAttendee = {
  __typename?: "GroupEventAttendee";
  createdAt: Scalars["DateTime"]["output"];
  customer: Customer;
  customerId: Scalars["Int"]["output"];
  groupEvent: GroupEvent;
  groupEventId: Scalars["Int"]["output"];
};

export type GroupEventAttendeeFindManyResult = {
  __typename?: "GroupEventAttendeeFindManyResult";
  data: Array<GroupEventAttendee>;
  total: Scalars["Int"]["output"];
};

export type GroupEventAttendeeGroupEventIdCustomerIdCompoundUniqueInput = {
  customerId: Scalars["Int"]["input"];
  groupEventId: Scalars["Int"]["input"];
};

export type GroupEventAttendeeListRelationFilter = {
  every?: InputMaybe<GroupEventAttendeeWhereInput>;
  none?: InputMaybe<GroupEventAttendeeWhereInput>;
  some?: InputMaybe<GroupEventAttendeeWhereInput>;
};

export type GroupEventAttendeeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type GroupEventAttendeeOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  customer?: InputMaybe<CustomerOrderByWithRelationInput>;
  customerId?: InputMaybe<SortOrder>;
  groupEvent?: InputMaybe<GroupEventOrderByWithRelationInput>;
  groupEventId?: InputMaybe<SortOrder>;
};

export enum GroupEventAttendeeScalarFieldEnum {
  CreatedAt = "createdAt",
  CustomerId = "customerId",
  GroupEventId = "groupEventId",
}

export type GroupEventAttendeeWhereInput = {
  AND?: InputMaybe<Array<GroupEventAttendeeWhereInput>>;
  NOT?: InputMaybe<Array<GroupEventAttendeeWhereInput>>;
  OR?: InputMaybe<Array<GroupEventAttendeeWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<IntFilter>;
  groupEvent?: InputMaybe<GroupEventRelationFilter>;
  groupEventId?: InputMaybe<IntFilter>;
};

export type GroupEventAttendeeWhereUniqueInput = {
  AND?: InputMaybe<Array<GroupEventAttendeeWhereInput>>;
  NOT?: InputMaybe<Array<GroupEventAttendeeWhereInput>>;
  OR?: InputMaybe<Array<GroupEventAttendeeWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<IntFilter>;
  groupEvent?: InputMaybe<GroupEventRelationFilter>;
  groupEventId?: InputMaybe<IntFilter>;
  groupEventId_customerId?: InputMaybe<GroupEventAttendeeGroupEventIdCustomerIdCompoundUniqueInput>;
};

export type GroupEventCount = {
  __typename?: "GroupEventCount";
  attendees: Scalars["Int"]["output"];
};

export type GroupEventFindManyResult = {
  __typename?: "GroupEventFindManyResult";
  data: Array<GroupEvent>;
  total: Scalars["Int"]["output"];
};

export type GroupEventListRelationFilter = {
  every?: InputMaybe<GroupEventWhereInput>;
  none?: InputMaybe<GroupEventWhereInput>;
  some?: InputMaybe<GroupEventWhereInput>;
};

export type GroupEventNullableRelationFilter = {
  is?: InputMaybe<GroupEventWhereInput>;
  isNot?: InputMaybe<GroupEventWhereInput>;
};

export type GroupEventOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum GroupEventOrderByRelevanceFieldEnum {
  CoverImage = "coverImage",
  Description = "description",
  Title = "title",
}

export type GroupEventOrderByRelevanceInput = {
  fields: Array<GroupEventOrderByRelevanceFieldEnum>;
  search: Scalars["String"]["input"];
  sort: SortOrder;
};

export type GroupEventOrderByWithRelationInput = {
  _relevance?: InputMaybe<GroupEventOrderByRelevanceInput>;
  attendees?: InputMaybe<GroupEventAttendeeOrderByRelationAggregateInput>;
  attendeesCount?: InputMaybe<SortOrder>;
  coverImage?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrderInput>;
  creator?: InputMaybe<CustomerOrderByWithRelationInput>;
  customerId?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrderInput>;
  deletedById?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrder>;
  eventDate?: InputMaybe<SortOrder>;
  group?: InputMaybe<GroupOrderByWithRelationInput>;
  groupId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  minAge?: InputMaybe<SortOrderInput>;
  outlet?: InputMaybe<OutletOrderByWithRelationInput>;
  outletId?: InputMaybe<SortOrder>;
  post?: InputMaybe<PostOrderByWithRelationInput>;
  postId?: InputMaybe<SortOrder>;
  startTime?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedById?: InputMaybe<SortOrderInput>;
};

export type GroupEventRelationFilter = {
  is?: InputMaybe<GroupEventWhereInput>;
  isNot?: InputMaybe<GroupEventWhereInput>;
};

export enum GroupEventScalarFieldEnum {
  AttendeesCount = "attendeesCount",
  CoverImage = "coverImage",
  CreatedAt = "createdAt",
  CreatedById = "createdById",
  CustomerId = "customerId",
  DeletedAt = "deletedAt",
  DeletedById = "deletedById",
  Description = "description",
  EventDate = "eventDate",
  GroupId = "groupId",
  Id = "id",
  MinAge = "minAge",
  OutletId = "outletId",
  PostId = "postId",
  StartTime = "startTime",
  Status = "status",
  Title = "title",
  UpdatedAt = "updatedAt",
  UpdatedById = "updatedById",
}

export type GroupEventWhereInput = {
  AND?: InputMaybe<Array<GroupEventWhereInput>>;
  NOT?: InputMaybe<Array<GroupEventWhereInput>>;
  OR?: InputMaybe<Array<GroupEventWhereInput>>;
  attendees?: InputMaybe<GroupEventAttendeeListRelationFilter>;
  attendeesCount?: InputMaybe<IntFilter>;
  coverImage?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  creator?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<IntFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  description?: InputMaybe<StringFilter>;
  eventDate?: InputMaybe<DateTimeFilter>;
  group?: InputMaybe<GroupRelationFilter>;
  groupId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  minAge?: InputMaybe<IntNullableFilter>;
  outlet?: InputMaybe<OutletRelationFilter>;
  outletId?: InputMaybe<IntFilter>;
  post?: InputMaybe<PostRelationFilter>;
  postId?: InputMaybe<IntFilter>;
  startTime?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EnumApprovalStatusFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
};

export type GroupEventWhereUniqueInput = {
  AND?: InputMaybe<Array<GroupEventWhereInput>>;
  NOT?: InputMaybe<Array<GroupEventWhereInput>>;
  OR?: InputMaybe<Array<GroupEventWhereInput>>;
  attendees?: InputMaybe<GroupEventAttendeeListRelationFilter>;
  attendeesCount?: InputMaybe<IntFilter>;
  coverImage?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  creator?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<IntFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  description?: InputMaybe<StringFilter>;
  eventDate?: InputMaybe<DateTimeFilter>;
  group?: InputMaybe<GroupRelationFilter>;
  groupId?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  minAge?: InputMaybe<IntNullableFilter>;
  outlet?: InputMaybe<OutletRelationFilter>;
  outletId?: InputMaybe<IntFilter>;
  post?: InputMaybe<PostRelationFilter>;
  postId?: InputMaybe<Scalars["Int"]["input"]>;
  startTime?: InputMaybe<DateTimeFilter>;
  status?: InputMaybe<EnumApprovalStatusFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
};

export type GroupFindManyResult = {
  __typename?: "GroupFindManyResult";
  data: Array<Group>;
  total: Scalars["Int"]["output"];
};

export type GroupListRelationFilter = {
  every?: InputMaybe<GroupWhereInput>;
  none?: InputMaybe<GroupWhereInput>;
  some?: InputMaybe<GroupWhereInput>;
};

export type GroupOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum GroupOrderByRelevanceFieldEnum {
  CoverImage = "coverImage",
  Description = "description",
  Name = "name",
  RejectedReason = "rejectedReason",
  TagLine = "tagLine",
}

export type GroupOrderByRelevanceInput = {
  fields: Array<GroupOrderByRelevanceFieldEnum>;
  search: Scalars["String"]["input"];
  sort: SortOrder;
};

export type GroupOrderByWithRelationInput = {
  _relevance?: InputMaybe<GroupOrderByRelevanceInput>;
  admin?: InputMaybe<CustomerOrderByWithRelationInput>;
  adminId?: InputMaybe<SortOrderInput>;
  approvedAt?: InputMaybe<SortOrderInput>;
  coverImage?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrderInput>;
  deletedAt?: InputMaybe<SortOrderInput>;
  deletedById?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrder>;
  groupEvents?: InputMaybe<GroupEventOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  lastActivityAt?: InputMaybe<SortOrderInput>;
  memberCount?: InputMaybe<SortOrder>;
  members?: InputMaybe<GroupUserOrderByRelationAggregateInput>;
  minAge?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  posts?: InputMaybe<PostOrderByRelationAggregateInput>;
  postsCount?: InputMaybe<SortOrder>;
  rejectedAt?: InputMaybe<SortOrderInput>;
  rejectedReason?: InputMaybe<SortOrderInput>;
  reviewedBy?: InputMaybe<AdminOrderByWithRelationInput>;
  reviewedById?: InputMaybe<SortOrderInput>;
  status?: InputMaybe<SortOrder>;
  submittedAt?: InputMaybe<SortOrderInput>;
  tagLine?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedById?: InputMaybe<SortOrderInput>;
};

export type GroupRelationFilter = {
  is?: InputMaybe<GroupWhereInput>;
  isNot?: InputMaybe<GroupWhereInput>;
};

export enum GroupScalarFieldEnum {
  AdminId = "adminId",
  ApprovedAt = "approvedAt",
  CoverImage = "coverImage",
  CreatedAt = "createdAt",
  CreatedById = "createdById",
  DeletedAt = "deletedAt",
  DeletedById = "deletedById",
  Description = "description",
  Id = "id",
  LastActivityAt = "lastActivityAt",
  MemberCount = "memberCount",
  MinAge = "minAge",
  Name = "name",
  PostsCount = "postsCount",
  RejectedAt = "rejectedAt",
  RejectedReason = "rejectedReason",
  ReviewedById = "reviewedById",
  Status = "status",
  SubmittedAt = "submittedAt",
  TagLine = "tagLine",
  UpdatedAt = "updatedAt",
  UpdatedById = "updatedById",
}

export type GroupUser = {
  __typename?: "GroupUser";
  createdAt: Scalars["DateTime"]["output"];
  customer: Customer;
  customerId: Scalars["Int"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  group: Group;
  groupId: Scalars["Int"]["output"];
  joinedAt?: Maybe<Scalars["DateTime"]["output"]>;
  kickedAt?: Maybe<Scalars["DateTime"]["output"]>;
  rejectedAt?: Maybe<Scalars["DateTime"]["output"]>;
  reviewedById?: Maybe<Scalars["Int"]["output"]>;
  status: GroupUserStatus;
};

export type GroupUserFindManyResult = {
  __typename?: "GroupUserFindManyResult";
  data: Array<GroupUser>;
  total: Scalars["Int"]["output"];
};

export type GroupUserGroupIdCustomerIdCompoundUniqueInput = {
  customerId: Scalars["Int"]["input"];
  groupId: Scalars["Int"]["input"];
};

export type GroupUserListRelationFilter = {
  every?: InputMaybe<GroupUserWhereInput>;
  none?: InputMaybe<GroupUserWhereInput>;
  some?: InputMaybe<GroupUserWhereInput>;
};

export type GroupUserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type GroupUserOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  customer?: InputMaybe<CustomerOrderByWithRelationInput>;
  customerId?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrderInput>;
  group?: InputMaybe<GroupOrderByWithRelationInput>;
  groupId?: InputMaybe<SortOrder>;
  joinedAt?: InputMaybe<SortOrderInput>;
  kickedAt?: InputMaybe<SortOrderInput>;
  rejectedAt?: InputMaybe<SortOrderInput>;
  reviewedById?: InputMaybe<SortOrderInput>;
  status?: InputMaybe<SortOrder>;
};

export enum GroupUserScalarFieldEnum {
  CreatedAt = "createdAt",
  CustomerId = "customerId",
  DeletedAt = "deletedAt",
  GroupId = "groupId",
  JoinedAt = "joinedAt",
  KickedAt = "kickedAt",
  RejectedAt = "rejectedAt",
  ReviewedById = "reviewedById",
  Status = "status",
}

export enum GroupUserStatus {
  Approved = "Approved",
  Invited = "Invited",
  Kicked = "Kicked",
  Pending = "Pending",
  Rejected = "Rejected",
}

export type GroupUserWhereInput = {
  AND?: InputMaybe<Array<GroupUserWhereInput>>;
  NOT?: InputMaybe<Array<GroupUserWhereInput>>;
  OR?: InputMaybe<Array<GroupUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<IntFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  group?: InputMaybe<GroupRelationFilter>;
  groupId?: InputMaybe<IntFilter>;
  joinedAt?: InputMaybe<DateTimeNullableFilter>;
  kickedAt?: InputMaybe<DateTimeNullableFilter>;
  rejectedAt?: InputMaybe<DateTimeNullableFilter>;
  reviewedById?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<EnumGroupUserStatusFilter>;
};

export type GroupUserWhereUniqueInput = {
  AND?: InputMaybe<Array<GroupUserWhereInput>>;
  NOT?: InputMaybe<Array<GroupUserWhereInput>>;
  OR?: InputMaybe<Array<GroupUserWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<IntFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  group?: InputMaybe<GroupRelationFilter>;
  groupId?: InputMaybe<IntFilter>;
  groupId_customerId?: InputMaybe<GroupUserGroupIdCustomerIdCompoundUniqueInput>;
  joinedAt?: InputMaybe<DateTimeNullableFilter>;
  kickedAt?: InputMaybe<DateTimeNullableFilter>;
  rejectedAt?: InputMaybe<DateTimeNullableFilter>;
  reviewedById?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<EnumGroupUserStatusFilter>;
};

export type GroupWhereInput = {
  AND?: InputMaybe<Array<GroupWhereInput>>;
  NOT?: InputMaybe<Array<GroupWhereInput>>;
  OR?: InputMaybe<Array<GroupWhereInput>>;
  admin?: InputMaybe<CustomerNullableRelationFilter>;
  adminId?: InputMaybe<IntNullableFilter>;
  approvedAt?: InputMaybe<DateTimeNullableFilter>;
  coverImage?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  description?: InputMaybe<StringFilter>;
  groupEvents?: InputMaybe<GroupEventListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  lastActivityAt?: InputMaybe<DateTimeNullableFilter>;
  memberCount?: InputMaybe<IntFilter>;
  members?: InputMaybe<GroupUserListRelationFilter>;
  minAge?: InputMaybe<IntNullableFilter>;
  name?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostListRelationFilter>;
  postsCount?: InputMaybe<IntFilter>;
  rejectedAt?: InputMaybe<DateTimeNullableFilter>;
  rejectedReason?: InputMaybe<StringNullableFilter>;
  reviewedBy?: InputMaybe<AdminNullableRelationFilter>;
  reviewedById?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<EnumApprovalStatusFilter>;
  submittedAt?: InputMaybe<DateTimeNullableFilter>;
  tagLine?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
};

export type GroupWhereUniqueInput = {
  AND?: InputMaybe<Array<GroupWhereInput>>;
  NOT?: InputMaybe<Array<GroupWhereInput>>;
  OR?: InputMaybe<Array<GroupWhereInput>>;
  admin?: InputMaybe<CustomerNullableRelationFilter>;
  adminId?: InputMaybe<IntNullableFilter>;
  approvedAt?: InputMaybe<DateTimeNullableFilter>;
  coverImage?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  description?: InputMaybe<StringFilter>;
  groupEvents?: InputMaybe<GroupEventListRelationFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  lastActivityAt?: InputMaybe<DateTimeNullableFilter>;
  memberCount?: InputMaybe<IntFilter>;
  members?: InputMaybe<GroupUserListRelationFilter>;
  minAge?: InputMaybe<IntNullableFilter>;
  name?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostListRelationFilter>;
  postsCount?: InputMaybe<IntFilter>;
  rejectedAt?: InputMaybe<DateTimeNullableFilter>;
  rejectedReason?: InputMaybe<StringNullableFilter>;
  reviewedBy?: InputMaybe<AdminNullableRelationFilter>;
  reviewedById?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<EnumApprovalStatusFilter>;
  submittedAt?: InputMaybe<DateTimeNullableFilter>;
  tagLine?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type JsonNullableFilter = {
  array_contains?: InputMaybe<Scalars["JSON"]["input"]>;
  array_ends_with?: InputMaybe<Scalars["JSON"]["input"]>;
  array_starts_with?: InputMaybe<Scalars["JSON"]["input"]>;
  equals?: InputMaybe<Scalars["JSON"]["input"]>;
  gt?: InputMaybe<Scalars["JSON"]["input"]>;
  gte?: InputMaybe<Scalars["JSON"]["input"]>;
  lt?: InputMaybe<Scalars["JSON"]["input"]>;
  lte?: InputMaybe<Scalars["JSON"]["input"]>;
  not?: InputMaybe<Scalars["JSON"]["input"]>;
  path?: InputMaybe<Scalars["String"]["input"]>;
  string_contains?: InputMaybe<Scalars["String"]["input"]>;
  string_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  string_starts_with?: InputMaybe<Scalars["String"]["input"]>;
};

export enum MedaiType {
  Image = "Image",
  Video = "Video",
}

export type Mutation = {
  __typename?: "Mutation";
  approveGroup: Group;
  cancelBooking: Booking;
  changePassword: Scalars["Boolean"]["output"];
  confirmBookingAttendance: Booking;
  createActivity: Activity;
  createActivitySlot: ActivitySlot;
  createAdmin: Admin;
  createNewsfeed: Newsfeed;
  createOutlet: Outlet;
  createReward: Reward;
  deleteActivity: Scalars["Boolean"]["output"];
  deleteActivitySlot: Scalars["Boolean"]["output"];
  deleteAdmin: Scalars["Boolean"]["output"];
  deleteGroup: Scalars["Boolean"]["output"];
  deleteGroupEvent: Scalars["Boolean"]["output"];
  deleteNewsfeed: Scalars["Boolean"]["output"];
  deleteOutlet: Scalars["Boolean"]["output"];
  deleteReward: Scalars["Boolean"]["output"];
  publishNewsfeed: Newsfeed;
  reviewGroup: Group;
  reviewUserReport: UserReport;
  updateAccountInfo: Admin;
  updateActivity: Activity;
  updateActivitySlot: ActivitySlot;
  updateAdmin: Admin;
  updateCustomer: Customer;
  updateGroup: Group;
  updateGroupEvent: GroupEvent;
  updateNewsfeed: Newsfeed;
  updateOutlet: Outlet;
  updateOutlets: Admin;
  updateReward: Reward;
  updateSetting: Setting;
  updateTier: Tier;
};

export type MutationApproveGroupArgs = {
  approved: Scalars["Boolean"]["input"];
  id: Scalars["Float"]["input"];
  rejectedReason?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationCancelBookingArgs = {
  id: Scalars["Float"]["input"];
};

export type MutationChangePasswordArgs = {
  newPassword: Scalars["String"]["input"];
  oldPassword: Scalars["String"]["input"];
};

export type MutationConfirmBookingAttendanceArgs = {
  bookingNo: Scalars["String"]["input"];
};

export type MutationCreateActivityArgs = {
  input: CreateActivityInput;
};

export type MutationCreateActivitySlotArgs = {
  input: CreateActivitySlotInput;
};

export type MutationCreateAdminArgs = {
  input: CreateAdminInput;
};

export type MutationCreateNewsfeedArgs = {
  input: CreateNewsfeedInput;
};

export type MutationCreateOutletArgs = {
  input: CreateOutletInput;
};

export type MutationCreateRewardArgs = {
  input: CreateRewardInput;
};

export type MutationDeleteActivityArgs = {
  id: Scalars["Float"]["input"];
};

export type MutationDeleteActivitySlotArgs = {
  id: Scalars["Float"]["input"];
};

export type MutationDeleteAdminArgs = {
  id: Scalars["Float"]["input"];
};

export type MutationDeleteGroupArgs = {
  id: Scalars["Float"]["input"];
};

export type MutationDeleteGroupEventArgs = {
  id: Scalars["Float"]["input"];
};

export type MutationDeleteNewsfeedArgs = {
  id: Scalars["Float"]["input"];
};

export type MutationDeleteOutletArgs = {
  id: Scalars["Float"]["input"];
};

export type MutationDeleteRewardArgs = {
  id: Scalars["Float"]["input"];
};

export type MutationPublishNewsfeedArgs = {
  id: Scalars["Float"]["input"];
  publish: Scalars["Boolean"]["input"];
};

export type MutationReviewGroupArgs = {
  approved: Scalars["Boolean"]["input"];
  id: Scalars["Float"]["input"];
  rejectedReason?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationReviewUserReportArgs = {
  id: Scalars["Float"]["input"];
  input: ReviewUserReportInput;
};

export type MutationUpdateAccountInfoArgs = {
  input: UpdateAccountInfoInput;
};

export type MutationUpdateActivityArgs = {
  id: Scalars["Float"]["input"];
  input: UpdateActivityInput;
};

export type MutationUpdateActivitySlotArgs = {
  id: Scalars["Float"]["input"];
  input: UpdateActivitySlotInput;
};

export type MutationUpdateAdminArgs = {
  id: Scalars["Float"]["input"];
  input: UpdateAdminInput;
};

export type MutationUpdateCustomerArgs = {
  id: Scalars["Float"]["input"];
  input: UpdateCustomerInput;
};

export type MutationUpdateGroupArgs = {
  id: Scalars["Float"]["input"];
  input: UpdateGroupInput;
};

export type MutationUpdateGroupEventArgs = {
  id: Scalars["Float"]["input"];
  input: UpdateGroupEventInput;
};

export type MutationUpdateNewsfeedArgs = {
  id: Scalars["Float"]["input"];
  input: UpdateNewsfeedInput;
};

export type MutationUpdateOutletArgs = {
  id: Scalars["Float"]["input"];
  input: UpdateOutletInput;
};

export type MutationUpdateOutletsArgs = {
  id: Scalars["Float"]["input"];
  outletIds: Array<Scalars["Int"]["input"]>;
};

export type MutationUpdateRewardArgs = {
  id: Scalars["Float"]["input"];
  input: UpdateRewardInput;
};

export type MutationUpdateSettingArgs = {
  id: Scalars["Float"]["input"];
  input: UpdateSettingInput;
};

export type MutationUpdateTierArgs = {
  id: Scalars["Float"]["input"];
  input: UpdateTierInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars["Boolean"]["input"]>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars["DateTime"]["input"]>;
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars["DateTime"]["input"]>;
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]["input"]>>;
};

export type NestedEnumAccountStatusFilter = {
  equals?: InputMaybe<AccountStatus>;
  in?: InputMaybe<Array<AccountStatus>>;
  not?: InputMaybe<NestedEnumAccountStatusFilter>;
  notIn?: InputMaybe<Array<AccountStatus>>;
};

export type NestedEnumActivityStatusFilter = {
  equals?: InputMaybe<ActivityStatus>;
  in?: InputMaybe<Array<ActivityStatus>>;
  not?: InputMaybe<NestedEnumActivityStatusFilter>;
  notIn?: InputMaybe<Array<ActivityStatus>>;
};

export type NestedEnumApprovalStatusFilter = {
  equals?: InputMaybe<ApprovalStatus>;
  in?: InputMaybe<Array<ApprovalStatus>>;
  not?: InputMaybe<NestedEnumApprovalStatusFilter>;
  notIn?: InputMaybe<Array<ApprovalStatus>>;
};

export type NestedEnumBookingStatusFilter = {
  equals?: InputMaybe<BookingStatus>;
  in?: InputMaybe<Array<BookingStatus>>;
  not?: InputMaybe<NestedEnumBookingStatusFilter>;
  notIn?: InputMaybe<Array<BookingStatus>>;
};

export type NestedEnumExperienceTypeFilter = {
  equals?: InputMaybe<ExperienceType>;
  in?: InputMaybe<Array<ExperienceType>>;
  not?: InputMaybe<NestedEnumExperienceTypeFilter>;
  notIn?: InputMaybe<Array<ExperienceType>>;
};

export type NestedEnumGroupUserStatusFilter = {
  equals?: InputMaybe<GroupUserStatus>;
  in?: InputMaybe<Array<GroupUserStatus>>;
  not?: InputMaybe<NestedEnumGroupUserStatusFilter>;
  notIn?: InputMaybe<Array<GroupUserStatus>>;
};

export type NestedEnumMedaiTypeFilter = {
  equals?: InputMaybe<MedaiType>;
  in?: InputMaybe<Array<MedaiType>>;
  not?: InputMaybe<NestedEnumMedaiTypeFilter>;
  notIn?: InputMaybe<Array<MedaiType>>;
};

export type NestedEnumPointTypeFilter = {
  equals?: InputMaybe<PointType>;
  in?: InputMaybe<Array<PointType>>;
  not?: InputMaybe<NestedEnumPointTypeFilter>;
  notIn?: InputMaybe<Array<PointType>>;
};

export type NestedEnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedEnumSettingKeyFilter = {
  equals?: InputMaybe<SettingKey>;
  in?: InputMaybe<Array<SettingKey>>;
  not?: InputMaybe<NestedEnumSettingKeyFilter>;
  notIn?: InputMaybe<Array<SettingKey>>;
};

export type NestedEnumUserReportStatusFilter = {
  equals?: InputMaybe<UserReportStatus>;
  in?: InputMaybe<Array<UserReportStatus>>;
  not?: InputMaybe<NestedEnumUserReportStatusFilter>;
  notIn?: InputMaybe<Array<UserReportStatus>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Float"]["input"]>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type Newsfeed = {
  __typename?: "Newsfeed";
  content: Scalars["String"]["output"];
  coverImage?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  createdById: Scalars["Int"]["output"];
  deeplink?: Maybe<Scalars["String"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedById?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["Int"]["output"];
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  thumbnail?: Maybe<Scalars["String"]["output"]>;
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  updatedById?: Maybe<Scalars["Int"]["output"]>;
};

export type NewsfeedFindManyResult = {
  __typename?: "NewsfeedFindManyResult";
  data: Array<Newsfeed>;
  total: Scalars["Int"]["output"];
};

export enum NewsfeedOrderByRelevanceFieldEnum {
  Content = "content",
  CoverImage = "coverImage",
  Deeplink = "deeplink",
  Thumbnail = "thumbnail",
  Title = "title",
}

export type NewsfeedOrderByRelevanceInput = {
  fields: Array<NewsfeedOrderByRelevanceFieldEnum>;
  search: Scalars["String"]["input"];
  sort: SortOrder;
};

export type NewsfeedOrderByWithRelationInput = {
  _relevance?: InputMaybe<NewsfeedOrderByRelevanceInput>;
  content?: InputMaybe<SortOrder>;
  coverImage?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrder>;
  deeplink?: InputMaybe<SortOrderInput>;
  deletedAt?: InputMaybe<SortOrderInput>;
  deletedById?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  publishedAt?: InputMaybe<SortOrderInput>;
  thumbnail?: InputMaybe<SortOrderInput>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedById?: InputMaybe<SortOrderInput>;
};

export enum NewsfeedScalarFieldEnum {
  Content = "content",
  CoverImage = "coverImage",
  CreatedAt = "createdAt",
  CreatedById = "createdById",
  Deeplink = "deeplink",
  DeletedAt = "deletedAt",
  DeletedById = "deletedById",
  Id = "id",
  PublishedAt = "publishedAt",
  Thumbnail = "thumbnail",
  Title = "title",
  UpdatedAt = "updatedAt",
  UpdatedById = "updatedById",
}

export type NewsfeedWhereInput = {
  AND?: InputMaybe<Array<NewsfeedWhereInput>>;
  NOT?: InputMaybe<Array<NewsfeedWhereInput>>;
  OR?: InputMaybe<Array<NewsfeedWhereInput>>;
  content?: InputMaybe<StringFilter>;
  coverImage?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntFilter>;
  deeplink?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  publishedAt?: InputMaybe<DateTimeNullableFilter>;
  thumbnail?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
};

export type NewsfeedWhereUniqueInput = {
  AND?: InputMaybe<Array<NewsfeedWhereInput>>;
  NOT?: InputMaybe<Array<NewsfeedWhereInput>>;
  OR?: InputMaybe<Array<NewsfeedWhereInput>>;
  content?: InputMaybe<StringFilter>;
  coverImage?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntFilter>;
  deeplink?: InputMaybe<StringNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  publishedAt?: InputMaybe<DateTimeNullableFilter>;
  thumbnail?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
};

export enum NullsOrder {
  First = "first",
  Last = "last",
}

export type Outlet = {
  __typename?: "Outlet";
  _count: OutletCount;
  active: Scalars["Boolean"]["output"];
  activities?: Maybe<Array<Activity>>;
  address?: Maybe<Scalars["String"]["output"]>;
  admins?: Maybe<Array<Admin>>;
  bookings?: Maybe<Array<Booking>>;
  branchCode?: Maybe<Scalars["String"]["output"]>;
  branchFnbCode?: Maybe<Scalars["String"]["output"]>;
  checkInRadius: Scalars["Int"]["output"];
  checkins?: Maybe<Array<CheckIn>>;
  coverImage?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  createdById: Scalars["Int"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedById?: Maybe<Scalars["Int"]["output"]>;
  endTime: Scalars["DateTime"]["output"];
  endTimeStr: Scalars["String"]["output"];
  groupEvents?: Maybe<Array<GroupEvent>>;
  id: Scalars["Int"]["output"];
  latitude?: Maybe<Scalars["Float"]["output"]>;
  longitude?: Maybe<Scalars["Float"]["output"]>;
  name: Scalars["String"]["output"];
  startTime: Scalars["DateTime"]["output"];
  startTimeStr: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  updatedById?: Maybe<Scalars["Int"]["output"]>;
};

export type OutletCount = {
  __typename?: "OutletCount";
  activities: Scalars["Int"]["output"];
  admins: Scalars["Int"]["output"];
  bookings: Scalars["Int"]["output"];
  checkins: Scalars["Int"]["output"];
  groupEvents: Scalars["Int"]["output"];
};

export type OutletFindManyResult = {
  __typename?: "OutletFindManyResult";
  data: Array<Outlet>;
  total: Scalars["Int"]["output"];
};

export type OutletListRelationFilter = {
  every?: InputMaybe<OutletWhereInput>;
  none?: InputMaybe<OutletWhereInput>;
  some?: InputMaybe<OutletWhereInput>;
};

export type OutletOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum OutletOrderByRelevanceFieldEnum {
  Address = "address",
  BranchCode = "branchCode",
  BranchFnbCode = "branchFnbCode",
  CoverImage = "coverImage",
  Name = "name",
}

export type OutletOrderByRelevanceInput = {
  fields: Array<OutletOrderByRelevanceFieldEnum>;
  search: Scalars["String"]["input"];
  sort: SortOrder;
};

export type OutletOrderByWithRelationInput = {
  _relevance?: InputMaybe<OutletOrderByRelevanceInput>;
  active?: InputMaybe<SortOrder>;
  activities?: InputMaybe<ActivityOrderByRelationAggregateInput>;
  address?: InputMaybe<SortOrderInput>;
  admins?: InputMaybe<AdminOrderByRelationAggregateInput>;
  bookings?: InputMaybe<BookingOrderByRelationAggregateInput>;
  branchCode?: InputMaybe<SortOrderInput>;
  branchFnbCode?: InputMaybe<SortOrderInput>;
  checkInRadius?: InputMaybe<SortOrder>;
  checkins?: InputMaybe<CheckInOrderByRelationAggregateInput>;
  coverImage?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrderInput>;
  deletedById?: InputMaybe<SortOrderInput>;
  endTime?: InputMaybe<SortOrder>;
  groupEvents?: InputMaybe<GroupEventOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  latitude?: InputMaybe<SortOrderInput>;
  longitude?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  startTime?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedById?: InputMaybe<SortOrderInput>;
};

export type OutletRelationFilter = {
  is?: InputMaybe<OutletWhereInput>;
  isNot?: InputMaybe<OutletWhereInput>;
};

export enum OutletScalarFieldEnum {
  Active = "active",
  Address = "address",
  BranchCode = "branchCode",
  BranchFnbCode = "branchFnbCode",
  CheckInRadius = "checkInRadius",
  CoverImage = "coverImage",
  CreatedAt = "createdAt",
  CreatedById = "createdById",
  DeletedAt = "deletedAt",
  DeletedById = "deletedById",
  EndTime = "endTime",
  Id = "id",
  Latitude = "latitude",
  Longitude = "longitude",
  Name = "name",
  StartTime = "startTime",
  UpdatedAt = "updatedAt",
  UpdatedById = "updatedById",
}

export type OutletWhereInput = {
  AND?: InputMaybe<Array<OutletWhereInput>>;
  NOT?: InputMaybe<Array<OutletWhereInput>>;
  OR?: InputMaybe<Array<OutletWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  activities?: InputMaybe<ActivityListRelationFilter>;
  address?: InputMaybe<StringNullableFilter>;
  admins?: InputMaybe<AdminListRelationFilter>;
  bookings?: InputMaybe<BookingListRelationFilter>;
  branchCode?: InputMaybe<StringNullableFilter>;
  branchFnbCode?: InputMaybe<StringNullableFilter>;
  checkInRadius?: InputMaybe<IntFilter>;
  checkins?: InputMaybe<CheckInListRelationFilter>;
  coverImage?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  endTime?: InputMaybe<DateTimeFilter>;
  groupEvents?: InputMaybe<GroupEventListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  latitude?: InputMaybe<FloatNullableFilter>;
  longitude?: InputMaybe<FloatNullableFilter>;
  name?: InputMaybe<StringFilter>;
  startTime?: InputMaybe<DateTimeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
};

export type OutletWhereUniqueInput = {
  AND?: InputMaybe<Array<OutletWhereInput>>;
  NOT?: InputMaybe<Array<OutletWhereInput>>;
  OR?: InputMaybe<Array<OutletWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  activities?: InputMaybe<ActivityListRelationFilter>;
  address?: InputMaybe<StringNullableFilter>;
  admins?: InputMaybe<AdminListRelationFilter>;
  bookings?: InputMaybe<BookingListRelationFilter>;
  branchCode?: InputMaybe<StringNullableFilter>;
  branchFnbCode?: InputMaybe<StringNullableFilter>;
  checkInRadius?: InputMaybe<IntFilter>;
  checkins?: InputMaybe<CheckInListRelationFilter>;
  coverImage?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  endTime?: InputMaybe<DateTimeFilter>;
  groupEvents?: InputMaybe<GroupEventListRelationFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  latitude?: InputMaybe<FloatNullableFilter>;
  longitude?: InputMaybe<FloatNullableFilter>;
  name?: InputMaybe<StringFilter>;
  startTime?: InputMaybe<DateTimeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
};

export enum PointType {
  AttendGroupEvent = "ATTEND_GROUP_EVENT",
  CheckIn = "CHECK_IN",
  Expired = "EXPIRED",
  Redeem = "REDEEM",
  SpendOnCafe = "SPEND_ON_CAFE",
  Void = "VOID",
}

export type Post = {
  __typename?: "Post";
  _count: PostCount;
  approvedAt?: Maybe<Scalars["DateTime"]["output"]>;
  comments?: Maybe<Array<PostComment>>;
  commentsCount: Scalars["Int"]["output"];
  content: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  createdByUserId?: Maybe<Scalars["Int"]["output"]>;
  customer: Customer;
  customerId: Scalars["Int"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedByUserId?: Maybe<Scalars["Int"]["output"]>;
  group: Group;
  groupEvent?: Maybe<GroupEvent>;
  groupId: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  likes?: Maybe<Array<PostLike>>;
  likesCount: Scalars["Int"]["output"];
  medias?: Maybe<Array<PostMedia>>;
  rejectedAt?: Maybe<Scalars["DateTime"]["output"]>;
  rejectedReason?: Maybe<Scalars["String"]["output"]>;
  reviewedById?: Maybe<Scalars["Int"]["output"]>;
  status: ApprovalStatus;
  updatedAt: Scalars["DateTime"]["output"];
  updatedByUserId?: Maybe<Scalars["Int"]["output"]>;
};

export type PostComment = {
  __typename?: "PostComment";
  content: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  customer: Customer;
  customerId: Scalars["Int"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedById?: Maybe<Scalars["Int"]["output"]>;
  deletedReason?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  post: Post;
  postId: Scalars["Int"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
};

export type PostCommentFindManyResult = {
  __typename?: "PostCommentFindManyResult";
  data: Array<PostComment>;
  total: Scalars["Int"]["output"];
};

export type PostCommentListRelationFilter = {
  every?: InputMaybe<PostCommentWhereInput>;
  none?: InputMaybe<PostCommentWhereInput>;
  some?: InputMaybe<PostCommentWhereInput>;
};

export type PostCommentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum PostCommentOrderByRelevanceFieldEnum {
  Content = "content",
  DeletedReason = "deletedReason",
}

export type PostCommentOrderByRelevanceInput = {
  fields: Array<PostCommentOrderByRelevanceFieldEnum>;
  search: Scalars["String"]["input"];
  sort: SortOrder;
};

export type PostCommentOrderByWithRelationInput = {
  _relevance?: InputMaybe<PostCommentOrderByRelevanceInput>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  customer?: InputMaybe<CustomerOrderByWithRelationInput>;
  customerId?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrderInput>;
  deletedById?: InputMaybe<SortOrderInput>;
  deletedReason?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  post?: InputMaybe<PostOrderByWithRelationInput>;
  postId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum PostCommentScalarFieldEnum {
  Content = "content",
  CreatedAt = "createdAt",
  CustomerId = "customerId",
  DeletedAt = "deletedAt",
  DeletedById = "deletedById",
  DeletedReason = "deletedReason",
  Id = "id",
  PostId = "postId",
  UpdatedAt = "updatedAt",
}

export type PostCommentWhereInput = {
  AND?: InputMaybe<Array<PostCommentWhereInput>>;
  NOT?: InputMaybe<Array<PostCommentWhereInput>>;
  OR?: InputMaybe<Array<PostCommentWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<IntFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  deletedReason?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  post?: InputMaybe<PostRelationFilter>;
  postId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PostCommentWhereUniqueInput = {
  AND?: InputMaybe<Array<PostCommentWhereInput>>;
  NOT?: InputMaybe<Array<PostCommentWhereInput>>;
  OR?: InputMaybe<Array<PostCommentWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<IntFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  deletedReason?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  post?: InputMaybe<PostRelationFilter>;
  postId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PostCount = {
  __typename?: "PostCount";
  comments: Scalars["Int"]["output"];
  likes: Scalars["Int"]["output"];
  medias: Scalars["Int"]["output"];
};

export type PostFindManyResult = {
  __typename?: "PostFindManyResult";
  data: Array<Post>;
  total: Scalars["Int"]["output"];
};

export type PostLike = {
  __typename?: "PostLike";
  createdAt: Scalars["DateTime"]["output"];
  customer: Customer;
  customerId: Scalars["Int"]["output"];
  post: Post;
  postId: Scalars["Int"]["output"];
};

export type PostLikeListRelationFilter = {
  every?: InputMaybe<PostLikeWhereInput>;
  none?: InputMaybe<PostLikeWhereInput>;
  some?: InputMaybe<PostLikeWhereInput>;
};

export type PostLikeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PostLikeWhereInput = {
  AND?: InputMaybe<Array<PostLikeWhereInput>>;
  NOT?: InputMaybe<Array<PostLikeWhereInput>>;
  OR?: InputMaybe<Array<PostLikeWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<IntFilter>;
  post?: InputMaybe<PostRelationFilter>;
  postId?: InputMaybe<IntFilter>;
};

export type PostListRelationFilter = {
  every?: InputMaybe<PostWhereInput>;
  none?: InputMaybe<PostWhereInput>;
  some?: InputMaybe<PostWhereInput>;
};

export type PostMedia = {
  __typename?: "PostMedia";
  createdAt: Scalars["DateTime"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  id: Scalars["Int"]["output"];
  post: Post;
  postId: Scalars["Int"]["output"];
  sequence: Scalars["Int"]["output"];
  type: MedaiType;
  updatedAt: Scalars["DateTime"]["output"];
  url: Scalars["String"]["output"];
};

export type PostMediaListRelationFilter = {
  every?: InputMaybe<PostMediaWhereInput>;
  none?: InputMaybe<PostMediaWhereInput>;
  some?: InputMaybe<PostMediaWhereInput>;
};

export type PostMediaOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PostMediaWhereInput = {
  AND?: InputMaybe<Array<PostMediaWhereInput>>;
  NOT?: InputMaybe<Array<PostMediaWhereInput>>;
  OR?: InputMaybe<Array<PostMediaWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  post?: InputMaybe<PostRelationFilter>;
  postId?: InputMaybe<IntFilter>;
  sequence?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumMedaiTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  url?: InputMaybe<StringFilter>;
};

export type PostOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum PostOrderByRelevanceFieldEnum {
  Content = "content",
  RejectedReason = "rejectedReason",
}

export type PostOrderByRelevanceInput = {
  fields: Array<PostOrderByRelevanceFieldEnum>;
  search: Scalars["String"]["input"];
  sort: SortOrder;
};

export type PostOrderByWithRelationInput = {
  _relevance?: InputMaybe<PostOrderByRelevanceInput>;
  approvedAt?: InputMaybe<SortOrderInput>;
  comments?: InputMaybe<PostCommentOrderByRelationAggregateInput>;
  commentsCount?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdByUserId?: InputMaybe<SortOrderInput>;
  customer?: InputMaybe<CustomerOrderByWithRelationInput>;
  customerId?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrderInput>;
  deletedByUserId?: InputMaybe<SortOrderInput>;
  group?: InputMaybe<GroupOrderByWithRelationInput>;
  groupEvent?: InputMaybe<GroupEventOrderByWithRelationInput>;
  groupId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  likes?: InputMaybe<PostLikeOrderByRelationAggregateInput>;
  likesCount?: InputMaybe<SortOrder>;
  medias?: InputMaybe<PostMediaOrderByRelationAggregateInput>;
  rejectedAt?: InputMaybe<SortOrderInput>;
  rejectedReason?: InputMaybe<SortOrderInput>;
  reviewedById?: InputMaybe<SortOrderInput>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedByUserId?: InputMaybe<SortOrderInput>;
};

export type PostRelationFilter = {
  is?: InputMaybe<PostWhereInput>;
  isNot?: InputMaybe<PostWhereInput>;
};

export enum PostScalarFieldEnum {
  ApprovedAt = "approvedAt",
  CommentsCount = "commentsCount",
  Content = "content",
  CreatedAt = "createdAt",
  CreatedByUserId = "createdByUserId",
  CustomerId = "customerId",
  DeletedAt = "deletedAt",
  DeletedByUserId = "deletedByUserId",
  GroupId = "groupId",
  Id = "id",
  LikesCount = "likesCount",
  RejectedAt = "rejectedAt",
  RejectedReason = "rejectedReason",
  ReviewedById = "reviewedById",
  Status = "status",
  UpdatedAt = "updatedAt",
  UpdatedByUserId = "updatedByUserId",
}

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  approvedAt?: InputMaybe<DateTimeNullableFilter>;
  comments?: InputMaybe<PostCommentListRelationFilter>;
  commentsCount?: InputMaybe<IntFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdByUserId?: InputMaybe<IntNullableFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<IntFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedByUserId?: InputMaybe<IntNullableFilter>;
  group?: InputMaybe<GroupRelationFilter>;
  groupEvent?: InputMaybe<GroupEventNullableRelationFilter>;
  groupId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  likes?: InputMaybe<PostLikeListRelationFilter>;
  likesCount?: InputMaybe<IntFilter>;
  medias?: InputMaybe<PostMediaListRelationFilter>;
  rejectedAt?: InputMaybe<DateTimeNullableFilter>;
  rejectedReason?: InputMaybe<StringNullableFilter>;
  reviewedById?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<EnumApprovalStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedByUserId?: InputMaybe<IntNullableFilter>;
};

export type PostWhereUniqueInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  approvedAt?: InputMaybe<DateTimeNullableFilter>;
  comments?: InputMaybe<PostCommentListRelationFilter>;
  commentsCount?: InputMaybe<IntFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdByUserId?: InputMaybe<IntNullableFilter>;
  customer?: InputMaybe<CustomerRelationFilter>;
  customerId?: InputMaybe<IntFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedByUserId?: InputMaybe<IntNullableFilter>;
  group?: InputMaybe<GroupRelationFilter>;
  groupEvent?: InputMaybe<GroupEventNullableRelationFilter>;
  groupId?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  likes?: InputMaybe<PostLikeListRelationFilter>;
  likesCount?: InputMaybe<IntFilter>;
  medias?: InputMaybe<PostMediaListRelationFilter>;
  rejectedAt?: InputMaybe<DateTimeNullableFilter>;
  rejectedReason?: InputMaybe<StringNullableFilter>;
  reviewedById?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<EnumApprovalStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedByUserId?: InputMaybe<IntNullableFilter>;
};

export type Query = {
  __typename?: "Query";
  activities: ActivityFindManyResult;
  activity?: Maybe<Activity>;
  activitySlot?: Maybe<ActivitySlot>;
  activitySlots: ActivitySlotFindManyResult;
  admin?: Maybe<Admin>;
  admins: AdminFindManyResult;
  booking?: Maybe<Booking>;
  bookings: BookingFindManyResult;
  checkIn?: Maybe<CheckIn>;
  checkIns: CheckInFindManyResult;
  customer?: Maybe<Customer>;
  customerExperience?: Maybe<CustomerExperience>;
  customerExperiences: CustomerExperienceFindManyResult;
  customerPoint?: Maybe<CustomerPoint>;
  customerPoints: CustomerPointFindManyResult;
  customerReward?: Maybe<CustomerReward>;
  customerRewards: CustomerRewardFindManyResult;
  customers: CustomerFindManyResult;
  getAccountInfo: Admin;
  group?: Maybe<Group>;
  groupEvent?: Maybe<GroupEvent>;
  groupEventAttendee?: Maybe<GroupEventAttendee>;
  groupEventAttendees: GroupEventAttendeeFindManyResult;
  groupEvents: GroupEventFindManyResult;
  groupUser?: Maybe<GroupUser>;
  groupUsers: GroupUserFindManyResult;
  groups: GroupFindManyResult;
  hello: Scalars["String"]["output"];
  newsfeed?: Maybe<Newsfeed>;
  newsfeeds: NewsfeedFindManyResult;
  outlet?: Maybe<Outlet>;
  outlets: OutletFindManyResult;
  post?: Maybe<Post>;
  postComment?: Maybe<PostComment>;
  postComments: PostCommentFindManyResult;
  posts: PostFindManyResult;
  reward?: Maybe<Reward>;
  rewards: RewardFindManyResult;
  setting?: Maybe<Setting>;
  settings: SettingFindManyResult;
  tier?: Maybe<Tier>;
  tiers: TierFindManyResult;
  userReport?: Maybe<UserReport>;
  userReports: UserReportFindManyResult;
};

export type QueryActivitiesArgs = {
  cursor?: InputMaybe<ActivityWhereUniqueInput>;
  distinct?: InputMaybe<Array<ActivityScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ActivityOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ActivityWhereInput>;
};

export type QueryActivityArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: ActivityWhereUniqueInput;
};

export type QueryActivitySlotArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: ActivitySlotWhereUniqueInput;
};

export type QueryActivitySlotsArgs = {
  cursor?: InputMaybe<ActivitySlotWhereUniqueInput>;
  distinct?: InputMaybe<Array<ActivitySlotScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ActivitySlotOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ActivitySlotWhereInput>;
};

export type QueryAdminArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AdminWhereUniqueInput;
};

export type QueryAdminsArgs = {
  cursor?: InputMaybe<AdminWhereUniqueInput>;
  distinct?: InputMaybe<Array<AdminScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AdminOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AdminWhereInput>;
};

export type QueryBookingArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: BookingWhereUniqueInput;
};

export type QueryBookingsArgs = {
  cursor?: InputMaybe<BookingWhereUniqueInput>;
  distinct?: InputMaybe<Array<BookingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BookingOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<BookingWhereInput>;
};

export type QueryCheckInArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CheckInWhereUniqueInput;
};

export type QueryCheckInsArgs = {
  cursor?: InputMaybe<CheckInWhereUniqueInput>;
  distinct?: InputMaybe<Array<CheckInScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CheckInOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CheckInWhereInput>;
};

export type QueryCustomerArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CustomerWhereUniqueInput;
};

export type QueryCustomerExperienceArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CustomerExperienceWhereUniqueInput;
};

export type QueryCustomerExperiencesArgs = {
  cursor?: InputMaybe<CustomerExperienceWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomerExperienceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomerExperienceOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CustomerExperienceWhereInput>;
};

export type QueryCustomerPointArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CustomerPointWhereUniqueInput;
};

export type QueryCustomerPointsArgs = {
  cursor?: InputMaybe<CustomerPointWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomerPointScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomerPointOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CustomerPointWhereInput>;
};

export type QueryCustomerRewardArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CustomerRewardWhereUniqueInput;
};

export type QueryCustomerRewardsArgs = {
  cursor?: InputMaybe<CustomerRewardWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomerRewardScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomerRewardOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CustomerRewardWhereInput>;
};

export type QueryCustomersArgs = {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomerOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CustomerWhereInput>;
};

export type QueryGroupArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: GroupWhereUniqueInput;
};

export type QueryGroupEventArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: GroupEventWhereUniqueInput;
};

export type QueryGroupEventAttendeeArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: GroupEventAttendeeWhereUniqueInput;
};

export type QueryGroupEventAttendeesArgs = {
  cursor?: InputMaybe<GroupEventAttendeeWhereUniqueInput>;
  distinct?: InputMaybe<Array<GroupEventAttendeeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GroupEventAttendeeOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<GroupEventAttendeeWhereInput>;
};

export type QueryGroupEventsArgs = {
  cursor?: InputMaybe<GroupEventWhereUniqueInput>;
  distinct?: InputMaybe<Array<GroupEventScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GroupEventOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<GroupEventWhereInput>;
};

export type QueryGroupUserArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: GroupUserWhereUniqueInput;
};

export type QueryGroupUsersArgs = {
  cursor?: InputMaybe<GroupUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<GroupUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GroupUserOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<GroupUserWhereInput>;
};

export type QueryGroupsArgs = {
  cursor?: InputMaybe<GroupWhereUniqueInput>;
  distinct?: InputMaybe<Array<GroupScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<GroupOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<GroupWhereInput>;
};

export type QueryNewsfeedArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: NewsfeedWhereUniqueInput;
};

export type QueryNewsfeedsArgs = {
  cursor?: InputMaybe<NewsfeedWhereUniqueInput>;
  distinct?: InputMaybe<Array<NewsfeedScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NewsfeedOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<NewsfeedWhereInput>;
};

export type QueryOutletArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: OutletWhereUniqueInput;
};

export type QueryOutletsArgs = {
  cursor?: InputMaybe<OutletWhereUniqueInput>;
  distinct?: InputMaybe<Array<OutletScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OutletOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<OutletWhereInput>;
};

export type QueryPostArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: PostWhereUniqueInput;
};

export type QueryPostCommentArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: PostCommentWhereUniqueInput;
};

export type QueryPostCommentsArgs = {
  cursor?: InputMaybe<PostCommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostCommentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostCommentOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PostCommentWhereInput>;
};

export type QueryPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PostWhereInput>;
};

export type QueryRewardArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: RewardWhereUniqueInput;
};

export type QueryRewardsArgs = {
  cursor?: InputMaybe<RewardWhereUniqueInput>;
  distinct?: InputMaybe<Array<RewardScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RewardOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<RewardWhereInput>;
};

export type QuerySettingArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SettingWhereUniqueInput;
};

export type QuerySettingsArgs = {
  cursor?: InputMaybe<SettingWhereUniqueInput>;
  distinct?: InputMaybe<Array<SettingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SettingOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<SettingWhereInput>;
};

export type QueryTierArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: TierWhereUniqueInput;
};

export type QueryTiersArgs = {
  cursor?: InputMaybe<TierWhereUniqueInput>;
  distinct?: InputMaybe<Array<TierScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TierOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<TierWhereInput>;
};

export type QueryUserReportArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserReportWhereUniqueInput;
};

export type QueryUserReportsArgs = {
  cursor?: InputMaybe<UserReportWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserReportScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserReportOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<UserReportWhereInput>;
};

export enum RelationLoadStrategy {
  Join = "join",
  Query = "query",
}

export type ReviewUserReportInput = {
  status: UserReportStatus;
};

export type Reward = {
  __typename?: "Reward";
  _count: RewardCount;
  active: Scalars["Boolean"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  createdById: Scalars["Int"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedById?: Maybe<Scalars["Int"]["output"]>;
  description: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  redemptionPoint: Scalars["Int"]["output"];
  termsAndConditions: Scalars["String"]["output"];
  thumbnail: Scalars["String"]["output"];
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  updatedById?: Maybe<Scalars["Int"]["output"]>;
  validityDays: Scalars["Int"]["output"];
};

export type RewardCount = {
  __typename?: "RewardCount";
  CustomerRewards: Scalars["Int"]["output"];
  TierBirthdayRewards: Scalars["Int"]["output"];
};

export type RewardFindManyResult = {
  __typename?: "RewardFindManyResult";
  data: Array<Reward>;
  total: Scalars["Int"]["output"];
};

export type RewardNullableRelationFilter = {
  is?: InputMaybe<RewardWhereInput>;
  isNot?: InputMaybe<RewardWhereInput>;
};

export enum RewardOrderByRelevanceFieldEnum {
  Description = "description",
  TermsAndConditions = "termsAndConditions",
  Thumbnail = "thumbnail",
  Title = "title",
}

export type RewardOrderByRelevanceInput = {
  fields: Array<RewardOrderByRelevanceFieldEnum>;
  search: Scalars["String"]["input"];
  sort: SortOrder;
};

export type RewardOrderByWithRelationInput = {
  CustomerRewards?: InputMaybe<CustomerRewardOrderByRelationAggregateInput>;
  TierBirthdayRewards?: InputMaybe<TierOrderByRelationAggregateInput>;
  _relevance?: InputMaybe<RewardOrderByRelevanceInput>;
  active?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrderInput>;
  deletedById?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  redemptionPoint?: InputMaybe<SortOrder>;
  termsAndConditions?: InputMaybe<SortOrder>;
  thumbnail?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedById?: InputMaybe<SortOrderInput>;
  validityDays?: InputMaybe<SortOrder>;
};

export type RewardRelationFilter = {
  is?: InputMaybe<RewardWhereInput>;
  isNot?: InputMaybe<RewardWhereInput>;
};

export enum RewardScalarFieldEnum {
  Active = "active",
  CreatedAt = "createdAt",
  CreatedById = "createdById",
  DeletedAt = "deletedAt",
  DeletedById = "deletedById",
  Description = "description",
  Id = "id",
  RedemptionPoint = "redemptionPoint",
  TermsAndConditions = "termsAndConditions",
  Thumbnail = "thumbnail",
  Title = "title",
  UpdatedAt = "updatedAt",
  UpdatedById = "updatedById",
  ValidityDays = "validityDays",
}

export type RewardWhereInput = {
  AND?: InputMaybe<Array<RewardWhereInput>>;
  CustomerRewards?: InputMaybe<CustomerRewardListRelationFilter>;
  NOT?: InputMaybe<Array<RewardWhereInput>>;
  OR?: InputMaybe<Array<RewardWhereInput>>;
  TierBirthdayRewards?: InputMaybe<TierListRelationFilter>;
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  redemptionPoint?: InputMaybe<IntFilter>;
  termsAndConditions?: InputMaybe<StringFilter>;
  thumbnail?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
  validityDays?: InputMaybe<IntFilter>;
};

export type RewardWhereUniqueInput = {
  AND?: InputMaybe<Array<RewardWhereInput>>;
  CustomerRewards?: InputMaybe<CustomerRewardListRelationFilter>;
  NOT?: InputMaybe<Array<RewardWhereInput>>;
  OR?: InputMaybe<Array<RewardWhereInput>>;
  TierBirthdayRewards?: InputMaybe<TierListRelationFilter>;
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  redemptionPoint?: InputMaybe<IntFilter>;
  termsAndConditions?: InputMaybe<StringFilter>;
  thumbnail?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
  validityDays?: InputMaybe<IntFilter>;
};

export enum Role {
  Admin = "Admin",
  Staff = "Staff",
  SuperAdmin = "Super_Admin",
}

export type Setting = {
  __typename?: "Setting";
  id: Scalars["Int"]["output"];
  key: SettingKey;
  value: Scalars["Int"]["output"];
};

export type SettingFindManyResult = {
  __typename?: "SettingFindManyResult";
  data: Array<Setting>;
  total: Scalars["Int"]["output"];
};

export enum SettingKey {
  ExperienceAttendBookedActivity = "EXPERIENCE_ATTEND_BOOKED_ACTIVITY",
  ExperienceAttendGroupEvent = "EXPERIENCE_ATTEND_GROUP_EVENT",
  PointAttendBookedActivity = "POINT_ATTEND_BOOKED_ACTIVITY",
  PointAttendGroupEvent = "POINT_ATTEND_GROUP_EVENT",
  PointCheckin = "POINT_CHECKIN",
}

export type SettingOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export enum SettingScalarFieldEnum {
  Id = "id",
  Key = "key",
  Value = "value",
}

export type SettingWhereInput = {
  AND?: InputMaybe<Array<SettingWhereInput>>;
  NOT?: InputMaybe<Array<SettingWhereInput>>;
  OR?: InputMaybe<Array<SettingWhereInput>>;
  id?: InputMaybe<IntFilter>;
  key?: InputMaybe<EnumSettingKeyFilter>;
  value?: InputMaybe<IntFilter>;
};

export type SettingWhereUniqueInput = {
  AND?: InputMaybe<Array<SettingWhereInput>>;
  NOT?: InputMaybe<Array<SettingWhereInput>>;
  OR?: InputMaybe<Array<SettingWhereInput>>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  key?: InputMaybe<SettingKey>;
  value?: InputMaybe<IntFilter>;
};

export enum SortOrder {
  Asc = "asc",
  Desc = "desc",
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type Tier = {
  __typename?: "Tier";
  _count: TierCount;
  badge?: Maybe<Scalars["String"]["output"]>;
  birthdayReward?: Maybe<Reward>;
  birthdayRewardId?: Maybe<Scalars["Int"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  createdById?: Maybe<Scalars["Int"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedById?: Maybe<Scalars["Int"]["output"]>;
  experiencePerCheckin: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  level: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
  pointMultiplier: Scalars["Int"]["output"];
  requiredExperience: Scalars["Int"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  updatedById?: Maybe<Scalars["Int"]["output"]>;
};

export type TierCount = {
  __typename?: "TierCount";
  Customer: Scalars["Int"]["output"];
  CustomerNext: Scalars["Int"]["output"];
};

export type TierFindManyResult = {
  __typename?: "TierFindManyResult";
  data: Array<Tier>;
  total: Scalars["Int"]["output"];
};

export type TierListRelationFilter = {
  every?: InputMaybe<TierWhereInput>;
  none?: InputMaybe<TierWhereInput>;
  some?: InputMaybe<TierWhereInput>;
};

export type TierNullableRelationFilter = {
  is?: InputMaybe<TierWhereInput>;
  isNot?: InputMaybe<TierWhereInput>;
};

export type TierOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum TierOrderByRelevanceFieldEnum {
  Badge = "badge",
  Name = "name",
}

export type TierOrderByRelevanceInput = {
  fields: Array<TierOrderByRelevanceFieldEnum>;
  search: Scalars["String"]["input"];
  sort: SortOrder;
};

export type TierOrderByWithRelationInput = {
  Customer?: InputMaybe<CustomerOrderByRelationAggregateInput>;
  CustomerNext?: InputMaybe<CustomerOrderByRelationAggregateInput>;
  _relevance?: InputMaybe<TierOrderByRelevanceInput>;
  badge?: InputMaybe<SortOrderInput>;
  birthdayReward?: InputMaybe<RewardOrderByWithRelationInput>;
  birthdayRewardId?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrderInput>;
  deletedAt?: InputMaybe<SortOrderInput>;
  deletedById?: InputMaybe<SortOrderInput>;
  experiencePerCheckin?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  level?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  pointMultiplier?: InputMaybe<SortOrder>;
  requiredExperience?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedById?: InputMaybe<SortOrderInput>;
};

export enum TierScalarFieldEnum {
  Badge = "badge",
  BirthdayRewardId = "birthdayRewardId",
  CreatedAt = "createdAt",
  CreatedById = "createdById",
  DeletedAt = "deletedAt",
  DeletedById = "deletedById",
  ExperiencePerCheckin = "experiencePerCheckin",
  Id = "id",
  Level = "level",
  Name = "name",
  PointMultiplier = "pointMultiplier",
  RequiredExperience = "requiredExperience",
  UpdatedAt = "updatedAt",
  UpdatedById = "updatedById",
}

export type TierWhereInput = {
  AND?: InputMaybe<Array<TierWhereInput>>;
  Customer?: InputMaybe<CustomerListRelationFilter>;
  CustomerNext?: InputMaybe<CustomerListRelationFilter>;
  NOT?: InputMaybe<Array<TierWhereInput>>;
  OR?: InputMaybe<Array<TierWhereInput>>;
  badge?: InputMaybe<StringNullableFilter>;
  birthdayReward?: InputMaybe<RewardNullableRelationFilter>;
  birthdayRewardId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  experiencePerCheckin?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  level?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  pointMultiplier?: InputMaybe<IntFilter>;
  requiredExperience?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
};

export type TierWhereUniqueInput = {
  AND?: InputMaybe<Array<TierWhereInput>>;
  Customer?: InputMaybe<CustomerListRelationFilter>;
  CustomerNext?: InputMaybe<CustomerListRelationFilter>;
  NOT?: InputMaybe<Array<TierWhereInput>>;
  OR?: InputMaybe<Array<TierWhereInput>>;
  badge?: InputMaybe<StringNullableFilter>;
  birthdayReward?: InputMaybe<RewardNullableRelationFilter>;
  birthdayRewardId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  experiencePerCheckin?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  level?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  pointMultiplier?: InputMaybe<IntFilter>;
  requiredExperience?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
};

export type UpdateAccountInfoInput = {
  fullName?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateActivityInput = {
  coverImage?: InputMaybe<Scalars["Upload"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  outletId?: InputMaybe<Scalars["Float"]["input"]>;
  requirement?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<ActivityStatus>;
};

export type UpdateActivitySlotInput = {
  activityId?: InputMaybe<Scalars["Float"]["input"]>;
  endTime?: InputMaybe<Scalars["String"]["input"]>;
  maxParticipants?: InputMaybe<Scalars["Float"]["input"]>;
  startTime?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateAdminInput = {
  allOutlets?: InputMaybe<Scalars["Boolean"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  fullName?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<Role>;
};

export type UpdateCustomerInput = {
  dob: Scalars["String"]["input"];
  email: Scalars["String"]["input"];
  fullName: Scalars["String"]["input"];
  phoneCode: Scalars["String"]["input"];
  phoneNo: Scalars["String"]["input"];
  status?: InputMaybe<AccountStatus>;
};

export type UpdateGroupEventInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  eventDate?: InputMaybe<Scalars["String"]["input"]>;
  minAge?: InputMaybe<Scalars["Float"]["input"]>;
  startTime?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<ApprovalStatus>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateGroupInput = {
  adminId?: InputMaybe<Scalars["Float"]["input"]>;
  coverImage?: InputMaybe<Scalars["Upload"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  minAge?: InputMaybe<Scalars["Float"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  tagLine?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateNewsfeedInput = {
  content?: InputMaybe<Scalars["String"]["input"]>;
  coverImage?: InputMaybe<Scalars["Upload"]["input"]>;
  deeplink?: InputMaybe<Scalars["String"]["input"]>;
  thumbnail?: InputMaybe<Scalars["Upload"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateOutletInput = {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  address?: InputMaybe<Scalars["String"]["input"]>;
  branchCode?: InputMaybe<Scalars["String"]["input"]>;
  branchFnbCode?: InputMaybe<Scalars["String"]["input"]>;
  checkInRadius?: InputMaybe<Scalars["Float"]["input"]>;
  coverImage?: InputMaybe<Scalars["String"]["input"]>;
  endTime?: InputMaybe<Scalars["String"]["input"]>;
  latitude?: InputMaybe<Scalars["Float"]["input"]>;
  longitude?: InputMaybe<Scalars["Float"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  startTime?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateRewardInput = {
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  redemptionPoint?: InputMaybe<Scalars["Float"]["input"]>;
  termsAndConditions?: InputMaybe<Scalars["String"]["input"]>;
  thumbnail?: InputMaybe<Scalars["String"]["input"]>;
  title?: InputMaybe<Scalars["String"]["input"]>;
  validityDays?: InputMaybe<Scalars["Float"]["input"]>;
};

export type UpdateSettingInput = {
  key: SettingKey;
  value: Scalars["Float"]["input"];
};

export type UpdateTierInput = {
  badge?: InputMaybe<Scalars["String"]["input"]>;
  birthdayRewardId?: InputMaybe<Scalars["Float"]["input"]>;
  experiencePerCheckin?: InputMaybe<Scalars["Float"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  pointMultiplier?: InputMaybe<Scalars["Float"]["input"]>;
  requiredExperience?: InputMaybe<Scalars["Float"]["input"]>;
};

export type UserReport = {
  __typename?: "UserReport";
  commentId?: Maybe<Scalars["Int"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  customerId: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  postId?: Maybe<Scalars["Int"]["output"]>;
  reason: Scalars["String"]["output"];
  reviewedBy?: Maybe<Admin>;
  reviewedById?: Maybe<Scalars["Int"]["output"]>;
  status: UserReportStatus;
  updatedAt: Scalars["DateTime"]["output"];
};

export type UserReportFindManyResult = {
  __typename?: "UserReportFindManyResult";
  data: Array<UserReport>;
  total: Scalars["Int"]["output"];
};

export type UserReportListRelationFilter = {
  every?: InputMaybe<UserReportWhereInput>;
  none?: InputMaybe<UserReportWhereInput>;
  some?: InputMaybe<UserReportWhereInput>;
};

export type UserReportOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum UserReportOrderByRelevanceFieldEnum {
  Reason = "reason",
}

export type UserReportOrderByRelevanceInput = {
  fields: Array<UserReportOrderByRelevanceFieldEnum>;
  search: Scalars["String"]["input"];
  sort: SortOrder;
};

export type UserReportOrderByWithRelationInput = {
  _relevance?: InputMaybe<UserReportOrderByRelevanceInput>;
  commentId?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  customerId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrderInput>;
  reason?: InputMaybe<SortOrder>;
  reviewedBy?: InputMaybe<AdminOrderByWithRelationInput>;
  reviewedById?: InputMaybe<SortOrderInput>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum UserReportScalarFieldEnum {
  CommentId = "commentId",
  CreatedAt = "createdAt",
  CustomerId = "customerId",
  Id = "id",
  PostId = "postId",
  Reason = "reason",
  ReviewedById = "reviewedById",
  Status = "status",
  UpdatedAt = "updatedAt",
}

export enum UserReportStatus {
  Pending = "Pending",
  Rejected = "Rejected",
  Resolved = "Resolved",
}

export type UserReportWhereInput = {
  AND?: InputMaybe<Array<UserReportWhereInput>>;
  NOT?: InputMaybe<Array<UserReportWhereInput>>;
  OR?: InputMaybe<Array<UserReportWhereInput>>;
  commentId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customerId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  postId?: InputMaybe<IntNullableFilter>;
  reason?: InputMaybe<StringFilter>;
  reviewedBy?: InputMaybe<AdminNullableRelationFilter>;
  reviewedById?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<EnumUserReportStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserReportWhereUniqueInput = {
  AND?: InputMaybe<Array<UserReportWhereInput>>;
  NOT?: InputMaybe<Array<UserReportWhereInput>>;
  OR?: InputMaybe<Array<UserReportWhereInput>>;
  commentId?: InputMaybe<IntNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customerId?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  postId?: InputMaybe<IntNullableFilter>;
  reason?: InputMaybe<StringFilter>;
  reviewedBy?: InputMaybe<AdminNullableRelationFilter>;
  reviewedById?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<EnumUserReportStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AdminFragment = {
  __typename?: "Admin";
  id: number;
  fullName: string;
  email: string;
  active: boolean;
  createdAt: Date | string;
};

export type AdminInfoFragment = {
  __typename?: "Admin";
  id: number;
  fullName: string;
  email: string;
  active: boolean;
  createdAt: Date | string;
};

export type AdminsQueryVariables = Exact<{
  where?: InputMaybe<AdminWhereInput>;
  orderBy?: InputMaybe<
    Array<AdminOrderByWithRelationInput> | AdminOrderByWithRelationInput
  >;
  cursor?: InputMaybe<AdminWhereUniqueInput>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  distinct?: InputMaybe<Array<AdminScalarFieldEnum> | AdminScalarFieldEnum>;
}>;

export type AdminsQuery = {
  __typename?: "Query";
  admins: {
    __typename?: "AdminFindManyResult";
    total: number;
    data: Array<{
      __typename?: "Admin";
      id: number;
      fullName: string;
      email: string;
      active: boolean;
      createdAt: Date | string;
    }>;
  };
};

export type AdminQueryVariables = Exact<{
  where: AdminWhereUniqueInput;
}>;

export type AdminQuery = {
  __typename?: "Query";
  admin?: {
    __typename?: "Admin";
    id: number;
    fullName: string;
    email: string;
    active: boolean;
    createdAt: Date | string;
  } | null;
};

export type CreateAdminMutationVariables = Exact<{
  input: CreateAdminInput;
}>;

export type CreateAdminMutation = {
  __typename?: "Mutation";
  createAdmin: {
    __typename?: "Admin";
    id: number;
    fullName: string;
    email: string;
    active: boolean;
    createdAt: Date | string;
  };
};

export type UpdateAdminMutationVariables = Exact<{
  id: Scalars["Float"]["input"];
  input: UpdateAdminInput;
}>;

export type UpdateAdminMutation = {
  __typename?: "Mutation";
  updateAdmin: {
    __typename?: "Admin";
    id: number;
    fullName: string;
    email: string;
    active: boolean;
    createdAt: Date | string;
  };
};

export type DeleteAdminMutationVariables = Exact<{
  id: Scalars["Float"]["input"];
}>;

export type DeleteAdminMutation = {
  __typename?: "Mutation";
  deleteAdmin: boolean;
};

export const AdminFragmentDoc = `
    fragment Admin on Admin {
  id
  fullName
  email
  active
  createdAt
}
    `;
export const AdminInfoFragmentDoc = `
    fragment AdminInfo on Admin {
  id
  fullName
  email
  active
  createdAt
}
    `;
export const AdminsDocument = `
    query Admins($where: AdminWhereInput, $orderBy: [AdminOrderByWithRelationInput!], $cursor: AdminWhereUniqueInput, $take: Int, $skip: Int, $distinct: [AdminScalarFieldEnum!]) {
  admins(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    take: $take
    skip: $skip
    distinct: $distinct
  ) {
    total
    data {
      ...Admin
    }
  }
}
    ${AdminFragmentDoc}`;

export const useAdminsQuery = <TData = AdminsQuery, TError = unknown>(
  variables?: AdminsQueryVariables,
  options?: Omit<UseQueryOptions<AdminsQuery, TError, TData>, "queryKey"> & {
    queryKey?: UseQueryOptions<AdminsQuery, TError, TData>["queryKey"];
  },
) => {
  return useQuery<AdminsQuery, TError, TData>({
    queryKey: variables === undefined ? ["Admins"] : ["Admins", variables],
    queryFn: gqlFetcher<AdminsQuery, AdminsQueryVariables>(
      AdminsDocument,
      variables,
    ),
    ...options,
  });
};

useAdminsQuery.getKey = (variables?: AdminsQueryVariables) =>
  variables === undefined ? ["Admins"] : ["Admins", variables];

export const useInfiniteAdminsQuery = <
  TData = InfiniteData<AdminsQuery>,
  TError = unknown,
>(
  variables: AdminsQueryVariables,
  options: Omit<
    UseInfiniteQueryOptions<AdminsQuery, TError, TData>,
    "queryKey"
  > & {
    queryKey?: UseInfiniteQueryOptions<AdminsQuery, TError, TData>["queryKey"];
  },
) => {
  return useInfiniteQuery<AdminsQuery, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryKey:
          (optionsQueryKey ?? variables === undefined)
            ? ["Admins.infinite"]
            : ["Admins.infinite", variables],
        queryFn: (metaData) =>
          gqlFetcher<AdminsQuery, AdminsQueryVariables>(AdminsDocument, {
            ...variables,
            ...(metaData.pageParam ?? {}),
          })(),
        ...restOptions,
      };
    })(),
  );
};

useInfiniteAdminsQuery.getKey = (variables?: AdminsQueryVariables) =>
  variables === undefined
    ? ["Admins.infinite"]
    : ["Admins.infinite", variables];

useAdminsQuery.fetcher = (
  variables?: AdminsQueryVariables,
  options?: RequestInit["headers"],
) =>
  gqlFetcher<AdminsQuery, AdminsQueryVariables>(
    AdminsDocument,
    variables,
    options,
  );

export const AdminDocument = `
    query Admin($where: AdminWhereUniqueInput!) {
  admin(where: $where) {
    ...AdminInfo
  }
}
    ${AdminInfoFragmentDoc}`;

export const useAdminQuery = <TData = AdminQuery, TError = unknown>(
  variables: AdminQueryVariables,
  options?: Omit<UseQueryOptions<AdminQuery, TError, TData>, "queryKey"> & {
    queryKey?: UseQueryOptions<AdminQuery, TError, TData>["queryKey"];
  },
) => {
  return useQuery<AdminQuery, TError, TData>({
    queryKey: ["Admin", variables],
    queryFn: gqlFetcher<AdminQuery, AdminQueryVariables>(
      AdminDocument,
      variables,
    ),
    ...options,
  });
};

useAdminQuery.getKey = (variables: AdminQueryVariables) => ["Admin", variables];

export const useInfiniteAdminQuery = <
  TData = InfiniteData<AdminQuery>,
  TError = unknown,
>(
  variables: AdminQueryVariables,
  options: Omit<
    UseInfiniteQueryOptions<AdminQuery, TError, TData>,
    "queryKey"
  > & {
    queryKey?: UseInfiniteQueryOptions<AdminQuery, TError, TData>["queryKey"];
  },
) => {
  return useInfiniteQuery<AdminQuery, TError, TData>(
    (() => {
      const { queryKey: optionsQueryKey, ...restOptions } = options;
      return {
        queryKey: optionsQueryKey ?? ["Admin.infinite", variables],
        queryFn: (metaData) =>
          gqlFetcher<AdminQuery, AdminQueryVariables>(AdminDocument, {
            ...variables,
            ...(metaData.pageParam ?? {}),
          })(),
        ...restOptions,
      };
    })(),
  );
};

useInfiniteAdminQuery.getKey = (variables: AdminQueryVariables) => [
  "Admin.infinite",
  variables,
];

useAdminQuery.fetcher = (
  variables: AdminQueryVariables,
  options?: RequestInit["headers"],
) =>
  gqlFetcher<AdminQuery, AdminQueryVariables>(
    AdminDocument,
    variables,
    options,
  );

export const CreateAdminDocument = `
    mutation CreateAdmin($input: CreateAdminInput!) {
  createAdmin(input: $input) {
    ...AdminInfo
  }
}
    ${AdminInfoFragmentDoc}`;

export const useCreateAdminMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    CreateAdminMutation,
    TError,
    CreateAdminMutationVariables,
    TContext
  >,
) => {
  return useMutation<
    CreateAdminMutation,
    TError,
    CreateAdminMutationVariables,
    TContext
  >({
    mutationKey: ["CreateAdmin"],
    mutationFn: (variables?: CreateAdminMutationVariables) =>
      gqlFetcher<CreateAdminMutation, CreateAdminMutationVariables>(
        CreateAdminDocument,
        variables,
      )(),
    ...options,
  });
};

useCreateAdminMutation.fetcher = (
  variables: CreateAdminMutationVariables,
  options?: RequestInit["headers"],
) =>
  gqlFetcher<CreateAdminMutation, CreateAdminMutationVariables>(
    CreateAdminDocument,
    variables,
    options,
  );

export const UpdateAdminDocument = `
    mutation UpdateAdmin($id: Float!, $input: UpdateAdminInput!) {
  updateAdmin(id: $id, input: $input) {
    ...AdminInfo
  }
}
    ${AdminInfoFragmentDoc}`;

export const useUpdateAdminMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    UpdateAdminMutation,
    TError,
    UpdateAdminMutationVariables,
    TContext
  >,
) => {
  return useMutation<
    UpdateAdminMutation,
    TError,
    UpdateAdminMutationVariables,
    TContext
  >({
    mutationKey: ["UpdateAdmin"],
    mutationFn: (variables?: UpdateAdminMutationVariables) =>
      gqlFetcher<UpdateAdminMutation, UpdateAdminMutationVariables>(
        UpdateAdminDocument,
        variables,
      )(),
    ...options,
  });
};

useUpdateAdminMutation.fetcher = (
  variables: UpdateAdminMutationVariables,
  options?: RequestInit["headers"],
) =>
  gqlFetcher<UpdateAdminMutation, UpdateAdminMutationVariables>(
    UpdateAdminDocument,
    variables,
    options,
  );

export const DeleteAdminDocument = `
    mutation DeleteAdmin($id: Float!) {
  deleteAdmin(id: $id)
}
    `;

export const useDeleteAdminMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    DeleteAdminMutation,
    TError,
    DeleteAdminMutationVariables,
    TContext
  >,
) => {
  return useMutation<
    DeleteAdminMutation,
    TError,
    DeleteAdminMutationVariables,
    TContext
  >({
    mutationKey: ["DeleteAdmin"],
    mutationFn: (variables?: DeleteAdminMutationVariables) =>
      gqlFetcher<DeleteAdminMutation, DeleteAdminMutationVariables>(
        DeleteAdminDocument,
        variables,
      )(),
    ...options,
  });
};

useDeleteAdminMutation.fetcher = (
  variables: DeleteAdminMutationVariables,
  options?: RequestInit["headers"],
) =>
  gqlFetcher<DeleteAdminMutation, DeleteAdminMutationVariables>(
    DeleteAdminDocument,
    variables,
    options,
  );
