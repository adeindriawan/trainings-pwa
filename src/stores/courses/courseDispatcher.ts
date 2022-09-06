import { AppThunk } from 'stores';
import { executeGet } from 'utils/request';
import { backendUrl } from 'config';
import { getCourses } from './courseSlice';

export const fetchCourses = (): AppThunk => (
  async dispatch => {
    const courses = await executeGet(`${backendUrl}/test/course/catalogue`);

    dispatch(getCourses(courses));
  }
);
