import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserShopType, UserStateTypes } from '@/type/user.ts';

const initialState: UserStateTypes = {
  userInfo: {},
  userShops: [],
  selectUserShop: undefined,
  token: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUserShops: (state, action: PayloadAction<UserShopType[]>) => {
      state.userShops = action.payload;
    },
    setSelectUserShop: (state, action: PayloadAction<UserShopType>) => {
      state.selectUserShop = action.payload;
    },
    setUserInfo(state, action) {
      const payload = action.payload;
      state.userInfo = {
        ...state.userInfo,
        ...payload,
      };
    },
  },
});

export const { setUserInfo, setToken, setUserShops, setSelectUserShop } = userSlice.actions;
export default userSlice.reducer;
