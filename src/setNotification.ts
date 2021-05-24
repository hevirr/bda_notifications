export const setNewNotification = (payload) => ({
  type: 'SET_NEW_NOTIFICATION',
  payload,
});

export const setNotificationVisibilty = (id, boolean) => ({
  type: 'SET_NOTIFICATION_VISIBILITY',
  id,
  boolean,
});

export const setNotificationOrder = (id, order) => ({
  type: 'SET_NOTIFICATION_ORDER',
  id,
  order,
});

export const setHideForever = (id) => ({
  type: 'SET_HIDE_FOREVER',
  id,
});

export const removeAllNotifications = () => ({
  type: 'REMOVE_ALL_NOTIFICATIONS',
});
