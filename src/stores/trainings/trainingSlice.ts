import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const GET_TRAININGS = 'GET_TRAININGS';
export interface Training {
  id: number,
  name: string,
  shortDetail: string,
  instructor: string,
  prices: Array<object>,
  startDate: string,
  endDate: string,
  type: number,
  image: string
}
export interface Trainings extends Array<Training>{}
export interface GetTrainings {
  type: typeof GET_TRAININGS,
  trainings: Trainings
}
type TrainingsState = Trainings;
const initialState: TrainingsState = [];

const trainingSlice = createSlice({
  name: 'trainings',
  initialState,
  reducers: {
    getTrainings: (state, action: PayloadAction<Trainings>) => {
      action.payload.map(v => state.push(v));
    }
  }
});

export const { getTrainings } = trainingSlice.actions;
export default trainingSlice.reducer;