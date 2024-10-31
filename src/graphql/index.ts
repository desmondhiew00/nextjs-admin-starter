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
  Decimal: { input: string; output: string };
  JSON: { input: any; output: any };
};

export type Admin = {
  __typename?: "Admin";
  active: Scalars["Boolean"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  createdById?: Maybe<Scalars["Int"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedById?: Maybe<Scalars["Int"]["output"]>;
  email: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  lastLogin?: Maybe<Scalars["DateTime"]["output"]>;
  name: Scalars["String"]["output"];
  superAdmin: Scalars["Boolean"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  updatedById?: Maybe<Scalars["Int"]["output"]>;
  user: User;
};

export type AdminFindManyResult = {
  __typename?: "AdminFindManyResult";
  data: Array<Admin>;
  total: Scalars["Int"]["output"];
};

export type AdminNullableRelationFilter = {
  is?: InputMaybe<AdminWhereInput>;
  isNot?: InputMaybe<AdminWhereInput>;
};

export type AdminOrderByWithRelationInput = {
  active?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrderInput>;
  deletedAt?: InputMaybe<SortOrderInput>;
  deletedById?: InputMaybe<SortOrderInput>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastLogin?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrderInput>;
  superAdmin?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedById?: InputMaybe<SortOrderInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
};

export enum AdminScalarFieldEnum {
  Active = "active",
  CreatedAt = "createdAt",
  CreatedById = "createdById",
  DeletedAt = "deletedAt",
  DeletedById = "deletedById",
  Email = "email",
  Id = "id",
  LastLogin = "lastLogin",
  Name = "name",
  Password = "password",
  SuperAdmin = "superAdmin",
  UpdatedAt = "updatedAt",
  UpdatedById = "updatedById",
}

export type AdminWhereInput = {
  AND?: InputMaybe<Array<AdminWhereInput>>;
  NOT?: InputMaybe<Array<AdminWhereInput>>;
  OR?: InputMaybe<Array<AdminWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  lastLogin?: InputMaybe<DateTimeNullableFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringNullableFilter>;
  superAdmin?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export type AdminWhereUniqueInput = {
  AND?: InputMaybe<Array<AdminWhereInput>>;
  NOT?: InputMaybe<Array<AdminWhereInput>>;
  OR?: InputMaybe<Array<AdminWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  lastLogin?: InputMaybe<DateTimeNullableFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringNullableFilter>;
  superAdmin?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
};

export enum ApplicationStatus {
  Applied = "APPLIED",
  Hired = "HIRED",
  Rejected = "REJECTED",
}

export enum AttendanceStatus {
  Complete = "COMPLETE",
  Incomplete = "INCOMPLETE",
}

export type AuthTokenListRelationFilter = {
  every?: InputMaybe<AuthTokenWhereInput>;
  none?: InputMaybe<AuthTokenWhereInput>;
  some?: InputMaybe<AuthTokenWhereInput>;
};

export type AuthTokenOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum AuthTokenType {
  ForgotPassword = "FORGOT_PASSWORD",
  RefreshToken = "REFRESH_TOKEN",
}

export type AuthTokenWhereInput = {
  AND?: InputMaybe<Array<AuthTokenWhereInput>>;
  NOT?: InputMaybe<Array<AuthTokenWhereInput>>;
  OR?: InputMaybe<Array<AuthTokenWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  revoked?: InputMaybe<BoolFilter>;
  token?: InputMaybe<StringFilter>;
  tokenExpiresAt?: InputMaybe<DateTimeFilter>;
  type?: InputMaybe<EnumAuthTokenTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type Bank = {
  __typename?: "Bank";
  _count: BankCount;
  available: Scalars["Boolean"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["Int"]["output"];
  logo: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  sequence: Scalars["Int"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
};

export type BankCount = {
  __typename?: "BankCount";
  Employee: Scalars["Int"]["output"];
};

export type BankFindManyResult = {
  __typename?: "BankFindManyResult";
  data: Array<Bank>;
  total: Scalars["Int"]["output"];
};

export type BankNullableRelationFilter = {
  is?: InputMaybe<BankWhereInput>;
  isNot?: InputMaybe<BankWhereInput>;
};

export type BankOrderByWithRelationInput = {
  Employee?: InputMaybe<EmployeeOrderByRelationAggregateInput>;
  available?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  sequence?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum BankScalarFieldEnum {
  Available = "available",
  CreatedAt = "createdAt",
  Id = "id",
  Logo = "logo",
  Name = "name",
  Sequence = "sequence",
  UpdatedAt = "updatedAt",
}

export type BankWhereInput = {
  AND?: InputMaybe<Array<BankWhereInput>>;
  Employee?: InputMaybe<EmployeeListRelationFilter>;
  NOT?: InputMaybe<Array<BankWhereInput>>;
  OR?: InputMaybe<Array<BankWhereInput>>;
  available?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  logo?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  sequence?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type BankWhereUniqueInput = {
  AND?: InputMaybe<Array<BankWhereInput>>;
  Employee?: InputMaybe<EmployeeListRelationFilter>;
  NOT?: InputMaybe<Array<BankWhereInput>>;
  OR?: InputMaybe<Array<BankWhereInput>>;
  available?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  logo?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  sequence?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Blacklist = {
  __typename?: "Blacklist";
  company: Company;
  companyId: Scalars["Int"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  createdById?: Maybe<Scalars["Int"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedById?: Maybe<Scalars["Int"]["output"]>;
  employee: Employee;
  employeeId: Scalars["Int"]["output"];
  reason: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  updatedById?: Maybe<Scalars["Int"]["output"]>;
};

export type BlacklistCompanyIdEmployeeIdCompoundUniqueInput = {
  companyId: Scalars["Int"]["input"];
  employeeId: Scalars["Int"]["input"];
};

export type BlacklistFindManyResult = {
  __typename?: "BlacklistFindManyResult";
  data: Array<Blacklist>;
  total: Scalars["Int"]["output"];
};

export type BlacklistListRelationFilter = {
  every?: InputMaybe<BlacklistWhereInput>;
  none?: InputMaybe<BlacklistWhereInput>;
  some?: InputMaybe<BlacklistWhereInput>;
};

export type BlacklistOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BlacklistOrderByWithRelationInput = {
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrderInput>;
  deletedAt?: InputMaybe<SortOrderInput>;
  deletedById?: InputMaybe<SortOrderInput>;
  employee?: InputMaybe<EmployeeOrderByWithRelationInput>;
  employeeId?: InputMaybe<SortOrder>;
  reason?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedById?: InputMaybe<SortOrderInput>;
};

export enum BlacklistScalarFieldEnum {
  CompanyId = "companyId",
  CreatedAt = "createdAt",
  CreatedById = "createdById",
  DeletedAt = "deletedAt",
  DeletedById = "deletedById",
  EmployeeId = "employeeId",
  Reason = "reason",
  UpdatedAt = "updatedAt",
  UpdatedById = "updatedById",
}

export type BlacklistWhereInput = {
  AND?: InputMaybe<Array<BlacklistWhereInput>>;
  NOT?: InputMaybe<Array<BlacklistWhereInput>>;
  OR?: InputMaybe<Array<BlacklistWhereInput>>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  employee?: InputMaybe<EmployeeRelationFilter>;
  employeeId?: InputMaybe<IntFilter>;
  reason?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
};

export type BlacklistWhereUniqueInput = {
  AND?: InputMaybe<Array<BlacklistWhereInput>>;
  NOT?: InputMaybe<Array<BlacklistWhereInput>>;
  OR?: InputMaybe<Array<BlacklistWhereInput>>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<IntFilter>;
  companyId_employeeId?: InputMaybe<BlacklistCompanyIdEmployeeIdCompoundUniqueInput>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  employee?: InputMaybe<EmployeeRelationFilter>;
  employeeId?: InputMaybe<IntFilter>;
  reason?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars["Boolean"]["input"]>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type Company = {
  __typename?: "Company";
  _count: CompanyCount;
  addresses?: Maybe<Array<CompanyAddress>>;
  attendanceBufferMinutes: Scalars["Int"]["output"];
  bio: Scalars["String"]["output"];
  blacklist?: Maybe<Array<Blacklist>>;
  comments?: Maybe<Array<EmployeeRating>>;
  companySize: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  createdById?: Maybe<Scalars["Int"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedById?: Maybe<Scalars["Int"]["output"]>;
  email: Scalars["String"]["output"];
  headerImage: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  industryId?: Maybe<Scalars["Int"]["output"]>;
  invoices?: Maybe<Array<Invoice>>;
  jobPosting?: Maybe<Array<JobPosting>>;
  jobs?: Maybe<Array<EmployeeJob>>;
  logo: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  password: Scalars["String"]["output"];
  platformFeeRate: Scalars["Decimal"]["output"];
  sstRate: Scalars["Decimal"]["output"];
  uid: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  updatedById?: Maybe<Scalars["Int"]["output"]>;
  warningLetters?: Maybe<Array<EmployeeWarningLetter>>;
};

export type CompanyAddress = {
  __typename?: "CompanyAddress";
  address: Scalars["String"]["output"];
  company: Company;
  companyId: Scalars["Int"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  createdById?: Maybe<Scalars["Int"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedById?: Maybe<Scalars["Int"]["output"]>;
  id: Scalars["Int"]["output"];
  latitude?: Maybe<Scalars["Decimal"]["output"]>;
  longitude?: Maybe<Scalars["Decimal"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
  updatedById?: Maybe<Scalars["Int"]["output"]>;
};

export type CompanyAddressListRelationFilter = {
  every?: InputMaybe<CompanyAddressWhereInput>;
  none?: InputMaybe<CompanyAddressWhereInput>;
  some?: InputMaybe<CompanyAddressWhereInput>;
};

export type CompanyAddressOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CompanyAddressWhereInput = {
  AND?: InputMaybe<Array<CompanyAddressWhereInput>>;
  NOT?: InputMaybe<Array<CompanyAddressWhereInput>>;
  OR?: InputMaybe<Array<CompanyAddressWhereInput>>;
  address?: InputMaybe<StringFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<IntFilter>;
  latitude?: InputMaybe<DecimalNullableFilter>;
  longitude?: InputMaybe<DecimalNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
};

export type CompanyCount = {
  __typename?: "CompanyCount";
  addresses: Scalars["Int"]["output"];
  blacklist: Scalars["Int"]["output"];
  comments: Scalars["Int"]["output"];
  invoices: Scalars["Int"]["output"];
  jobPosting: Scalars["Int"]["output"];
  jobs: Scalars["Int"]["output"];
  warningLetters: Scalars["Int"]["output"];
};

export type CompanyFindManyResult = {
  __typename?: "CompanyFindManyResult";
  data: Array<Company>;
  total: Scalars["Int"]["output"];
};

export type CompanyOrderByWithRelationInput = {
  addresses?: InputMaybe<CompanyAddressOrderByRelationAggregateInput>;
  attendanceBufferMinutes?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  blacklist?: InputMaybe<BlacklistOrderByRelationAggregateInput>;
  comments?: InputMaybe<EmployeeRatingOrderByRelationAggregateInput>;
  companySize?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrderInput>;
  deletedAt?: InputMaybe<SortOrderInput>;
  deletedById?: InputMaybe<SortOrderInput>;
  email?: InputMaybe<SortOrder>;
  headerImage?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  industryId?: InputMaybe<SortOrderInput>;
  invoices?: InputMaybe<InvoiceOrderByRelationAggregateInput>;
  jobPosting?: InputMaybe<JobPostingOrderByRelationAggregateInput>;
  jobs?: InputMaybe<EmployeeJobOrderByRelationAggregateInput>;
  logo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  platformFeeRate?: InputMaybe<SortOrder>;
  sstRate?: InputMaybe<SortOrder>;
  uid?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedById?: InputMaybe<SortOrderInput>;
  warningLetters?: InputMaybe<EmployeeWarningLetterOrderByRelationAggregateInput>;
};

export type CompanyRelationFilter = {
  is?: InputMaybe<CompanyWhereInput>;
  isNot?: InputMaybe<CompanyWhereInput>;
};

export enum CompanyScalarFieldEnum {
  AttendanceBufferMinutes = "attendanceBufferMinutes",
  Bio = "bio",
  CompanySize = "companySize",
  CreatedAt = "createdAt",
  CreatedById = "createdById",
  DeletedAt = "deletedAt",
  DeletedById = "deletedById",
  Email = "email",
  HeaderImage = "headerImage",
  Id = "id",
  IndustryId = "industryId",
  Logo = "logo",
  Name = "name",
  Password = "password",
  PlatformFeeRate = "platformFeeRate",
  SstRate = "sstRate",
  Uid = "uid",
  UpdatedAt = "updatedAt",
  UpdatedById = "updatedById",
}

export type CompanyUser = {
  __typename?: "CompanyUser";
  company_id: Scalars["Int"]["output"];
  contactNumber: Scalars["String"]["output"];
  countryCode?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  createdById?: Maybe<Scalars["Int"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedById?: Maybe<Scalars["Int"]["output"]>;
  department: Scalars["String"]["output"];
  email: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
  position: Scalars["String"]["output"];
  role: CompanyUserRole;
  updatedAt: Scalars["DateTime"]["output"];
  updatedById?: Maybe<Scalars["Int"]["output"]>;
  user: User;
  whatsappLink: Scalars["String"]["output"];
};

export type CompanyUserFindManyResult = {
  __typename?: "CompanyUserFindManyResult";
  data: Array<CompanyUser>;
  total: Scalars["Int"]["output"];
};

export type CompanyUserNullableRelationFilter = {
  is?: InputMaybe<CompanyUserWhereInput>;
  isNot?: InputMaybe<CompanyUserWhereInput>;
};

export type CompanyUserOrderByWithRelationInput = {
  company_id?: InputMaybe<SortOrder>;
  contactNumber?: InputMaybe<SortOrder>;
  countryCode?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrderInput>;
  deletedAt?: InputMaybe<SortOrderInput>;
  deletedById?: InputMaybe<SortOrderInput>;
  department?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedById?: InputMaybe<SortOrderInput>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  whatsappLink?: InputMaybe<SortOrder>;
};

export enum CompanyUserRole {
  Admin = "ADMIN",
  DepartmentManager = "DEPARTMENT_MANAGER",
  Finance = "FINANCE",
  Hr = "HR",
  Supervisor = "SUPERVISOR",
  SuperAdmin = "SUPER_ADMIN",
  TeamLeader = "TEAM_LEADER",
}

export enum CompanyUserScalarFieldEnum {
  CompanyId = "company_id",
  ContactNumber = "contactNumber",
  CountryCode = "countryCode",
  CreatedAt = "createdAt",
  CreatedById = "createdById",
  DeletedAt = "deletedAt",
  DeletedById = "deletedById",
  Department = "department",
  Email = "email",
  Id = "id",
  Name = "name",
  Password = "password",
  Position = "position",
  Role = "role",
  UpdatedAt = "updatedAt",
  UpdatedById = "updatedById",
  WhatsappLink = "whatsappLink",
}

export type CompanyUserWhereInput = {
  AND?: InputMaybe<Array<CompanyUserWhereInput>>;
  NOT?: InputMaybe<Array<CompanyUserWhereInput>>;
  OR?: InputMaybe<Array<CompanyUserWhereInput>>;
  company_id?: InputMaybe<IntFilter>;
  contactNumber?: InputMaybe<StringFilter>;
  countryCode?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  department?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  position?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumCompanyUserRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  whatsappLink?: InputMaybe<StringFilter>;
};

export type CompanyUserWhereUniqueInput = {
  AND?: InputMaybe<Array<CompanyUserWhereInput>>;
  NOT?: InputMaybe<Array<CompanyUserWhereInput>>;
  OR?: InputMaybe<Array<CompanyUserWhereInput>>;
  company_id?: InputMaybe<IntFilter>;
  contactNumber?: InputMaybe<StringFilter>;
  countryCode?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  department?: InputMaybe<StringFilter>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  position?: InputMaybe<StringFilter>;
  role?: InputMaybe<EnumCompanyUserRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  whatsappLink?: InputMaybe<StringFilter>;
};

export type CompanyWhereInput = {
  AND?: InputMaybe<Array<CompanyWhereInput>>;
  NOT?: InputMaybe<Array<CompanyWhereInput>>;
  OR?: InputMaybe<Array<CompanyWhereInput>>;
  addresses?: InputMaybe<CompanyAddressListRelationFilter>;
  attendanceBufferMinutes?: InputMaybe<IntFilter>;
  bio?: InputMaybe<StringFilter>;
  blacklist?: InputMaybe<BlacklistListRelationFilter>;
  comments?: InputMaybe<EmployeeRatingListRelationFilter>;
  companySize?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  email?: InputMaybe<StringFilter>;
  headerImage?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  industryId?: InputMaybe<IntNullableFilter>;
  invoices?: InputMaybe<InvoiceListRelationFilter>;
  jobPosting?: InputMaybe<JobPostingListRelationFilter>;
  jobs?: InputMaybe<EmployeeJobListRelationFilter>;
  logo?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  platformFeeRate?: InputMaybe<DecimalFilter>;
  sstRate?: InputMaybe<DecimalFilter>;
  uid?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
  warningLetters?: InputMaybe<EmployeeWarningLetterListRelationFilter>;
};

export type CompanyWhereUniqueInput = {
  AND?: InputMaybe<Array<CompanyWhereInput>>;
  NOT?: InputMaybe<Array<CompanyWhereInput>>;
  OR?: InputMaybe<Array<CompanyWhereInput>>;
  addresses?: InputMaybe<CompanyAddressListRelationFilter>;
  attendanceBufferMinutes?: InputMaybe<IntFilter>;
  bio?: InputMaybe<StringFilter>;
  blacklist?: InputMaybe<BlacklistListRelationFilter>;
  comments?: InputMaybe<EmployeeRatingListRelationFilter>;
  companySize?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  headerImage?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  industryId?: InputMaybe<IntNullableFilter>;
  invoices?: InputMaybe<InvoiceListRelationFilter>;
  jobPosting?: InputMaybe<JobPostingListRelationFilter>;
  jobs?: InputMaybe<EmployeeJobListRelationFilter>;
  logo?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  platformFeeRate?: InputMaybe<DecimalFilter>;
  sstRate?: InputMaybe<DecimalFilter>;
  uid?: InputMaybe<Scalars["String"]["input"]>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
  warningLetters?: InputMaybe<EmployeeWarningLetterListRelationFilter>;
};

export type CreateAdminInput = {
  email: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
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

export type DecimalFilter = {
  equals?: InputMaybe<Scalars["Decimal"]["input"]>;
  gt?: InputMaybe<Scalars["Decimal"]["input"]>;
  gte?: InputMaybe<Scalars["Decimal"]["input"]>;
  in?: InputMaybe<Array<Scalars["Decimal"]["input"]>>;
  lt?: InputMaybe<Scalars["Decimal"]["input"]>;
  lte?: InputMaybe<Scalars["Decimal"]["input"]>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars["Decimal"]["input"]>>;
};

export type DecimalNullableFilter = {
  equals?: InputMaybe<Scalars["Decimal"]["input"]>;
  gt?: InputMaybe<Scalars["Decimal"]["input"]>;
  gte?: InputMaybe<Scalars["Decimal"]["input"]>;
  in?: InputMaybe<Array<Scalars["Decimal"]["input"]>>;
  lt?: InputMaybe<Scalars["Decimal"]["input"]>;
  lte?: InputMaybe<Scalars["Decimal"]["input"]>;
  not?: InputMaybe<NestedDecimalNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Decimal"]["input"]>>;
};

export type Employee = {
  __typename?: "Employee";
  _count: EmployeeCount;
  address?: Maybe<Scalars["String"]["output"]>;
  alAvailable: Scalars["Boolean"]["output"];
  applications?: Maybe<Array<JobApplication>>;
  attendances?: Maybe<Array<EmployeeAttendance>>;
  averageRating: Scalars["Decimal"]["output"];
  bank?: Maybe<Bank>;
  bankAccountNo?: Maybe<Scalars["String"]["output"]>;
  bankId?: Maybe<Scalars["Int"]["output"]>;
  bankName?: Maybe<Scalars["String"]["output"]>;
  contactNumber: Scalars["String"]["output"];
  countryCode?: Maybe<Scalars["String"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  disburseMethod?: Maybe<Scalars["String"]["output"]>;
  dob?: Maybe<Scalars["String"]["output"]>;
  email: Scalars["String"]["output"];
  emergencyContact1?: Maybe<Scalars["String"]["output"]>;
  emergencyContact2?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  jobs?: Maybe<Array<EmployeeJob>>;
  mcAvailable: Scalars["Boolean"]["output"];
  name: Scalars["String"]["output"];
  nricBackPhoto?: Maybe<Scalars["String"]["output"]>;
  nricFrontPhoto?: Maybe<Scalars["String"]["output"]>;
  nricNumber: Scalars["String"]["output"];
  payments?: Maybe<Array<EmployeePayment>>;
  profilePicture?: Maybe<Scalars["String"]["output"]>;
  ratings?: Maybe<Array<EmployeeRating>>;
  resume?: Maybe<Scalars["String"]["output"]>;
  tng?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["DateTime"]["output"];
  user: User;
  warningLetter?: Maybe<Array<EmployeeWarningLetter>>;
};

export type EmployeeAttendance = {
  __typename?: "EmployeeAttendance";
  checkIn?: Maybe<Scalars["DateTime"]["output"]>;
  checkOut?: Maybe<Scalars["DateTime"]["output"]>;
  createdAt: Scalars["DateTime"]["output"];
  employee: Employee;
  employeeId: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  job: EmployeeJob;
  jobId: Scalars["Int"]["output"];
  publicHoliday: Scalars["Boolean"]["output"];
  status: AttendanceStatus;
  updatedAt: Scalars["DateTime"]["output"];
  workHours: Scalars["Int"]["output"];
  workMinutes: Scalars["Int"]["output"];
};

export type EmployeeAttendanceFindManyResult = {
  __typename?: "EmployeeAttendanceFindManyResult";
  data: Array<EmployeeAttendance>;
  total: Scalars["Int"]["output"];
};

export type EmployeeAttendanceListRelationFilter = {
  every?: InputMaybe<EmployeeAttendanceWhereInput>;
  none?: InputMaybe<EmployeeAttendanceWhereInput>;
  some?: InputMaybe<EmployeeAttendanceWhereInput>;
};

export type EmployeeAttendanceOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type EmployeeAttendanceOrderByWithRelationInput = {
  checkIn?: InputMaybe<SortOrderInput>;
  checkOut?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  employee?: InputMaybe<EmployeeOrderByWithRelationInput>;
  employeeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  job?: InputMaybe<EmployeeJobOrderByWithRelationInput>;
  jobId?: InputMaybe<SortOrder>;
  publicHoliday?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  workHours?: InputMaybe<SortOrder>;
  workMinutes?: InputMaybe<SortOrder>;
};

export enum EmployeeAttendanceScalarFieldEnum {
  CheckIn = "checkIn",
  CheckOut = "checkOut",
  CreatedAt = "createdAt",
  EmployeeId = "employeeId",
  Id = "id",
  JobId = "jobId",
  PublicHoliday = "publicHoliday",
  Status = "status",
  UpdatedAt = "updatedAt",
  WorkHours = "workHours",
  WorkMinutes = "workMinutes",
}

export type EmployeeAttendanceWhereInput = {
  AND?: InputMaybe<Array<EmployeeAttendanceWhereInput>>;
  NOT?: InputMaybe<Array<EmployeeAttendanceWhereInput>>;
  OR?: InputMaybe<Array<EmployeeAttendanceWhereInput>>;
  checkIn?: InputMaybe<DateTimeNullableFilter>;
  checkOut?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  employee?: InputMaybe<EmployeeRelationFilter>;
  employeeId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  job?: InputMaybe<EmployeeJobRelationFilter>;
  jobId?: InputMaybe<IntFilter>;
  publicHoliday?: InputMaybe<BoolFilter>;
  status?: InputMaybe<EnumAttendanceStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  workHours?: InputMaybe<IntFilter>;
  workMinutes?: InputMaybe<IntFilter>;
};

export type EmployeeAttendanceWhereUniqueInput = {
  AND?: InputMaybe<Array<EmployeeAttendanceWhereInput>>;
  NOT?: InputMaybe<Array<EmployeeAttendanceWhereInput>>;
  OR?: InputMaybe<Array<EmployeeAttendanceWhereInput>>;
  checkIn?: InputMaybe<DateTimeNullableFilter>;
  checkOut?: InputMaybe<DateTimeNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  employee?: InputMaybe<EmployeeRelationFilter>;
  employeeId?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  job?: InputMaybe<EmployeeJobRelationFilter>;
  jobId?: InputMaybe<IntFilter>;
  publicHoliday?: InputMaybe<BoolFilter>;
  status?: InputMaybe<EnumAttendanceStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  workHours?: InputMaybe<IntFilter>;
  workMinutes?: InputMaybe<IntFilter>;
};

export type EmployeeCount = {
  __typename?: "EmployeeCount";
  applications: Scalars["Int"]["output"];
  attendances: Scalars["Int"]["output"];
  blacklist: Scalars["Int"]["output"];
  jobs: Scalars["Int"]["output"];
  payments: Scalars["Int"]["output"];
  ratings: Scalars["Int"]["output"];
  warningLetter: Scalars["Int"]["output"];
};

export type EmployeeFindManyResult = {
  __typename?: "EmployeeFindManyResult";
  data: Array<Employee>;
  total: Scalars["Int"]["output"];
};

export type EmployeeJob = {
  __typename?: "EmployeeJob";
  _count: EmployeeJobCount;
  attendances?: Maybe<Array<EmployeeAttendance>>;
  company: Company;
  companyId: Scalars["Int"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  dailyRate: Scalars["Decimal"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  employee: Employee;
  employeeId: Scalars["Int"]["output"];
  endDate: Scalars["DateTime"]["output"];
  endTime: Scalars["String"]["output"];
  epfDeduction: Scalars["Boolean"]["output"];
  equipments: Scalars["JSON"]["output"];
  hourlyRate: Scalars["Decimal"]["output"];
  hoursPerDay: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  locationAddress: Scalars["String"]["output"];
  locationCity: Scalars["String"]["output"];
  locationPostcode: Scalars["String"]["output"];
  locationState: Scalars["String"]["output"];
  locationUrl: Scalars["String"]["output"];
  numShifts: Scalars["Int"]["output"];
  payments?: Maybe<Array<EmployeePayment>>;
  payoutType: PayoutType;
  postingId: Scalars["Int"]["output"];
  postingJob: JobPosting;
  ratings?: Maybe<Array<EmployeeRating>>;
  salary: Scalars["Decimal"]["output"];
  skills: Scalars["JSON"]["output"];
  startDate: Scalars["DateTime"]["output"];
  startTime: Scalars["String"]["output"];
  status: JobStatus;
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  warningLetter?: Maybe<Array<EmployeeWarningLetter>>;
};

export type EmployeeJobCount = {
  __typename?: "EmployeeJobCount";
  attendances: Scalars["Int"]["output"];
  payments: Scalars["Int"]["output"];
  ratings: Scalars["Int"]["output"];
  warningLetter: Scalars["Int"]["output"];
};

export type EmployeeJobFindManyResult = {
  __typename?: "EmployeeJobFindManyResult";
  data: Array<EmployeeJob>;
  total: Scalars["Int"]["output"];
};

export type EmployeeJobListRelationFilter = {
  every?: InputMaybe<EmployeeJobWhereInput>;
  none?: InputMaybe<EmployeeJobWhereInput>;
  some?: InputMaybe<EmployeeJobWhereInput>;
};

export type EmployeeJobNullableRelationFilter = {
  is?: InputMaybe<EmployeeJobWhereInput>;
  isNot?: InputMaybe<EmployeeJobWhereInput>;
};

export type EmployeeJobOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type EmployeeJobOrderByWithRelationInput = {
  attendances?: InputMaybe<EmployeeAttendanceOrderByRelationAggregateInput>;
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  dailyRate?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrderInput>;
  employee?: InputMaybe<EmployeeOrderByWithRelationInput>;
  employeeId?: InputMaybe<SortOrder>;
  endDate?: InputMaybe<SortOrder>;
  endTime?: InputMaybe<SortOrder>;
  epfDeduction?: InputMaybe<SortOrder>;
  equipments?: InputMaybe<SortOrder>;
  hourlyRate?: InputMaybe<SortOrder>;
  hoursPerDay?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locationAddress?: InputMaybe<SortOrder>;
  locationCity?: InputMaybe<SortOrder>;
  locationPostcode?: InputMaybe<SortOrder>;
  locationState?: InputMaybe<SortOrder>;
  locationUrl?: InputMaybe<SortOrder>;
  numShifts?: InputMaybe<SortOrder>;
  payments?: InputMaybe<EmployeePaymentOrderByRelationAggregateInput>;
  payoutType?: InputMaybe<SortOrder>;
  postingId?: InputMaybe<SortOrder>;
  postingJob?: InputMaybe<JobPostingOrderByWithRelationInput>;
  ratings?: InputMaybe<EmployeeRatingOrderByRelationAggregateInput>;
  salary?: InputMaybe<SortOrder>;
  skills?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
  startTime?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  warningLetter?: InputMaybe<EmployeeWarningLetterOrderByRelationAggregateInput>;
};

export type EmployeeJobRelationFilter = {
  is?: InputMaybe<EmployeeJobWhereInput>;
  isNot?: InputMaybe<EmployeeJobWhereInput>;
};

export enum EmployeeJobScalarFieldEnum {
  CompanyId = "companyId",
  CreatedAt = "createdAt",
  DailyRate = "dailyRate",
  DeletedAt = "deletedAt",
  Description = "description",
  EmployeeId = "employeeId",
  EndDate = "endDate",
  EndTime = "endTime",
  EpfDeduction = "epfDeduction",
  Equipments = "equipments",
  HourlyRate = "hourlyRate",
  HoursPerDay = "hoursPerDay",
  Id = "id",
  LocationAddress = "locationAddress",
  LocationCity = "locationCity",
  LocationPostcode = "locationPostcode",
  LocationState = "locationState",
  LocationUrl = "locationUrl",
  NumShifts = "numShifts",
  PayoutType = "payoutType",
  PostingId = "postingId",
  Salary = "salary",
  Skills = "skills",
  StartDate = "startDate",
  StartTime = "startTime",
  Status = "status",
  Title = "title",
  UpdatedAt = "updatedAt",
}

export type EmployeeJobWhereInput = {
  AND?: InputMaybe<Array<EmployeeJobWhereInput>>;
  NOT?: InputMaybe<Array<EmployeeJobWhereInput>>;
  OR?: InputMaybe<Array<EmployeeJobWhereInput>>;
  attendances?: InputMaybe<EmployeeAttendanceListRelationFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dailyRate?: InputMaybe<DecimalFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  employee?: InputMaybe<EmployeeRelationFilter>;
  employeeId?: InputMaybe<IntFilter>;
  endDate?: InputMaybe<DateTimeFilter>;
  endTime?: InputMaybe<StringFilter>;
  epfDeduction?: InputMaybe<BoolFilter>;
  equipments?: InputMaybe<JsonFilter>;
  hourlyRate?: InputMaybe<DecimalFilter>;
  hoursPerDay?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  locationAddress?: InputMaybe<StringFilter>;
  locationCity?: InputMaybe<StringFilter>;
  locationPostcode?: InputMaybe<StringFilter>;
  locationState?: InputMaybe<StringFilter>;
  locationUrl?: InputMaybe<StringFilter>;
  numShifts?: InputMaybe<IntFilter>;
  payments?: InputMaybe<EmployeePaymentListRelationFilter>;
  payoutType?: InputMaybe<EnumPayoutTypeFilter>;
  postingId?: InputMaybe<IntFilter>;
  postingJob?: InputMaybe<JobPostingRelationFilter>;
  ratings?: InputMaybe<EmployeeRatingListRelationFilter>;
  salary?: InputMaybe<DecimalFilter>;
  skills?: InputMaybe<JsonFilter>;
  startDate?: InputMaybe<DateTimeFilter>;
  startTime?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumJobStatusFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  warningLetter?: InputMaybe<EmployeeWarningLetterListRelationFilter>;
};

export type EmployeeJobWhereUniqueInput = {
  AND?: InputMaybe<Array<EmployeeJobWhereInput>>;
  NOT?: InputMaybe<Array<EmployeeJobWhereInput>>;
  OR?: InputMaybe<Array<EmployeeJobWhereInput>>;
  attendances?: InputMaybe<EmployeeAttendanceListRelationFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dailyRate?: InputMaybe<DecimalFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  employee?: InputMaybe<EmployeeRelationFilter>;
  employeeId?: InputMaybe<IntFilter>;
  endDate?: InputMaybe<DateTimeFilter>;
  endTime?: InputMaybe<StringFilter>;
  epfDeduction?: InputMaybe<BoolFilter>;
  equipments?: InputMaybe<JsonFilter>;
  hourlyRate?: InputMaybe<DecimalFilter>;
  hoursPerDay?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  locationAddress?: InputMaybe<StringFilter>;
  locationCity?: InputMaybe<StringFilter>;
  locationPostcode?: InputMaybe<StringFilter>;
  locationState?: InputMaybe<StringFilter>;
  locationUrl?: InputMaybe<StringFilter>;
  numShifts?: InputMaybe<IntFilter>;
  payments?: InputMaybe<EmployeePaymentListRelationFilter>;
  payoutType?: InputMaybe<EnumPayoutTypeFilter>;
  postingId?: InputMaybe<IntFilter>;
  postingJob?: InputMaybe<JobPostingRelationFilter>;
  ratings?: InputMaybe<EmployeeRatingListRelationFilter>;
  salary?: InputMaybe<DecimalFilter>;
  skills?: InputMaybe<JsonFilter>;
  startDate?: InputMaybe<DateTimeFilter>;
  startTime?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumJobStatusFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  warningLetter?: InputMaybe<EmployeeWarningLetterListRelationFilter>;
};

export type EmployeeListRelationFilter = {
  every?: InputMaybe<EmployeeWhereInput>;
  none?: InputMaybe<EmployeeWhereInput>;
  some?: InputMaybe<EmployeeWhereInput>;
};

export type EmployeeNullableRelationFilter = {
  is?: InputMaybe<EmployeeWhereInput>;
  isNot?: InputMaybe<EmployeeWhereInput>;
};

export type EmployeeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type EmployeeOrderByWithRelationInput = {
  address?: InputMaybe<SortOrderInput>;
  alAvailable?: InputMaybe<SortOrder>;
  applications?: InputMaybe<JobApplicationOrderByRelationAggregateInput>;
  attendances?: InputMaybe<EmployeeAttendanceOrderByRelationAggregateInput>;
  averageRating?: InputMaybe<SortOrder>;
  bank?: InputMaybe<BankOrderByWithRelationInput>;
  bankAccountNo?: InputMaybe<SortOrderInput>;
  bankId?: InputMaybe<SortOrderInput>;
  bankName?: InputMaybe<SortOrderInput>;
  blacklist?: InputMaybe<BlacklistOrderByRelationAggregateInput>;
  contactNumber?: InputMaybe<SortOrder>;
  countryCode?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrderInput>;
  disburseMethod?: InputMaybe<SortOrderInput>;
  dob?: InputMaybe<SortOrderInput>;
  email?: InputMaybe<SortOrder>;
  emergencyContact1?: InputMaybe<SortOrderInput>;
  emergencyContact2?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  jobs?: InputMaybe<EmployeeJobOrderByRelationAggregateInput>;
  mcAvailable?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  nricBackPhoto?: InputMaybe<SortOrderInput>;
  nricFrontPhoto?: InputMaybe<SortOrderInput>;
  nricNumber?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  payments?: InputMaybe<EmployeePaymentOrderByRelationAggregateInput>;
  profilePicture?: InputMaybe<SortOrderInput>;
  ratings?: InputMaybe<EmployeeRatingOrderByRelationAggregateInput>;
  resume?: InputMaybe<SortOrderInput>;
  tng?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  warningLetter?: InputMaybe<EmployeeWarningLetterOrderByRelationAggregateInput>;
};

export type EmployeePayment = {
  __typename?: "EmployeePayment";
  amount: Scalars["Decimal"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  employee: Employee;
  employeeId: Scalars["Int"]["output"];
  epfAmount: Scalars["Decimal"]["output"];
  id: Scalars["Int"]["output"];
  job: EmployeeJob;
  jobId: Scalars["Int"]["output"];
  payoutDate?: Maybe<Scalars["DateTime"]["output"]>;
  socsoAmount: Scalars["Decimal"]["output"];
  status: PaymentStatus;
  updatedAt: Scalars["DateTime"]["output"];
};

export type EmployeePaymentFindManyResult = {
  __typename?: "EmployeePaymentFindManyResult";
  data: Array<EmployeePayment>;
  total: Scalars["Int"]["output"];
};

export type EmployeePaymentListRelationFilter = {
  every?: InputMaybe<EmployeePaymentWhereInput>;
  none?: InputMaybe<EmployeePaymentWhereInput>;
  some?: InputMaybe<EmployeePaymentWhereInput>;
};

export type EmployeePaymentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type EmployeePaymentOrderByWithRelationInput = {
  amount?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  employee?: InputMaybe<EmployeeOrderByWithRelationInput>;
  employeeId?: InputMaybe<SortOrder>;
  epfAmount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  job?: InputMaybe<EmployeeJobOrderByWithRelationInput>;
  jobId?: InputMaybe<SortOrder>;
  payoutDate?: InputMaybe<SortOrderInput>;
  socsoAmount?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum EmployeePaymentScalarFieldEnum {
  Amount = "amount",
  CreatedAt = "createdAt",
  EmployeeId = "employeeId",
  EpfAmount = "epfAmount",
  Id = "id",
  JobId = "jobId",
  PayoutDate = "payoutDate",
  SocsoAmount = "socsoAmount",
  Status = "status",
  UpdatedAt = "updatedAt",
}

export type EmployeePaymentWhereInput = {
  AND?: InputMaybe<Array<EmployeePaymentWhereInput>>;
  NOT?: InputMaybe<Array<EmployeePaymentWhereInput>>;
  OR?: InputMaybe<Array<EmployeePaymentWhereInput>>;
  amount?: InputMaybe<DecimalFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  employee?: InputMaybe<EmployeeRelationFilter>;
  employeeId?: InputMaybe<IntFilter>;
  epfAmount?: InputMaybe<DecimalFilter>;
  id?: InputMaybe<IntFilter>;
  job?: InputMaybe<EmployeeJobRelationFilter>;
  jobId?: InputMaybe<IntFilter>;
  payoutDate?: InputMaybe<DateTimeNullableFilter>;
  socsoAmount?: InputMaybe<DecimalFilter>;
  status?: InputMaybe<EnumPaymentStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type EmployeePaymentWhereUniqueInput = {
  AND?: InputMaybe<Array<EmployeePaymentWhereInput>>;
  NOT?: InputMaybe<Array<EmployeePaymentWhereInput>>;
  OR?: InputMaybe<Array<EmployeePaymentWhereInput>>;
  amount?: InputMaybe<DecimalFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  employee?: InputMaybe<EmployeeRelationFilter>;
  employeeId?: InputMaybe<IntFilter>;
  epfAmount?: InputMaybe<DecimalFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  job?: InputMaybe<EmployeeJobRelationFilter>;
  jobId?: InputMaybe<IntFilter>;
  payoutDate?: InputMaybe<DateTimeNullableFilter>;
  socsoAmount?: InputMaybe<DecimalFilter>;
  status?: InputMaybe<EnumPaymentStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type EmployeeRating = {
  __typename?: "EmployeeRating";
  comment?: Maybe<Scalars["String"]["output"]>;
  company: Company;
  companyId: Scalars["Int"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  employee: Employee;
  employeeId: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  job?: Maybe<EmployeeJob>;
  jobId?: Maybe<Scalars["Int"]["output"]>;
  rating: Scalars["Decimal"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
};

export type EmployeeRatingFindManyResult = {
  __typename?: "EmployeeRatingFindManyResult";
  data: Array<EmployeeRating>;
  total: Scalars["Int"]["output"];
};

export type EmployeeRatingListRelationFilter = {
  every?: InputMaybe<EmployeeRatingWhereInput>;
  none?: InputMaybe<EmployeeRatingWhereInput>;
  some?: InputMaybe<EmployeeRatingWhereInput>;
};

export type EmployeeRatingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type EmployeeRatingOrderByWithRelationInput = {
  comment?: InputMaybe<SortOrderInput>;
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrderInput>;
  employee?: InputMaybe<EmployeeOrderByWithRelationInput>;
  employeeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  job?: InputMaybe<EmployeeJobOrderByWithRelationInput>;
  jobId?: InputMaybe<SortOrderInput>;
  rating?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum EmployeeRatingScalarFieldEnum {
  Comment = "comment",
  CompanyId = "companyId",
  CreatedAt = "createdAt",
  DeletedAt = "deletedAt",
  EmployeeId = "employeeId",
  Id = "id",
  JobId = "jobId",
  Rating = "rating",
  UpdatedAt = "updatedAt",
}

export type EmployeeRatingWhereInput = {
  AND?: InputMaybe<Array<EmployeeRatingWhereInput>>;
  NOT?: InputMaybe<Array<EmployeeRatingWhereInput>>;
  OR?: InputMaybe<Array<EmployeeRatingWhereInput>>;
  comment?: InputMaybe<StringNullableFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  employee?: InputMaybe<EmployeeRelationFilter>;
  employeeId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  job?: InputMaybe<EmployeeJobNullableRelationFilter>;
  jobId?: InputMaybe<IntNullableFilter>;
  rating?: InputMaybe<DecimalFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type EmployeeRatingWhereUniqueInput = {
  AND?: InputMaybe<Array<EmployeeRatingWhereInput>>;
  NOT?: InputMaybe<Array<EmployeeRatingWhereInput>>;
  OR?: InputMaybe<Array<EmployeeRatingWhereInput>>;
  comment?: InputMaybe<StringNullableFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  employee?: InputMaybe<EmployeeRelationFilter>;
  employeeId?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  job?: InputMaybe<EmployeeJobNullableRelationFilter>;
  jobId?: InputMaybe<IntNullableFilter>;
  rating?: InputMaybe<DecimalFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type EmployeeRelationFilter = {
  is?: InputMaybe<EmployeeWhereInput>;
  isNot?: InputMaybe<EmployeeWhereInput>;
};

export enum EmployeeScalarFieldEnum {
  Address = "address",
  AlAvailable = "alAvailable",
  AverageRating = "averageRating",
  BankAccountNo = "bankAccountNo",
  BankId = "bankId",
  BankName = "bankName",
  ContactNumber = "contactNumber",
  CountryCode = "countryCode",
  CreatedAt = "createdAt",
  DeletedAt = "deletedAt",
  DisburseMethod = "disburseMethod",
  Dob = "dob",
  Email = "email",
  EmergencyContact1 = "emergencyContact1",
  EmergencyContact2 = "emergencyContact2",
  Id = "id",
  McAvailable = "mcAvailable",
  Name = "name",
  NricBackPhoto = "nricBackPhoto",
  NricFrontPhoto = "nricFrontPhoto",
  NricNumber = "nricNumber",
  Password = "password",
  ProfilePicture = "profilePicture",
  Resume = "resume",
  Tng = "tng",
  UpdatedAt = "updatedAt",
}

export type EmployeeWarningLetter = {
  __typename?: "EmployeeWarningLetter";
  acknowledgedAt?: Maybe<Scalars["DateTime"]["output"]>;
  company: Company;
  companyId: Scalars["Int"]["output"];
  content: Scalars["String"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  createdById?: Maybe<Scalars["Int"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedById?: Maybe<Scalars["Int"]["output"]>;
  employee: Employee;
  employeeId: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  job?: Maybe<EmployeeJob>;
  jobId?: Maybe<Scalars["Int"]["output"]>;
  status: LetterStatus;
  updatedAt: Scalars["DateTime"]["output"];
  updatedById?: Maybe<Scalars["Int"]["output"]>;
};

export type EmployeeWarningLetterFindManyResult = {
  __typename?: "EmployeeWarningLetterFindManyResult";
  data: Array<EmployeeWarningLetter>;
  total: Scalars["Int"]["output"];
};

export type EmployeeWarningLetterListRelationFilter = {
  every?: InputMaybe<EmployeeWarningLetterWhereInput>;
  none?: InputMaybe<EmployeeWarningLetterWhereInput>;
  some?: InputMaybe<EmployeeWarningLetterWhereInput>;
};

export type EmployeeWarningLetterOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type EmployeeWarningLetterOrderByWithRelationInput = {
  acknowledgedAt?: InputMaybe<SortOrderInput>;
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  companyId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrderInput>;
  deletedAt?: InputMaybe<SortOrderInput>;
  deletedById?: InputMaybe<SortOrderInput>;
  employee?: InputMaybe<EmployeeOrderByWithRelationInput>;
  employeeId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  job?: InputMaybe<EmployeeJobOrderByWithRelationInput>;
  jobId?: InputMaybe<SortOrderInput>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedById?: InputMaybe<SortOrderInput>;
};

export enum EmployeeWarningLetterScalarFieldEnum {
  AcknowledgedAt = "acknowledgedAt",
  CompanyId = "companyId",
  Content = "content",
  CreatedAt = "createdAt",
  CreatedById = "createdById",
  DeletedAt = "deletedAt",
  DeletedById = "deletedById",
  EmployeeId = "employeeId",
  Id = "id",
  JobId = "jobId",
  Status = "status",
  UpdatedAt = "updatedAt",
  UpdatedById = "updatedById",
}

export type EmployeeWarningLetterWhereInput = {
  AND?: InputMaybe<Array<EmployeeWarningLetterWhereInput>>;
  NOT?: InputMaybe<Array<EmployeeWarningLetterWhereInput>>;
  OR?: InputMaybe<Array<EmployeeWarningLetterWhereInput>>;
  acknowledgedAt?: InputMaybe<DateTimeNullableFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<IntFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  employee?: InputMaybe<EmployeeRelationFilter>;
  employeeId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  job?: InputMaybe<EmployeeJobNullableRelationFilter>;
  jobId?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<EnumLetterStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
};

export type EmployeeWarningLetterWhereUniqueInput = {
  AND?: InputMaybe<Array<EmployeeWarningLetterWhereInput>>;
  NOT?: InputMaybe<Array<EmployeeWarningLetterWhereInput>>;
  OR?: InputMaybe<Array<EmployeeWarningLetterWhereInput>>;
  acknowledgedAt?: InputMaybe<DateTimeNullableFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<IntFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  employee?: InputMaybe<EmployeeRelationFilter>;
  employeeId?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  job?: InputMaybe<EmployeeJobNullableRelationFilter>;
  jobId?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<EnumLetterStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
};

export type EmployeeWhereInput = {
  AND?: InputMaybe<Array<EmployeeWhereInput>>;
  NOT?: InputMaybe<Array<EmployeeWhereInput>>;
  OR?: InputMaybe<Array<EmployeeWhereInput>>;
  address?: InputMaybe<StringNullableFilter>;
  alAvailable?: InputMaybe<BoolFilter>;
  applications?: InputMaybe<JobApplicationListRelationFilter>;
  attendances?: InputMaybe<EmployeeAttendanceListRelationFilter>;
  averageRating?: InputMaybe<DecimalFilter>;
  bank?: InputMaybe<BankNullableRelationFilter>;
  bankAccountNo?: InputMaybe<StringNullableFilter>;
  bankId?: InputMaybe<IntNullableFilter>;
  bankName?: InputMaybe<StringNullableFilter>;
  blacklist?: InputMaybe<BlacklistListRelationFilter>;
  contactNumber?: InputMaybe<StringFilter>;
  countryCode?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  disburseMethod?: InputMaybe<StringNullableFilter>;
  dob?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringFilter>;
  emergencyContact1?: InputMaybe<StringNullableFilter>;
  emergencyContact2?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  jobs?: InputMaybe<EmployeeJobListRelationFilter>;
  mcAvailable?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  nricBackPhoto?: InputMaybe<StringNullableFilter>;
  nricFrontPhoto?: InputMaybe<StringNullableFilter>;
  nricNumber?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  payments?: InputMaybe<EmployeePaymentListRelationFilter>;
  profilePicture?: InputMaybe<StringNullableFilter>;
  ratings?: InputMaybe<EmployeeRatingListRelationFilter>;
  resume?: InputMaybe<StringNullableFilter>;
  tng?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  warningLetter?: InputMaybe<EmployeeWarningLetterListRelationFilter>;
};

export type EmployeeWhereUniqueInput = {
  AND?: InputMaybe<Array<EmployeeWhereInput>>;
  NOT?: InputMaybe<Array<EmployeeWhereInput>>;
  OR?: InputMaybe<Array<EmployeeWhereInput>>;
  address?: InputMaybe<StringNullableFilter>;
  alAvailable?: InputMaybe<BoolFilter>;
  applications?: InputMaybe<JobApplicationListRelationFilter>;
  attendances?: InputMaybe<EmployeeAttendanceListRelationFilter>;
  averageRating?: InputMaybe<DecimalFilter>;
  bank?: InputMaybe<BankNullableRelationFilter>;
  bankAccountNo?: InputMaybe<StringNullableFilter>;
  bankId?: InputMaybe<IntNullableFilter>;
  bankName?: InputMaybe<StringNullableFilter>;
  blacklist?: InputMaybe<BlacklistListRelationFilter>;
  contactNumber?: InputMaybe<StringFilter>;
  countryCode?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  disburseMethod?: InputMaybe<StringNullableFilter>;
  dob?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  emergencyContact1?: InputMaybe<StringNullableFilter>;
  emergencyContact2?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  jobs?: InputMaybe<EmployeeJobListRelationFilter>;
  mcAvailable?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  nricBackPhoto?: InputMaybe<StringNullableFilter>;
  nricFrontPhoto?: InputMaybe<StringNullableFilter>;
  nricNumber?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<StringFilter>;
  payments?: InputMaybe<EmployeePaymentListRelationFilter>;
  profilePicture?: InputMaybe<StringNullableFilter>;
  ratings?: InputMaybe<EmployeeRatingListRelationFilter>;
  resume?: InputMaybe<StringNullableFilter>;
  tng?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  warningLetter?: InputMaybe<EmployeeWarningLetterListRelationFilter>;
};

export type EnumApplicationStatusFilter = {
  equals?: InputMaybe<ApplicationStatus>;
  in?: InputMaybe<Array<ApplicationStatus>>;
  not?: InputMaybe<NestedEnumApplicationStatusFilter>;
  notIn?: InputMaybe<Array<ApplicationStatus>>;
};

export type EnumAttendanceStatusFilter = {
  equals?: InputMaybe<AttendanceStatus>;
  in?: InputMaybe<Array<AttendanceStatus>>;
  not?: InputMaybe<NestedEnumAttendanceStatusFilter>;
  notIn?: InputMaybe<Array<AttendanceStatus>>;
};

export type EnumAuthTokenTypeFilter = {
  equals?: InputMaybe<AuthTokenType>;
  in?: InputMaybe<Array<AuthTokenType>>;
  not?: InputMaybe<NestedEnumAuthTokenTypeFilter>;
  notIn?: InputMaybe<Array<AuthTokenType>>;
};

export type EnumCompanyUserRoleFilter = {
  equals?: InputMaybe<CompanyUserRole>;
  in?: InputMaybe<Array<CompanyUserRole>>;
  not?: InputMaybe<NestedEnumCompanyUserRoleFilter>;
  notIn?: InputMaybe<Array<CompanyUserRole>>;
};

export type EnumGenderNullableFilter = {
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumGenderNullableFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type EnumInvoiceStatusFilter = {
  equals?: InputMaybe<InvoiceStatus>;
  in?: InputMaybe<Array<InvoiceStatus>>;
  not?: InputMaybe<NestedEnumInvoiceStatusFilter>;
  notIn?: InputMaybe<Array<InvoiceStatus>>;
};

export type EnumJobPostingStatusFilter = {
  equals?: InputMaybe<JobPostingStatus>;
  in?: InputMaybe<Array<JobPostingStatus>>;
  not?: InputMaybe<NestedEnumJobPostingStatusFilter>;
  notIn?: InputMaybe<Array<JobPostingStatus>>;
};

export type EnumJobStatusFilter = {
  equals?: InputMaybe<JobStatus>;
  in?: InputMaybe<Array<JobStatus>>;
  not?: InputMaybe<NestedEnumJobStatusFilter>;
  notIn?: InputMaybe<Array<JobStatus>>;
};

export type EnumLetterStatusFilter = {
  equals?: InputMaybe<LetterStatus>;
  in?: InputMaybe<Array<LetterStatus>>;
  not?: InputMaybe<NestedEnumLetterStatusFilter>;
  notIn?: InputMaybe<Array<LetterStatus>>;
};

export type EnumPaymentStatusFilter = {
  equals?: InputMaybe<PaymentStatus>;
  in?: InputMaybe<Array<PaymentStatus>>;
  not?: InputMaybe<NestedEnumPaymentStatusFilter>;
  notIn?: InputMaybe<Array<PaymentStatus>>;
};

export type EnumPayoutTypeFilter = {
  equals?: InputMaybe<PayoutType>;
  in?: InputMaybe<Array<PayoutType>>;
  not?: InputMaybe<NestedEnumPayoutTypeFilter>;
  notIn?: InputMaybe<Array<PayoutType>>;
};

export type EnumPayrollStatusFilter = {
  equals?: InputMaybe<PayrollStatus>;
  in?: InputMaybe<Array<PayrollStatus>>;
  not?: InputMaybe<NestedEnumPayrollStatusFilter>;
  notIn?: InputMaybe<Array<PayrollStatus>>;
};

export type EnumUserTypeFilter = {
  equals?: InputMaybe<UserType>;
  in?: InputMaybe<Array<UserType>>;
  not?: InputMaybe<NestedEnumUserTypeFilter>;
  notIn?: InputMaybe<Array<UserType>>;
};

export type Equipment = {
  __typename?: "Equipment";
  _count: EquipmentCount;
  createdAt: Scalars["DateTime"]["output"];
  createdById?: Maybe<Scalars["Int"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedById?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  jobPostings?: Maybe<Array<JobPosting>>;
  name: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  updatedById?: Maybe<Scalars["Int"]["output"]>;
};

export type EquipmentCount = {
  __typename?: "EquipmentCount";
  jobPostings: Scalars["Int"]["output"];
};

export type EquipmentFindManyResult = {
  __typename?: "EquipmentFindManyResult";
  data: Array<Equipment>;
  total: Scalars["Int"]["output"];
};

export type EquipmentListRelationFilter = {
  every?: InputMaybe<EquipmentWhereInput>;
  none?: InputMaybe<EquipmentWhereInput>;
  some?: InputMaybe<EquipmentWhereInput>;
};

export type EquipmentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type EquipmentOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrderInput>;
  deletedAt?: InputMaybe<SortOrderInput>;
  deletedById?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  jobPostings?: InputMaybe<JobPostingOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedById?: InputMaybe<SortOrderInput>;
};

export enum EquipmentScalarFieldEnum {
  CreatedAt = "createdAt",
  CreatedById = "createdById",
  DeletedAt = "deletedAt",
  DeletedById = "deletedById",
  Description = "description",
  Id = "id",
  Name = "name",
  UpdatedAt = "updatedAt",
  UpdatedById = "updatedById",
}

export type EquipmentWhereInput = {
  AND?: InputMaybe<Array<EquipmentWhereInput>>;
  NOT?: InputMaybe<Array<EquipmentWhereInput>>;
  OR?: InputMaybe<Array<EquipmentWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  jobPostings?: InputMaybe<JobPostingListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
};

export type EquipmentWhereUniqueInput = {
  AND?: InputMaybe<Array<EquipmentWhereInput>>;
  NOT?: InputMaybe<Array<EquipmentWhereInput>>;
  OR?: InputMaybe<Array<EquipmentWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  jobPostings?: InputMaybe<JobPostingListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
};

export enum Gender {
  Female = "FEMALE",
  Male = "MALE",
}

export type Industry = {
  __typename?: "Industry";
  createdAt: Scalars["DateTime"]["output"];
  createdById?: Maybe<Scalars["Int"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedById?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  updatedById?: Maybe<Scalars["Int"]["output"]>;
};

export type IndustryFindManyResult = {
  __typename?: "IndustryFindManyResult";
  data: Array<Industry>;
  total: Scalars["Int"]["output"];
};

export type IndustryOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrderInput>;
  deletedAt?: InputMaybe<SortOrderInput>;
  deletedById?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedById?: InputMaybe<SortOrderInput>;
};

export enum IndustryScalarFieldEnum {
  CreatedAt = "createdAt",
  CreatedById = "createdById",
  DeletedAt = "deletedAt",
  DeletedById = "deletedById",
  Description = "description",
  Id = "id",
  Name = "name",
  UpdatedAt = "updatedAt",
  UpdatedById = "updatedById",
}

export type IndustryWhereInput = {
  AND?: InputMaybe<Array<IndustryWhereInput>>;
  NOT?: InputMaybe<Array<IndustryWhereInput>>;
  OR?: InputMaybe<Array<IndustryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
};

export type IndustryWhereUniqueInput = {
  AND?: InputMaybe<Array<IndustryWhereInput>>;
  NOT?: InputMaybe<Array<IndustryWhereInput>>;
  OR?: InputMaybe<Array<IndustryWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  name?: InputMaybe<StringFilter>;
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

export type Invoice = {
  __typename?: "Invoice";
  _count: InvoiceCount;
  amount: Scalars["Decimal"]["output"];
  company: Company;
  companyId: Scalars["Int"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  createdById?: Maybe<Scalars["Int"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedById?: Maybe<Scalars["Int"]["output"]>;
  dueDate: Scalars["DateTime"]["output"];
  id: Scalars["Int"]["output"];
  items?: Maybe<Array<InvoiceItem>>;
  paidAt?: Maybe<Scalars["DateTime"]["output"]>;
  platformFee: Scalars["Decimal"]["output"];
  platformRate: Scalars["Decimal"]["output"];
  sstAmount: Scalars["Decimal"]["output"];
  sstRate: Scalars["Decimal"]["output"];
  status: InvoiceStatus;
  totalAmount: Scalars["Decimal"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  updatedById?: Maybe<Scalars["Int"]["output"]>;
};

export type InvoiceCount = {
  __typename?: "InvoiceCount";
  items: Scalars["Int"]["output"];
};

export type InvoiceFindManyResult = {
  __typename?: "InvoiceFindManyResult";
  data: Array<Invoice>;
  total: Scalars["Int"]["output"];
};

export type InvoiceItem = {
  __typename?: "InvoiceItem";
  amount: Scalars["Decimal"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  invoice: Invoice;
  invoiceId: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
  payroll: Payroll;
  payrollId: Scalars["Int"]["output"];
  quantity: Scalars["Int"]["output"];
};

export type InvoiceItemFindManyResult = {
  __typename?: "InvoiceItemFindManyResult";
  data: Array<InvoiceItem>;
  total: Scalars["Int"]["output"];
};

export type InvoiceItemListRelationFilter = {
  every?: InputMaybe<InvoiceItemWhereInput>;
  none?: InputMaybe<InvoiceItemWhereInput>;
  some?: InputMaybe<InvoiceItemWhereInput>;
};

export type InvoiceItemOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type InvoiceItemOrderByWithRelationInput = {
  amount?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  invoice?: InputMaybe<InvoiceOrderByWithRelationInput>;
  invoiceId?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  payroll?: InputMaybe<PayrollOrderByWithRelationInput>;
  payrollId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
};

export enum InvoiceItemScalarFieldEnum {
  Amount = "amount",
  CreatedAt = "createdAt",
  Description = "description",
  Id = "id",
  InvoiceId = "invoiceId",
  Name = "name",
  PayrollId = "payrollId",
  Quantity = "quantity",
}

export type InvoiceItemWhereInput = {
  AND?: InputMaybe<Array<InvoiceItemWhereInput>>;
  NOT?: InputMaybe<Array<InvoiceItemWhereInput>>;
  OR?: InputMaybe<Array<InvoiceItemWhereInput>>;
  amount?: InputMaybe<DecimalFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  invoice?: InputMaybe<InvoiceRelationFilter>;
  invoiceId?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  payroll?: InputMaybe<PayrollRelationFilter>;
  payrollId?: InputMaybe<IntFilter>;
  quantity?: InputMaybe<IntFilter>;
};

export type InvoiceItemWhereUniqueInput = {
  AND?: InputMaybe<Array<InvoiceItemWhereInput>>;
  NOT?: InputMaybe<Array<InvoiceItemWhereInput>>;
  OR?: InputMaybe<Array<InvoiceItemWhereInput>>;
  amount?: InputMaybe<DecimalFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  invoice?: InputMaybe<InvoiceRelationFilter>;
  invoiceId?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  payroll?: InputMaybe<PayrollRelationFilter>;
  payrollId?: InputMaybe<IntFilter>;
  quantity?: InputMaybe<IntFilter>;
};

export type InvoiceListRelationFilter = {
  every?: InputMaybe<InvoiceWhereInput>;
  none?: InputMaybe<InvoiceWhereInput>;
  some?: InputMaybe<InvoiceWhereInput>;
};

export type InvoiceOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type InvoiceOrderByWithRelationInput = {
  amount?: InputMaybe<SortOrder>;
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrderInput>;
  deletedAt?: InputMaybe<SortOrderInput>;
  deletedById?: InputMaybe<SortOrderInput>;
  dueDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  items?: InputMaybe<InvoiceItemOrderByRelationAggregateInput>;
  paidAt?: InputMaybe<SortOrderInput>;
  platformFee?: InputMaybe<SortOrder>;
  platformRate?: InputMaybe<SortOrder>;
  sstAmount?: InputMaybe<SortOrder>;
  sstRate?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  totalAmount?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedById?: InputMaybe<SortOrderInput>;
};

export type InvoiceRelationFilter = {
  is?: InputMaybe<InvoiceWhereInput>;
  isNot?: InputMaybe<InvoiceWhereInput>;
};

export enum InvoiceScalarFieldEnum {
  Amount = "amount",
  CompanyId = "companyId",
  CreatedAt = "createdAt",
  CreatedById = "createdById",
  DeletedAt = "deletedAt",
  DeletedById = "deletedById",
  DueDate = "dueDate",
  Id = "id",
  PaidAt = "paidAt",
  PlatformFee = "platformFee",
  PlatformRate = "platformRate",
  SstAmount = "sstAmount",
  SstRate = "sstRate",
  Status = "status",
  TotalAmount = "totalAmount",
  UpdatedAt = "updatedAt",
  UpdatedById = "updatedById",
}

export enum InvoiceStatus {
  Cancelled = "CANCELLED",
  Paid = "PAID",
  Pending = "PENDING",
}

export type InvoiceWhereInput = {
  AND?: InputMaybe<Array<InvoiceWhereInput>>;
  NOT?: InputMaybe<Array<InvoiceWhereInput>>;
  OR?: InputMaybe<Array<InvoiceWhereInput>>;
  amount?: InputMaybe<DecimalFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  dueDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  items?: InputMaybe<InvoiceItemListRelationFilter>;
  paidAt?: InputMaybe<DateTimeNullableFilter>;
  platformFee?: InputMaybe<DecimalFilter>;
  platformRate?: InputMaybe<DecimalFilter>;
  sstAmount?: InputMaybe<DecimalFilter>;
  sstRate?: InputMaybe<DecimalFilter>;
  status?: InputMaybe<EnumInvoiceStatusFilter>;
  totalAmount?: InputMaybe<DecimalFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
};

export type InvoiceWhereUniqueInput = {
  AND?: InputMaybe<Array<InvoiceWhereInput>>;
  NOT?: InputMaybe<Array<InvoiceWhereInput>>;
  OR?: InputMaybe<Array<InvoiceWhereInput>>;
  amount?: InputMaybe<DecimalFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  dueDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  items?: InputMaybe<InvoiceItemListRelationFilter>;
  paidAt?: InputMaybe<DateTimeNullableFilter>;
  platformFee?: InputMaybe<DecimalFilter>;
  platformRate?: InputMaybe<DecimalFilter>;
  sstAmount?: InputMaybe<DecimalFilter>;
  sstRate?: InputMaybe<DecimalFilter>;
  status?: InputMaybe<EnumInvoiceStatusFilter>;
  totalAmount?: InputMaybe<DecimalFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
};

export type JobApplication = {
  __typename?: "JobApplication";
  createdAt: Scalars["DateTime"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  employee: Employee;
  employeeId: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  jobPosting: JobPosting;
  postingId: Scalars["Int"]["output"];
  referralCode?: Maybe<Scalars["String"]["output"]>;
  status: ApplicationStatus;
  updatedAt: Scalars["DateTime"]["output"];
};

export type JobApplicationListRelationFilter = {
  every?: InputMaybe<JobApplicationWhereInput>;
  none?: InputMaybe<JobApplicationWhereInput>;
  some?: InputMaybe<JobApplicationWhereInput>;
};

export type JobApplicationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type JobApplicationWhereInput = {
  AND?: InputMaybe<Array<JobApplicationWhereInput>>;
  NOT?: InputMaybe<Array<JobApplicationWhereInput>>;
  OR?: InputMaybe<Array<JobApplicationWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  employee?: InputMaybe<EmployeeRelationFilter>;
  employeeId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  jobPosting?: InputMaybe<JobPostingRelationFilter>;
  postingId?: InputMaybe<IntFilter>;
  referralCode?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumApplicationStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type JobPosting = {
  __typename?: "JobPosting";
  _count: JobPostingCount;
  applications?: Maybe<Array<JobApplication>>;
  company: Company;
  companyId: Scalars["Int"]["output"];
  confirmedJobs?: Maybe<Array<EmployeeJob>>;
  createdAt: Scalars["DateTime"]["output"];
  createdById?: Maybe<Scalars["Int"]["output"]>;
  dailyRate: Scalars["Decimal"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedById?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  educationLevel: Scalars["JSON"]["output"];
  endDate: Scalars["DateTime"]["output"];
  endTime: Scalars["String"]["output"];
  epfDeduction: Scalars["Boolean"]["output"];
  equipments?: Maybe<Array<Equipment>>;
  experienceLevel: Scalars["JSON"]["output"];
  gender?: Maybe<Gender>;
  headcountRequired: Scalars["Int"]["output"];
  hourlyRate: Scalars["Decimal"]["output"];
  hoursPerDay: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  locationAddress: Scalars["String"]["output"];
  locationCity: Scalars["String"]["output"];
  locationPostcode: Scalars["String"]["output"];
  locationState: Scalars["String"]["output"];
  locationUrl: Scalars["String"]["output"];
  maxAge: Scalars["Int"]["output"];
  minAge: Scalars["Int"]["output"];
  numShifts: Scalars["Int"]["output"];
  payoutType: PayoutType;
  photos?: Maybe<Array<JobPostingPhoto>>;
  refNo: Scalars["String"]["output"];
  salary: Scalars["Decimal"]["output"];
  skills?: Maybe<Array<Skillset>>;
  startDate: Scalars["DateTime"]["output"];
  startTime: Scalars["String"]["output"];
  status: JobPostingStatus;
  title: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  updatedById?: Maybe<Scalars["Int"]["output"]>;
  whatsappLink: Scalars["String"]["output"];
};

export type JobPostingCount = {
  __typename?: "JobPostingCount";
  applications: Scalars["Int"]["output"];
  confirmedJobs: Scalars["Int"]["output"];
  equipments: Scalars["Int"]["output"];
  photos: Scalars["Int"]["output"];
  skills: Scalars["Int"]["output"];
};

export type JobPostingFindManyResult = {
  __typename?: "JobPostingFindManyResult";
  data: Array<JobPosting>;
  total: Scalars["Int"]["output"];
};

export type JobPostingListRelationFilter = {
  every?: InputMaybe<JobPostingWhereInput>;
  none?: InputMaybe<JobPostingWhereInput>;
  some?: InputMaybe<JobPostingWhereInput>;
};

export type JobPostingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type JobPostingOrderByWithRelationInput = {
  applications?: InputMaybe<JobApplicationOrderByRelationAggregateInput>;
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  companyId?: InputMaybe<SortOrder>;
  confirmedJobs?: InputMaybe<EmployeeJobOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrderInput>;
  dailyRate?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrderInput>;
  deletedById?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrderInput>;
  educationLevel?: InputMaybe<SortOrder>;
  endDate?: InputMaybe<SortOrder>;
  endTime?: InputMaybe<SortOrder>;
  epfDeduction?: InputMaybe<SortOrder>;
  equipments?: InputMaybe<EquipmentOrderByRelationAggregateInput>;
  experienceLevel?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrderInput>;
  headcountRequired?: InputMaybe<SortOrder>;
  hourlyRate?: InputMaybe<SortOrder>;
  hoursPerDay?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locationAddress?: InputMaybe<SortOrder>;
  locationCity?: InputMaybe<SortOrder>;
  locationPostcode?: InputMaybe<SortOrder>;
  locationState?: InputMaybe<SortOrder>;
  locationUrl?: InputMaybe<SortOrder>;
  maxAge?: InputMaybe<SortOrder>;
  minAge?: InputMaybe<SortOrder>;
  numShifts?: InputMaybe<SortOrder>;
  payoutType?: InputMaybe<SortOrder>;
  photos?: InputMaybe<JobPostingPhotoOrderByRelationAggregateInput>;
  refNo?: InputMaybe<SortOrder>;
  salary?: InputMaybe<SortOrder>;
  skills?: InputMaybe<SkillsetOrderByRelationAggregateInput>;
  startDate?: InputMaybe<SortOrder>;
  startTime?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedById?: InputMaybe<SortOrderInput>;
  whatsappLink?: InputMaybe<SortOrder>;
};

export type JobPostingPhoto = {
  __typename?: "JobPostingPhoto";
  createdAt: Scalars["DateTime"]["output"];
  id: Scalars["Int"]["output"];
  jobPosting: JobPosting;
  jobPostingId: Scalars["Int"]["output"];
  sequence: Scalars["Int"]["output"];
  url: Scalars["String"]["output"];
};

export type JobPostingPhotoFindManyResult = {
  __typename?: "JobPostingPhotoFindManyResult";
  data: Array<JobPostingPhoto>;
  total: Scalars["Int"]["output"];
};

export type JobPostingPhotoListRelationFilter = {
  every?: InputMaybe<JobPostingPhotoWhereInput>;
  none?: InputMaybe<JobPostingPhotoWhereInput>;
  some?: InputMaybe<JobPostingPhotoWhereInput>;
};

export type JobPostingPhotoOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type JobPostingPhotoOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  jobPosting?: InputMaybe<JobPostingOrderByWithRelationInput>;
  jobPostingId?: InputMaybe<SortOrder>;
  sequence?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export enum JobPostingPhotoScalarFieldEnum {
  CreatedAt = "createdAt",
  Id = "id",
  JobPostingId = "jobPostingId",
  Sequence = "sequence",
  Url = "url",
}

export type JobPostingPhotoWhereInput = {
  AND?: InputMaybe<Array<JobPostingPhotoWhereInput>>;
  NOT?: InputMaybe<Array<JobPostingPhotoWhereInput>>;
  OR?: InputMaybe<Array<JobPostingPhotoWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  jobPosting?: InputMaybe<JobPostingRelationFilter>;
  jobPostingId?: InputMaybe<IntFilter>;
  sequence?: InputMaybe<IntFilter>;
  url?: InputMaybe<StringFilter>;
};

export type JobPostingPhotoWhereUniqueInput = {
  AND?: InputMaybe<Array<JobPostingPhotoWhereInput>>;
  NOT?: InputMaybe<Array<JobPostingPhotoWhereInput>>;
  OR?: InputMaybe<Array<JobPostingPhotoWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  jobPosting?: InputMaybe<JobPostingRelationFilter>;
  jobPostingId?: InputMaybe<IntFilter>;
  sequence?: InputMaybe<IntFilter>;
  url?: InputMaybe<StringFilter>;
};

export type JobPostingRelationFilter = {
  is?: InputMaybe<JobPostingWhereInput>;
  isNot?: InputMaybe<JobPostingWhereInput>;
};

export enum JobPostingScalarFieldEnum {
  CompanyId = "companyId",
  CreatedAt = "createdAt",
  CreatedById = "createdById",
  DailyRate = "dailyRate",
  DeletedAt = "deletedAt",
  DeletedById = "deletedById",
  Description = "description",
  EducationLevel = "educationLevel",
  EndDate = "endDate",
  EndTime = "endTime",
  EpfDeduction = "epfDeduction",
  ExperienceLevel = "experienceLevel",
  Gender = "gender",
  HeadcountRequired = "headcountRequired",
  HourlyRate = "hourlyRate",
  HoursPerDay = "hoursPerDay",
  Id = "id",
  LocationAddress = "locationAddress",
  LocationCity = "locationCity",
  LocationPostcode = "locationPostcode",
  LocationState = "locationState",
  LocationUrl = "locationUrl",
  MaxAge = "maxAge",
  MinAge = "minAge",
  NumShifts = "numShifts",
  PayoutType = "payoutType",
  RefNo = "refNo",
  Salary = "salary",
  StartDate = "startDate",
  StartTime = "startTime",
  Status = "status",
  Title = "title",
  UpdatedAt = "updatedAt",
  UpdatedById = "updatedById",
  WhatsappLink = "whatsappLink",
}

export enum JobPostingStatus {
  Active = "ACTIVE",
  Cancelled = "CANCELLED",
  Ended = "ENDED",
  Paused = "PAUSED",
}

export type JobPostingWhereInput = {
  AND?: InputMaybe<Array<JobPostingWhereInput>>;
  NOT?: InputMaybe<Array<JobPostingWhereInput>>;
  OR?: InputMaybe<Array<JobPostingWhereInput>>;
  applications?: InputMaybe<JobApplicationListRelationFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<IntFilter>;
  confirmedJobs?: InputMaybe<EmployeeJobListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  dailyRate?: InputMaybe<DecimalFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  educationLevel?: InputMaybe<JsonFilter>;
  endDate?: InputMaybe<DateTimeFilter>;
  endTime?: InputMaybe<StringFilter>;
  epfDeduction?: InputMaybe<BoolFilter>;
  equipments?: InputMaybe<EquipmentListRelationFilter>;
  experienceLevel?: InputMaybe<JsonFilter>;
  gender?: InputMaybe<EnumGenderNullableFilter>;
  headcountRequired?: InputMaybe<IntFilter>;
  hourlyRate?: InputMaybe<DecimalFilter>;
  hoursPerDay?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  locationAddress?: InputMaybe<StringFilter>;
  locationCity?: InputMaybe<StringFilter>;
  locationPostcode?: InputMaybe<StringFilter>;
  locationState?: InputMaybe<StringFilter>;
  locationUrl?: InputMaybe<StringFilter>;
  maxAge?: InputMaybe<IntFilter>;
  minAge?: InputMaybe<IntFilter>;
  numShifts?: InputMaybe<IntFilter>;
  payoutType?: InputMaybe<EnumPayoutTypeFilter>;
  photos?: InputMaybe<JobPostingPhotoListRelationFilter>;
  refNo?: InputMaybe<StringFilter>;
  salary?: InputMaybe<DecimalFilter>;
  skills?: InputMaybe<SkillsetListRelationFilter>;
  startDate?: InputMaybe<DateTimeFilter>;
  startTime?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumJobPostingStatusFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
  whatsappLink?: InputMaybe<StringFilter>;
};

export type JobPostingWhereUniqueInput = {
  AND?: InputMaybe<Array<JobPostingWhereInput>>;
  NOT?: InputMaybe<Array<JobPostingWhereInput>>;
  OR?: InputMaybe<Array<JobPostingWhereInput>>;
  applications?: InputMaybe<JobApplicationListRelationFilter>;
  company?: InputMaybe<CompanyRelationFilter>;
  companyId?: InputMaybe<IntFilter>;
  confirmedJobs?: InputMaybe<EmployeeJobListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  dailyRate?: InputMaybe<DecimalFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  educationLevel?: InputMaybe<JsonFilter>;
  endDate?: InputMaybe<DateTimeFilter>;
  endTime?: InputMaybe<StringFilter>;
  epfDeduction?: InputMaybe<BoolFilter>;
  equipments?: InputMaybe<EquipmentListRelationFilter>;
  experienceLevel?: InputMaybe<JsonFilter>;
  gender?: InputMaybe<EnumGenderNullableFilter>;
  headcountRequired?: InputMaybe<IntFilter>;
  hourlyRate?: InputMaybe<DecimalFilter>;
  hoursPerDay?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  locationAddress?: InputMaybe<StringFilter>;
  locationCity?: InputMaybe<StringFilter>;
  locationPostcode?: InputMaybe<StringFilter>;
  locationState?: InputMaybe<StringFilter>;
  locationUrl?: InputMaybe<StringFilter>;
  maxAge?: InputMaybe<IntFilter>;
  minAge?: InputMaybe<IntFilter>;
  numShifts?: InputMaybe<IntFilter>;
  payoutType?: InputMaybe<EnumPayoutTypeFilter>;
  photos?: InputMaybe<JobPostingPhotoListRelationFilter>;
  refNo?: InputMaybe<Scalars["String"]["input"]>;
  salary?: InputMaybe<DecimalFilter>;
  skills?: InputMaybe<SkillsetListRelationFilter>;
  startDate?: InputMaybe<DateTimeFilter>;
  startTime?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumJobPostingStatusFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
  whatsappLink?: InputMaybe<StringFilter>;
};

export enum JobStatus {
  Active = "ACTIVE",
  Completed = "COMPLETED",
  Terminated = "TERMINATED",
}

export type JsonFilter = {
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

export enum LetterStatus {
  Active = "ACTIVE",
  Closed = "CLOSED",
  Deleted = "DELETED",
}

export type Mutation = {
  __typename?: "Mutation";
  createAdmin: Admin;
  deleteAdmin: Scalars["String"]["output"];
  updateAdmin: Admin;
};

export type MutationCreateAdminArgs = {
  input: CreateAdminInput;
};

export type MutationDeleteAdminArgs = {
  id: Scalars["Float"]["input"];
};

export type MutationUpdateAdminArgs = {
  id: Scalars["Float"]["input"];
  input: UpdateAdminInput;
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

export type NestedDecimalFilter = {
  equals?: InputMaybe<Scalars["Decimal"]["input"]>;
  gt?: InputMaybe<Scalars["Decimal"]["input"]>;
  gte?: InputMaybe<Scalars["Decimal"]["input"]>;
  in?: InputMaybe<Array<Scalars["Decimal"]["input"]>>;
  lt?: InputMaybe<Scalars["Decimal"]["input"]>;
  lte?: InputMaybe<Scalars["Decimal"]["input"]>;
  not?: InputMaybe<NestedDecimalFilter>;
  notIn?: InputMaybe<Array<Scalars["Decimal"]["input"]>>;
};

export type NestedDecimalNullableFilter = {
  equals?: InputMaybe<Scalars["Decimal"]["input"]>;
  gt?: InputMaybe<Scalars["Decimal"]["input"]>;
  gte?: InputMaybe<Scalars["Decimal"]["input"]>;
  in?: InputMaybe<Array<Scalars["Decimal"]["input"]>>;
  lt?: InputMaybe<Scalars["Decimal"]["input"]>;
  lte?: InputMaybe<Scalars["Decimal"]["input"]>;
  not?: InputMaybe<NestedDecimalNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Decimal"]["input"]>>;
};

export type NestedEnumApplicationStatusFilter = {
  equals?: InputMaybe<ApplicationStatus>;
  in?: InputMaybe<Array<ApplicationStatus>>;
  not?: InputMaybe<NestedEnumApplicationStatusFilter>;
  notIn?: InputMaybe<Array<ApplicationStatus>>;
};

export type NestedEnumAttendanceStatusFilter = {
  equals?: InputMaybe<AttendanceStatus>;
  in?: InputMaybe<Array<AttendanceStatus>>;
  not?: InputMaybe<NestedEnumAttendanceStatusFilter>;
  notIn?: InputMaybe<Array<AttendanceStatus>>;
};

export type NestedEnumAuthTokenTypeFilter = {
  equals?: InputMaybe<AuthTokenType>;
  in?: InputMaybe<Array<AuthTokenType>>;
  not?: InputMaybe<NestedEnumAuthTokenTypeFilter>;
  notIn?: InputMaybe<Array<AuthTokenType>>;
};

export type NestedEnumCompanyUserRoleFilter = {
  equals?: InputMaybe<CompanyUserRole>;
  in?: InputMaybe<Array<CompanyUserRole>>;
  not?: InputMaybe<NestedEnumCompanyUserRoleFilter>;
  notIn?: InputMaybe<Array<CompanyUserRole>>;
};

export type NestedEnumGenderNullableFilter = {
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  not?: InputMaybe<NestedEnumGenderNullableFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type NestedEnumInvoiceStatusFilter = {
  equals?: InputMaybe<InvoiceStatus>;
  in?: InputMaybe<Array<InvoiceStatus>>;
  not?: InputMaybe<NestedEnumInvoiceStatusFilter>;
  notIn?: InputMaybe<Array<InvoiceStatus>>;
};

export type NestedEnumJobPostingStatusFilter = {
  equals?: InputMaybe<JobPostingStatus>;
  in?: InputMaybe<Array<JobPostingStatus>>;
  not?: InputMaybe<NestedEnumJobPostingStatusFilter>;
  notIn?: InputMaybe<Array<JobPostingStatus>>;
};

export type NestedEnumJobStatusFilter = {
  equals?: InputMaybe<JobStatus>;
  in?: InputMaybe<Array<JobStatus>>;
  not?: InputMaybe<NestedEnumJobStatusFilter>;
  notIn?: InputMaybe<Array<JobStatus>>;
};

export type NestedEnumLetterStatusFilter = {
  equals?: InputMaybe<LetterStatus>;
  in?: InputMaybe<Array<LetterStatus>>;
  not?: InputMaybe<NestedEnumLetterStatusFilter>;
  notIn?: InputMaybe<Array<LetterStatus>>;
};

export type NestedEnumPaymentStatusFilter = {
  equals?: InputMaybe<PaymentStatus>;
  in?: InputMaybe<Array<PaymentStatus>>;
  not?: InputMaybe<NestedEnumPaymentStatusFilter>;
  notIn?: InputMaybe<Array<PaymentStatus>>;
};

export type NestedEnumPayoutTypeFilter = {
  equals?: InputMaybe<PayoutType>;
  in?: InputMaybe<Array<PayoutType>>;
  not?: InputMaybe<NestedEnumPayoutTypeFilter>;
  notIn?: InputMaybe<Array<PayoutType>>;
};

export type NestedEnumPayrollStatusFilter = {
  equals?: InputMaybe<PayrollStatus>;
  in?: InputMaybe<Array<PayrollStatus>>;
  not?: InputMaybe<NestedEnumPayrollStatusFilter>;
  notIn?: InputMaybe<Array<PayrollStatus>>;
};

export type NestedEnumUserTypeFilter = {
  equals?: InputMaybe<UserType>;
  in?: InputMaybe<Array<UserType>>;
  not?: InputMaybe<NestedEnumUserTypeFilter>;
  notIn?: InputMaybe<Array<UserType>>;
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
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export enum NullsOrder {
  First = "first",
  Last = "last",
}

export enum PaymentStatus {
  Approved = "APPROVED",
  Paid = "PAID",
  Pending = "PENDING",
}

export enum PayoutType {
  Daily = "DAILY",
  Monthly = "MONTHLY",
}

export type Payroll = {
  __typename?: "Payroll";
  _count: PayrollCount;
  additionals?: Maybe<Array<PayrollAdditional>>;
  companyId: Scalars["Int"]["output"];
  cp38: Scalars["Decimal"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  createdById?: Maybe<Scalars["Int"]["output"]>;
  dailyRate: Scalars["Decimal"]["output"];
  deductions?: Maybe<Array<PayrollDeduction>>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedById?: Maybe<Scalars["Int"]["output"]>;
  eis: Scalars["Decimal"]["output"];
  employeeId: Scalars["Int"]["output"];
  epf: Scalars["Decimal"]["output"];
  grossPay: Scalars["Decimal"]["output"];
  hourlyRate: Scalars["Decimal"]["output"];
  id: Scalars["Int"]["output"];
  incomeTax: Scalars["Decimal"]["output"];
  invoiceItem?: Maybe<Array<InvoiceItem>>;
  netPay: Scalars["Decimal"]["output"];
  overtimeRate: Scalars["Decimal"]["output"];
  paidAt?: Maybe<Scalars["DateTime"]["output"]>;
  payoutDate?: Maybe<Scalars["DateTime"]["output"]>;
  payoutType: PayoutType;
  socso: Scalars["Decimal"]["output"];
  status: PayrollStatus;
  totalAdditional: Scalars["Decimal"]["output"];
  totalDeduction: Scalars["Decimal"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  updatedById?: Maybe<Scalars["Int"]["output"]>;
  workDays: Scalars["Int"]["output"];
  workHours: Scalars["Int"]["output"];
  workMinutes: Scalars["Int"]["output"];
  zakat: Scalars["Decimal"]["output"];
};

export type PayrollAdditional = {
  __typename?: "PayrollAdditional";
  amount: Scalars["Decimal"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  description: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
  payroll: Payroll;
  payrollId: Scalars["Int"]["output"];
};

export type PayrollAdditionalListRelationFilter = {
  every?: InputMaybe<PayrollAdditionalWhereInput>;
  none?: InputMaybe<PayrollAdditionalWhereInput>;
  some?: InputMaybe<PayrollAdditionalWhereInput>;
};

export type PayrollAdditionalOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PayrollAdditionalWhereInput = {
  AND?: InputMaybe<Array<PayrollAdditionalWhereInput>>;
  NOT?: InputMaybe<Array<PayrollAdditionalWhereInput>>;
  OR?: InputMaybe<Array<PayrollAdditionalWhereInput>>;
  amount?: InputMaybe<DecimalFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  payroll?: InputMaybe<PayrollRelationFilter>;
  payrollId?: InputMaybe<IntFilter>;
};

export type PayrollCount = {
  __typename?: "PayrollCount";
  additionals: Scalars["Int"]["output"];
  deductions: Scalars["Int"]["output"];
  invoiceItem: Scalars["Int"]["output"];
};

export type PayrollDeduction = {
  __typename?: "PayrollDeduction";
  amount: Scalars["Decimal"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  description: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  name: Scalars["String"]["output"];
  payroll: Payroll;
  payrollId: Scalars["Int"]["output"];
};

export type PayrollDeductionListRelationFilter = {
  every?: InputMaybe<PayrollDeductionWhereInput>;
  none?: InputMaybe<PayrollDeductionWhereInput>;
  some?: InputMaybe<PayrollDeductionWhereInput>;
};

export type PayrollDeductionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PayrollDeductionWhereInput = {
  AND?: InputMaybe<Array<PayrollDeductionWhereInput>>;
  NOT?: InputMaybe<Array<PayrollDeductionWhereInput>>;
  OR?: InputMaybe<Array<PayrollDeductionWhereInput>>;
  amount?: InputMaybe<DecimalFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  payroll?: InputMaybe<PayrollRelationFilter>;
  payrollId?: InputMaybe<IntFilter>;
};

export type PayrollFindManyResult = {
  __typename?: "PayrollFindManyResult";
  data: Array<Payroll>;
  total: Scalars["Int"]["output"];
};

export type PayrollOrderByWithRelationInput = {
  additionals?: InputMaybe<PayrollAdditionalOrderByRelationAggregateInput>;
  companyId?: InputMaybe<SortOrder>;
  cp38?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrderInput>;
  dailyRate?: InputMaybe<SortOrder>;
  deductions?: InputMaybe<PayrollDeductionOrderByRelationAggregateInput>;
  deletedAt?: InputMaybe<SortOrderInput>;
  deletedById?: InputMaybe<SortOrderInput>;
  eis?: InputMaybe<SortOrder>;
  employeeId?: InputMaybe<SortOrder>;
  epf?: InputMaybe<SortOrder>;
  grossPay?: InputMaybe<SortOrder>;
  hourlyRate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  incomeTax?: InputMaybe<SortOrder>;
  invoiceItem?: InputMaybe<InvoiceItemOrderByRelationAggregateInput>;
  netPay?: InputMaybe<SortOrder>;
  overtimeRate?: InputMaybe<SortOrder>;
  paidAt?: InputMaybe<SortOrderInput>;
  payoutDate?: InputMaybe<SortOrderInput>;
  payoutType?: InputMaybe<SortOrder>;
  socso?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  totalAdditional?: InputMaybe<SortOrder>;
  totalDeduction?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedById?: InputMaybe<SortOrderInput>;
  workDays?: InputMaybe<SortOrder>;
  workHours?: InputMaybe<SortOrder>;
  workMinutes?: InputMaybe<SortOrder>;
  zakat?: InputMaybe<SortOrder>;
};

export type PayrollRelationFilter = {
  is?: InputMaybe<PayrollWhereInput>;
  isNot?: InputMaybe<PayrollWhereInput>;
};

export enum PayrollScalarFieldEnum {
  CompanyId = "companyId",
  Cp38 = "cp38",
  CreatedAt = "createdAt",
  CreatedById = "createdById",
  DailyRate = "dailyRate",
  DeletedAt = "deletedAt",
  DeletedById = "deletedById",
  Eis = "eis",
  EmployeeId = "employeeId",
  Epf = "epf",
  GrossPay = "grossPay",
  HourlyRate = "hourlyRate",
  Id = "id",
  IncomeTax = "incomeTax",
  NetPay = "netPay",
  OvertimeRate = "overtimeRate",
  PaidAt = "paidAt",
  PayoutDate = "payoutDate",
  PayoutType = "payoutType",
  Socso = "socso",
  Status = "status",
  TotalAdditional = "totalAdditional",
  TotalDeduction = "totalDeduction",
  UpdatedAt = "updatedAt",
  UpdatedById = "updatedById",
  WorkDays = "workDays",
  WorkHours = "workHours",
  WorkMinutes = "workMinutes",
  Zakat = "zakat",
}

export enum PayrollStatus {
  Confirmed = "CONFIRMED",
  Paid = "PAID",
  Pending = "PENDING",
}

export type PayrollWhereInput = {
  AND?: InputMaybe<Array<PayrollWhereInput>>;
  NOT?: InputMaybe<Array<PayrollWhereInput>>;
  OR?: InputMaybe<Array<PayrollWhereInput>>;
  additionals?: InputMaybe<PayrollAdditionalListRelationFilter>;
  companyId?: InputMaybe<IntFilter>;
  cp38?: InputMaybe<DecimalFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  dailyRate?: InputMaybe<DecimalFilter>;
  deductions?: InputMaybe<PayrollDeductionListRelationFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  eis?: InputMaybe<DecimalFilter>;
  employeeId?: InputMaybe<IntFilter>;
  epf?: InputMaybe<DecimalFilter>;
  grossPay?: InputMaybe<DecimalFilter>;
  hourlyRate?: InputMaybe<DecimalFilter>;
  id?: InputMaybe<IntFilter>;
  incomeTax?: InputMaybe<DecimalFilter>;
  invoiceItem?: InputMaybe<InvoiceItemListRelationFilter>;
  netPay?: InputMaybe<DecimalFilter>;
  overtimeRate?: InputMaybe<DecimalFilter>;
  paidAt?: InputMaybe<DateTimeNullableFilter>;
  payoutDate?: InputMaybe<DateTimeNullableFilter>;
  payoutType?: InputMaybe<EnumPayoutTypeFilter>;
  socso?: InputMaybe<DecimalFilter>;
  status?: InputMaybe<EnumPayrollStatusFilter>;
  totalAdditional?: InputMaybe<DecimalFilter>;
  totalDeduction?: InputMaybe<DecimalFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
  workDays?: InputMaybe<IntFilter>;
  workHours?: InputMaybe<IntFilter>;
  workMinutes?: InputMaybe<IntFilter>;
  zakat?: InputMaybe<DecimalFilter>;
};

export type PayrollWhereUniqueInput = {
  AND?: InputMaybe<Array<PayrollWhereInput>>;
  NOT?: InputMaybe<Array<PayrollWhereInput>>;
  OR?: InputMaybe<Array<PayrollWhereInput>>;
  additionals?: InputMaybe<PayrollAdditionalListRelationFilter>;
  companyId?: InputMaybe<IntFilter>;
  cp38?: InputMaybe<DecimalFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  dailyRate?: InputMaybe<DecimalFilter>;
  deductions?: InputMaybe<PayrollDeductionListRelationFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  eis?: InputMaybe<DecimalFilter>;
  employeeId?: InputMaybe<IntFilter>;
  epf?: InputMaybe<DecimalFilter>;
  grossPay?: InputMaybe<DecimalFilter>;
  hourlyRate?: InputMaybe<DecimalFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  incomeTax?: InputMaybe<DecimalFilter>;
  invoiceItem?: InputMaybe<InvoiceItemListRelationFilter>;
  netPay?: InputMaybe<DecimalFilter>;
  overtimeRate?: InputMaybe<DecimalFilter>;
  paidAt?: InputMaybe<DateTimeNullableFilter>;
  payoutDate?: InputMaybe<DateTimeNullableFilter>;
  payoutType?: InputMaybe<EnumPayoutTypeFilter>;
  socso?: InputMaybe<DecimalFilter>;
  status?: InputMaybe<EnumPayrollStatusFilter>;
  totalAdditional?: InputMaybe<DecimalFilter>;
  totalDeduction?: InputMaybe<DecimalFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
  workDays?: InputMaybe<IntFilter>;
  workHours?: InputMaybe<IntFilter>;
  workMinutes?: InputMaybe<IntFilter>;
  zakat?: InputMaybe<DecimalFilter>;
};

export type Query = {
  __typename?: "Query";
  admin?: Maybe<Admin>;
  admins: AdminFindManyResult;
  bank?: Maybe<Bank>;
  banks: BankFindManyResult;
  blacklist?: Maybe<Blacklist>;
  blacklists: BlacklistFindManyResult;
  companies: CompanyFindManyResult;
  company?: Maybe<Company>;
  companyUser?: Maybe<CompanyUser>;
  companyUsers: CompanyUserFindManyResult;
  employee?: Maybe<Employee>;
  employeeAttendance?: Maybe<EmployeeAttendance>;
  employeeAttendances: EmployeeAttendanceFindManyResult;
  employeeJob?: Maybe<EmployeeJob>;
  employeeJobs: EmployeeJobFindManyResult;
  employeePayment?: Maybe<EmployeePayment>;
  employeePayments: EmployeePaymentFindManyResult;
  employeeRating?: Maybe<EmployeeRating>;
  employeeRatings: EmployeeRatingFindManyResult;
  employeeWarningLetter?: Maybe<EmployeeWarningLetter>;
  employeeWarningLetters: EmployeeWarningLetterFindManyResult;
  employees: EmployeeFindManyResult;
  equipment?: Maybe<Equipment>;
  equipments: EquipmentFindManyResult;
  industries: IndustryFindManyResult;
  industry?: Maybe<Industry>;
  invoice?: Maybe<Invoice>;
  invoiceItem?: Maybe<InvoiceItem>;
  invoiceItems: InvoiceItemFindManyResult;
  invoices: InvoiceFindManyResult;
  jobPosting?: Maybe<JobPosting>;
  jobPostingPhoto?: Maybe<JobPostingPhoto>;
  jobPostingPhotos: JobPostingPhotoFindManyResult;
  jobPostings: JobPostingFindManyResult;
  payroll?: Maybe<Payroll>;
  payrolls: PayrollFindManyResult;
  ping: Scalars["String"]["output"];
  skillset?: Maybe<Skillset>;
  skillsets: SkillsetFindManyResult;
};

export type QueryAdminArgs = {
  where: AdminWhereUniqueInput;
};

export type QueryAdminsArgs = {
  cursor?: InputMaybe<AdminWhereUniqueInput>;
  distinct?: InputMaybe<Array<AdminScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AdminOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AdminWhereInput>;
};

export type QueryBankArgs = {
  where: BankWhereUniqueInput;
};

export type QueryBanksArgs = {
  cursor?: InputMaybe<BankWhereUniqueInput>;
  distinct?: InputMaybe<Array<BankScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BankOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<BankWhereInput>;
};

export type QueryBlacklistArgs = {
  where: BlacklistWhereUniqueInput;
};

export type QueryBlacklistsArgs = {
  cursor?: InputMaybe<BlacklistWhereUniqueInput>;
  distinct?: InputMaybe<Array<BlacklistScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BlacklistOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<BlacklistWhereInput>;
};

export type QueryCompaniesArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CompanyWhereInput>;
};

export type QueryCompanyArgs = {
  where: CompanyWhereUniqueInput;
};

export type QueryCompanyUserArgs = {
  where: CompanyUserWhereUniqueInput;
};

export type QueryCompanyUsersArgs = {
  cursor?: InputMaybe<CompanyUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CompanyUserWhereInput>;
};

export type QueryEmployeeArgs = {
  where: EmployeeWhereUniqueInput;
};

export type QueryEmployeeAttendanceArgs = {
  where: EmployeeAttendanceWhereUniqueInput;
};

export type QueryEmployeeAttendancesArgs = {
  cursor?: InputMaybe<EmployeeAttendanceWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeeAttendanceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeeAttendanceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<EmployeeAttendanceWhereInput>;
};

export type QueryEmployeeJobArgs = {
  where: EmployeeJobWhereUniqueInput;
};

export type QueryEmployeeJobsArgs = {
  cursor?: InputMaybe<EmployeeJobWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeeJobScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeeJobOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<EmployeeJobWhereInput>;
};

export type QueryEmployeePaymentArgs = {
  where: EmployeePaymentWhereUniqueInput;
};

export type QueryEmployeePaymentsArgs = {
  cursor?: InputMaybe<EmployeePaymentWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeePaymentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeePaymentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<EmployeePaymentWhereInput>;
};

export type QueryEmployeeRatingArgs = {
  where: EmployeeRatingWhereUniqueInput;
};

export type QueryEmployeeRatingsArgs = {
  cursor?: InputMaybe<EmployeeRatingWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeeRatingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeeRatingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<EmployeeRatingWhereInput>;
};

export type QueryEmployeeWarningLetterArgs = {
  where: EmployeeWarningLetterWhereUniqueInput;
};

export type QueryEmployeeWarningLettersArgs = {
  cursor?: InputMaybe<EmployeeWarningLetterWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeeWarningLetterScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeeWarningLetterOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<EmployeeWarningLetterWhereInput>;
};

export type QueryEmployeesArgs = {
  cursor?: InputMaybe<EmployeeWhereUniqueInput>;
  distinct?: InputMaybe<Array<EmployeeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EmployeeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<EmployeeWhereInput>;
};

export type QueryEquipmentArgs = {
  where: EquipmentWhereUniqueInput;
};

export type QueryEquipmentsArgs = {
  cursor?: InputMaybe<EquipmentWhereUniqueInput>;
  distinct?: InputMaybe<Array<EquipmentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<EquipmentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<EquipmentWhereInput>;
};

export type QueryIndustriesArgs = {
  cursor?: InputMaybe<IndustryWhereUniqueInput>;
  distinct?: InputMaybe<Array<IndustryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<IndustryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<IndustryWhereInput>;
};

export type QueryIndustryArgs = {
  where: IndustryWhereUniqueInput;
};

export type QueryInvoiceArgs = {
  where: InvoiceWhereUniqueInput;
};

export type QueryInvoiceItemArgs = {
  where: InvoiceItemWhereUniqueInput;
};

export type QueryInvoiceItemsArgs = {
  cursor?: InputMaybe<InvoiceItemWhereUniqueInput>;
  distinct?: InputMaybe<Array<InvoiceItemScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InvoiceItemOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<InvoiceItemWhereInput>;
};

export type QueryInvoicesArgs = {
  cursor?: InputMaybe<InvoiceWhereUniqueInput>;
  distinct?: InputMaybe<Array<InvoiceScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InvoiceOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<InvoiceWhereInput>;
};

export type QueryJobPostingArgs = {
  where: JobPostingWhereUniqueInput;
};

export type QueryJobPostingPhotoArgs = {
  where: JobPostingPhotoWhereUniqueInput;
};

export type QueryJobPostingPhotosArgs = {
  cursor?: InputMaybe<JobPostingPhotoWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobPostingPhotoScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobPostingPhotoOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<JobPostingPhotoWhereInput>;
};

export type QueryJobPostingsArgs = {
  cursor?: InputMaybe<JobPostingWhereUniqueInput>;
  distinct?: InputMaybe<Array<JobPostingScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<JobPostingOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<JobPostingWhereInput>;
};

export type QueryPayrollArgs = {
  where: PayrollWhereUniqueInput;
};

export type QueryPayrollsArgs = {
  cursor?: InputMaybe<PayrollWhereUniqueInput>;
  distinct?: InputMaybe<Array<PayrollScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PayrollOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<PayrollWhereInput>;
};

export type QuerySkillsetArgs = {
  where: SkillsetWhereUniqueInput;
};

export type QuerySkillsetsArgs = {
  cursor?: InputMaybe<SkillsetWhereUniqueInput>;
  distinct?: InputMaybe<Array<SkillsetScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SkillsetOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<SkillsetWhereInput>;
};

export type Skillset = {
  __typename?: "Skillset";
  _count: SkillsetCount;
  createdAt: Scalars["DateTime"]["output"];
  createdById?: Maybe<Scalars["Int"]["output"]>;
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  deletedById?: Maybe<Scalars["Int"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["Int"]["output"];
  jobPostings?: Maybe<Array<JobPosting>>;
  name: Scalars["String"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  updatedById?: Maybe<Scalars["Int"]["output"]>;
};

export type SkillsetCount = {
  __typename?: "SkillsetCount";
  jobPostings: Scalars["Int"]["output"];
};

export type SkillsetFindManyResult = {
  __typename?: "SkillsetFindManyResult";
  data: Array<Skillset>;
  total: Scalars["Int"]["output"];
};

export type SkillsetListRelationFilter = {
  every?: InputMaybe<SkillsetWhereInput>;
  none?: InputMaybe<SkillsetWhereInput>;
  some?: InputMaybe<SkillsetWhereInput>;
};

export type SkillsetOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SkillsetOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  createdById?: InputMaybe<SortOrderInput>;
  deletedAt?: InputMaybe<SortOrderInput>;
  deletedById?: InputMaybe<SortOrderInput>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  jobPostings?: InputMaybe<JobPostingOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  updatedById?: InputMaybe<SortOrderInput>;
};

export enum SkillsetScalarFieldEnum {
  CreatedAt = "createdAt",
  CreatedById = "createdById",
  DeletedAt = "deletedAt",
  DeletedById = "deletedById",
  Description = "description",
  Id = "id",
  Name = "name",
  UpdatedAt = "updatedAt",
  UpdatedById = "updatedById",
}

export type SkillsetWhereInput = {
  AND?: InputMaybe<Array<SkillsetWhereInput>>;
  NOT?: InputMaybe<Array<SkillsetWhereInput>>;
  OR?: InputMaybe<Array<SkillsetWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<IntFilter>;
  jobPostings?: InputMaybe<JobPostingListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
};

export type SkillsetWhereUniqueInput = {
  AND?: InputMaybe<Array<SkillsetWhereInput>>;
  NOT?: InputMaybe<Array<SkillsetWhereInput>>;
  OR?: InputMaybe<Array<SkillsetWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  createdById?: InputMaybe<IntNullableFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  deletedById?: InputMaybe<IntNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars["Int"]["input"]>;
  jobPostings?: InputMaybe<JobPostingListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  updatedById?: InputMaybe<IntNullableFilter>;
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
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateAdminInput = {
  email?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
};

export type User = {
  __typename?: "User";
  _count: UserCount;
  admin?: Maybe<Admin>;
  companyUser?: Maybe<CompanyUser>;
  createdAt: Scalars["DateTime"]["output"];
  deletedAt?: Maybe<Scalars["DateTime"]["output"]>;
  employee?: Maybe<Employee>;
  id: Scalars["Int"]["output"];
  type: UserType;
  updatedAt: Scalars["DateTime"]["output"];
  uuid: Scalars["String"]["output"];
};

export type UserCount = {
  __typename?: "UserCount";
  authToken: Scalars["Int"]["output"];
};

export type UserOrderByWithRelationInput = {
  admin?: InputMaybe<AdminOrderByWithRelationInput>;
  authToken?: InputMaybe<AuthTokenOrderByRelationAggregateInput>;
  companyUser?: InputMaybe<CompanyUserOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedAt?: InputMaybe<SortOrderInput>;
  employee?: InputMaybe<EmployeeOrderByWithRelationInput>;
  id?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  uuid?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserType {
  Admin = "ADMIN",
  CompanyUser = "COMPANY_USER",
  Employee = "EMPLOYEE",
  User = "USER",
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  admin?: InputMaybe<AdminNullableRelationFilter>;
  authToken?: InputMaybe<AuthTokenListRelationFilter>;
  companyUser?: InputMaybe<CompanyUserNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedAt?: InputMaybe<DateTimeNullableFilter>;
  employee?: InputMaybe<EmployeeNullableRelationFilter>;
  id?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumUserTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  uuid?: InputMaybe<StringFilter>;
};

export type AdminFragment = {
  __typename?: "Admin";
  id: number;
  name: string;
  email: string;
  active: boolean;
  createdAt: Date | string;
};

export type AdminInfoFragment = {
  __typename?: "Admin";
  id: number;
  name: string;
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
      name: string;
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
    name: string;
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
    name: string;
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
    name: string;
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
  deleteAdmin: string;
};

export const AdminFragmentDoc = `
    fragment Admin on Admin {
  id
  name
  email
  active
  createdAt
}
    `;
export const AdminInfoFragmentDoc = `
    fragment AdminInfo on Admin {
  id
  name
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
          optionsQueryKey ?? variables === undefined
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
