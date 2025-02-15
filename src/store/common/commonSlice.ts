import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Theme = 'light' | 'dark';

export interface CommonState {
  theme: Theme;
  snackbar: {
    openSnackbar: boolean;
    message: string;
  };
}

const initialState: CommonState = {
  theme: 'light',
  snackbar: {
    openSnackbar: false,
    message: '',
  },
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
    },
    setSnackbar(state, action) {
      const { openSnackbar, message } = action.payload;
      state.snackbar.openSnackbar = openSnackbar;
      state.snackbar.message = message;
    },
  },
});

export const { setTheme, setSnackbar } = commonSlice.actions;
export default commonSlice.reducer;
