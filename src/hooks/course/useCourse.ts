import { useEffect } from 'react';
import { Courses, fetchCourses } from 'stores/courses';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'stores';

const useCourse = (): Courses => {
  const dispatch = useDispatch<any>();
  const courses = useSelector((state: RootState) => state.courses);

  useEffect(() => {
    if (courses.length === 0) {
      dispatch(fetchCourses());
    }
  }, []);

  return courses;
};

export default useCourse;
