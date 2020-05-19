import { Address } from './address.model';
import { SocialAccount } from './social-account.model';
import { Role } from './role.model';

export class User {
  id: string;
  fName: string;
  lName: string;
  email: string;
  birthDate: Date;
  favLang: LangEnum;
  gender: Gender;
  phone: string;
  wallet: number;
  addresses: Address[];
  userSocialAccounts: SocialAccount[];
  type: UserType;
  role: Role;
  avatar: string;
  isPhoneVerified: boolean;
  isEmailVerified: boolean;
  token: string;
  lastLoginAt: number;
  blocked: boolean;
  activated: boolean;
  createdAt: number;
  updatedAt: number;
}

export enum LangEnum {
  EN = 'EN',
  AR = 'AR',
};

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
};

export enum UserType {
  USER = 'USER',
  VENDOR = 'VENDOR',
  DESIGNER = 'DESIGNER',
};