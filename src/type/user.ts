export interface UserStateTypes {
  userInfo: any;
  token: string | undefined;
  userShops: UserShopType[];
  selectUserShop: UserShopType | undefined;
}

export type UserShopType = {
  level: number;
  name: string;
  name_persian: string;
  profile_image: string;
};
