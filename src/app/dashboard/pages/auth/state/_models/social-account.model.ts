export class SocialAccount {
  providerId: string;
  provider: SocialProvider;
  createdAt: number;
  updatedAt: number;

  clear(): void {
    this.provider = undefined;
    this.provider = undefined;
    this.createdAt = undefined;
    this.updatedAt = undefined;
  }
}

export enum SocialProvider {
  FACEBOOK = 'FACEBOOK',
  TWITTER = 'TWITTER',
  GOOGLE = 'GOOGLE',
};