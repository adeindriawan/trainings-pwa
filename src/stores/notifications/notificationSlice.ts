import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';
export const HIDE_NOTIFICATION = 'HIDE_NOTIFICATION';

export type NotificationId = number;

// Define a type for the slice state
export interface Notification {
  message: string,
  isExpirable: boolean
}

export interface ShowNotificationAction {
  type: typeof SHOW_NOTIFICATION,
  notification: Notification
}

export interface HideNotificationAction {
  type: typeof HIDE_NOTIFICATION,
  notificationId: NotificationId
}

export type NotificationsActions = ShowNotificationAction | HideNotificationAction;

type NotificationsState = {
  [key in NotificationId]: Notification
};

const initialState: NotificationsState = {};

export const notificationSlice = createSlice({
  name: 'notification',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    showNotification: (state, action: PayloadAction<Notification>) => {
      state[Date.now()] = action.payload;
    },
    hideNotification: (state, action: PayloadAction<NotificationId>) => {
      delete state[action.payload];
    }
  }
});

export const { showNotification, hideNotification } = notificationSlice.actions;

export default notificationSlice.reducer;