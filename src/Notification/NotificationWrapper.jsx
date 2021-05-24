import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setNotificationVisibilty,
  setHideForever,
  setNotificationOrder,
  removeAllNotifications,
} from '../../redux/actions/setNotification';

import Notification from './Notification';

function NotificationWrapper() {
  const dispatch = useDispatch();
  const notifications = useSelector(({ notificationState }) => notificationState);

  React.useEffect(() => {
    let visibleState = notifications.filter((notification) => notification.hideForever === false);

    // CHECK IF ALL NOTIFICATIONS ARE DEPRECATED
    let isDeprecated;
    notifications.forEach((notification) => {
      isDeprecated = notification.hideForever;
      if (!notification.hideForever) {
        return;
      }
    });
    if (isDeprecated) {
      dispatch(removeAllNotifications());
    }

    // DYNAMIC SET ORDER
    visibleState.forEach((notification, index) => {
      if (notification.order === 0) {
        return;
      }
      dispatch(setNotificationOrder(notification.id, index + 1));
    });

    // CHECK IF QUANTITY BEYOND LIMITS
    if (visibleState.length > 3) {
      const arrayOfIndexes = visibleState.map((notification) => notification.id);
      const earliestNotificationId = Math.min(...arrayOfIndexes);
      dispatch(setNotificationVisibilty(earliestNotificationId, false));
      setTimeout(() => {
        dispatch(setHideForever(earliestNotificationId));
      }, 250);
    }
  }, [notifications]);

  return (
    <div className="notification-wrapper">
      {notifications &&
        notifications.map((notification, index) => (
          <Notification notification={notification} order={index + 1} />
        ))}
    </div>
  );
}

export default NotificationWrapper;
