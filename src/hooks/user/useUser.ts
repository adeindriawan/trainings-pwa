// import { useEffect } from 'react';
import { User, getUser } from 'stores/user';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'stores';

const useUser = (): User => {
  // const dispatch = useDispatch<any>();
  const user = useSelector((state: RootState) => state.user);

  // useEffect(() => {
  //   if (user.lname === 'Indriawan') {
  //     dispatch(getUser('adeindriawan'));
  //   }
  // }, []);

  return user;
};

export default useUser;
