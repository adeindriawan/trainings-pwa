import { AppThunk } from 'stores/indexx';
import { executeGet } from 'utils/request';
import { updateUser } from './userSlice';

export const getUser = (username: string): AppThunk => (
  async dispatch => {
    const user = await executeGet(`https://api.github.com/users/${username}`);

    dispatch(updateUser(user));
  }
);