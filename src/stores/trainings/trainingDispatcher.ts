import { AppThunk } from 'stores';
import { executeGet } from 'utils/request';
import { backendUrl } from 'config';
import { getTrainings } from './trainingSlice';

export const fetchTrainings = (): AppThunk => (
  async dispatch => {
    const trainings = await executeGet(`${backendUrl}/test/course/catalogue`);

    dispatch(getTrainings(trainings));
  }
);