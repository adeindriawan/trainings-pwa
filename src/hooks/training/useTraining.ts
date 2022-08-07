import { useEffect } from 'react';
import { Trainings, fetchTrainings } from 'stores/trainings';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'stores';

const useTraining = (): Trainings => {
  const dispatch = useDispatch<any>();
  const trainings = useSelector((state: RootState) => state.trainings);

  useEffect(() => {
    if (trainings.length === 0) {
      dispatch(fetchTrainings());
    }
  }, []);

  return trainings;
};

export default useTraining;
