import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from '../actions/notificationActionTypes';
import notificationReducer, { initital_state } from './notificationReducer';

describe('Test notificationReducer', () => {
  it('Test with no action', () => {
    expect(notificationReducer()).toEqual(initital_state);
  });
  it('Test that FETCH_NOTIFICATIONS_SUCCESS returns the data passed', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', value: 'New data available' },
      ],
    };

    const state = notificationReducer(initital_state, action);

    expect(state).toEqual({
      filter: NotificationTypeFilters.DEFAULT,
      notifications: action.data.map((notification) => ({
        ...notification,
        isRead: false,
      })),
    });
  });
  it('Test that MARK_AS_READ returns the data with the right item updated', () => {
    const initial_state = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    };
    const action = {
      type: MARK_AS_READ,
      index: 2,
    };

    const state = notificationReducer(initial_state, action);

    expect(state).toEqual({
      ...initial_state,
      notifications: initial_state.notifications.map((notification) => ({
        ...notification,
        isRead: notification.id === action.index ? true : notification.isRead,
      })),
    });
  });
  it('Test that SET_TYPE_FILTER changes filter attribute', () => {
    const initial_state = {
      filter: NotificationTypeFilters.DEFAULT,
      notifications: [
        { id: 1, type: 'default', value: 'New course available', isRead: false },
        { id: 2, type: 'urgent', value: 'New resume available', isRead: false },
        { id: 3, type: 'urgent', value: 'New data available', isRead: false },
      ],
    };
    const action = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT',
    };

    const state = notificationReducer(initial_state, action);

    expect(state).toEqual({
      ...initial_state,
      filter: action.filter,
    });
  });
});
