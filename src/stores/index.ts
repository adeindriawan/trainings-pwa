import { Action, applyMiddleware, combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk, { ThunkAction } from 'redux-thunk';
import { getWindowProperty } from 'utils/browser';
import { user } from './user';
import { app } from './app';
import { notifications } from './notifications';
import { pages } from './pages';
import { courses } from './courses';

const reducer = combineReducers({
  app,
  notifications,
  user,
  pages,
  courses
});

export type RootState = ReturnType<typeof reducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

const middleware = [applyMiddleware(thunk)];
const isDevMode = process.env.NODE_ENV === 'development';
const devtools = isDevMode && (getWindowProperty() as any).__REDUX_DEVTOOLS_EXTENSION__;

if (devtools) {
  middleware.push(devtools());
}

export const store = configureStore({
  reducer
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;