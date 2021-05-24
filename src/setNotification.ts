import {INotificationState} from './types';

export const setNewNotification = (payload: INotificationState) => ({
  type: 'SET_NEW_NOTIFICATION',
  payload,
});

export const setNotificationVisibilty = (id: number, boolean: boolean) => ({
  type: 'SET_NOTIFICATION_VISIBILITY',
  id,
  boolean,
});

export const setNotificationOrder = (id: number, order: number) => ({
  type: 'SET_NOTIFICATION_ORDER',
  id,
  order,
});

export const setHideForever = (id: number) => ({
  type: 'SET_HIDE_FOREVER',
  id,
});

export const removeAllNotifications = () => ({
  type: 'REMOVE_ALL_NOTIFICATIONS',
});
