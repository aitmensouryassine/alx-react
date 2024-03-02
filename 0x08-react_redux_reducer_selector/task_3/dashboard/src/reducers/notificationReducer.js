import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
  FETCH_NOTIFICATIONS_SUCCESS,
} from '../actions/notificationActionTypes';

export const initital_state = {
  notifications: [],
  filter: [],
};

export default notificationReducer = (state = initital_state, action) => {
  switch (action?.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        filter: NotificationTypeFilters.DEFAULT,
        notifications: action.data.map((notification) => ({
          ...notification,
          isRead: false,
        })),
      };
    case MARK_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map((notification) => ({
          ...notification,
          isRead: notification.id === action.index ? true : notification.isRead,
        })),
      };
    case SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
};
