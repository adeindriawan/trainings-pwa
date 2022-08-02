import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const UPDATE_USER = 'UPDATE_USER';

export interface User {
    name: string,
    avatar_url: string,
    bio: string,
    followers: number | null
}

export interface UpdateUserAction {
    type: typeof UPDATE_USER,
    user: User
}

export type UserActions = UpdateUserAction;

type UserState = User;

const initialState: UserState = {
  name: '',
  avatar_url: '',
  bio: '',
  followers: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<User>) => {
      state.name = action.payload.name;
      state.avatar_url = action.payload.avatar_url;
      state.bio = action.payload.bio;
      state.followers = action.payload.followers;
    }
  }
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
