import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const UPDATE_USER = 'UPDATE_USER';

export interface User {
    id: number,
    fname: string,
    lname: string,
    email: string,
    avatar_url: string
}

export interface UpdateUserAction {
    type: typeof UPDATE_USER,
    user: User
}

export type UserActions = UpdateUserAction;

type UserState = User;

const initialState: UserState = {
  id: 0,
  fname: '',
  lname: '',
  email: '',
  avatar_url: 'https://avatars.githubusercontent.com/u/23217542?v=4'
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<User>) => {
      state.id = action.payload.id;
      state.fname = action.payload.fname;
      state.lname = action.payload.lname;
      state.email = action.payload.email;
    }
  }
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
