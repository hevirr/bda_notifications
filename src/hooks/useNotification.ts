import { useDispatch } from 'react-redux';
import {
  setNewNotification,
  setNotificationVisibilty,
  setHideForever,
  setNotificationOrder,
} from '../redux/actions/setNotification';

export let notificationId = 0;

export function incrementNotificationId() {
  notificationId = notificationId + 1;
}

const useNotification = () => {
  const dispatch = useDispatch();

  function execNotification(type, title, text, timeout) {
    notificationId++;

    const currentId = notificationId;

    function createNotification(currentId) {
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
    function killNotification(currentId) {
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
