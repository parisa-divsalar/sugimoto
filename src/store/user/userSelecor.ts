export const isAuthenticatedSelector = (state: any) => state.user.token !== undefined;

export const userInfoSelector = (state: any) => state.user.userInfo;

export const userShopsSelector = (state: any) => state.user.userShops;

export const selectUserShopSelector = (state: any) => state.user.selectUserShop;
