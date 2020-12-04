export interface LetterRequest {
  readonly firstName: string;
  readonly lastName: string;
  readonly age: number;
  readonly address: Address;
  readonly giftWishes: GiftWish[];
}

export interface Address {
  readonly addressLineOne: string;
  readonly addressLineTwo?: string;
  readonly addressLineThree?: string;
  readonly city: string;
  readonly stateOrProvince: string;
  readonly country: string;
}

export interface GiftWish {
  readonly giftName: string;
  readonly giftUrl: string;
}
