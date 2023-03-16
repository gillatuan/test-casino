import { createSlice } from '@reduxjs/toolkit';
import { UserModel } from 'src/types/user.type';

const userSlice = createSlice({
  name: 'user',
  initialState: null as UserModel | null,
  reducers: {
    login: (_state, action: { payload: UserModel }) => {
      return action.payload;
    },
    logout: () => {
      return null;
    },
    signup: (_state, action: { payload: UserModel }) => {
      const { password: _, ...newPayload } = action.payload;
      return newPayload;
    }
  }
});

export const { login, logout, signup } = userSlice.actions;
export default userSlice.reducer;
