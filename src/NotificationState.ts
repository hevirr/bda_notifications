const initialState = [];

const notificationState = (state = initialState, action) => {
  let newState = state;

  switch (action.type) {
    case 'REMOVE_ALL_NOTIFICATIONS':
      newState = [];
      return [...newState];
    case 'SET_NEW_NOTIFICATION':
      newState.push(action.payload);
      return [...newState];
    case 'SET_NOTIFICATION_ORDER':
      if (newState.find((notification) => notification.id === action.id)) {
        newState.find((notification) => notification.id === action.id).order = action.order;
      }
      return [...newState];
    case 'SET_NOTIFICATION_VISIBILITY':
      if (newState.find((notification) => notification.id === action.id)) {
        newState.find((notification) => notification.id === action.id).visible = action.boolean;
      }
      return [...newState];
    case 'SET_HIDE_FOREVER':
      if (newState.find((notification) => notification.id === action.id)) {
        newState.find((notification) => notification.id === action.id).hideForever = true;
      }
      return [...newState];
    default:
      return [...state];
  }
};

export default notificationState;
