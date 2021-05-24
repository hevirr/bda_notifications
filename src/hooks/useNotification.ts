import { useDispatch } from 'react-redux';
import {
  setNewNotification,
  setNotificationVisibilty,
  setHideForever,
  setNotificationOrder,
} from '../setNotification';
import {notificationType} from '../types';

export let notificationId: number = 0;

export function incrementNotificationId() {
  notificationId = notificationId + 1;
}

const useNotification = () => {
  const dispatch = useDispatch();

  function execNotification(type: notificationType, title: string, text: string, timeout: number) {
    notificationId++;

    const currentId: number = notificationId;

    function createNotification(currentId: number) {
      dispatch(
        setNewNotification({
          id: currentId,
          visible: false,
          hideForever: false,
          params: {
            type,
            title,
            text,
          },
        }),
      );
      setTimeout(() => {
        dispatch(setNotificationVisibilty(currentId, true));
      }, 1);
    }
    function killNotification(currentId: number) {
      dispatch(setNotificationVisibilty(currentId, false));
      dispatch(setNotificationOrder(currentId, 0));
      setTimeout(() => {
        dispatch(setHideForever(currentId));
      }, 250);
    }

    createNotification(currentId);
    if (timeout) {
      setTimeout(() => {
        killNotification(currentId);
      }, timeout);
    }
  }

  return execNotification;
};

export default useNotification;
