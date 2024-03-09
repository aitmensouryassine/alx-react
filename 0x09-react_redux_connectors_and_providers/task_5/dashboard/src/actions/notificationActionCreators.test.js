import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
  SET_LOADING_STATE,
  FETCH_NOTIFICATIONS_SUCCESS,
} from './notificationActionTypes';
import {
  markAsRead,
  setNotificationFilter,
  setLoadingState,
  setNotifications,
  fetchNotifications,
} from './notificationActionCreators';

describe('Test notificationActionCreators.js', () => {
  test('Test markAsRead', () => {
    const received = markAsRead(1);
    const expected = { type: MARK_AS_READ, index: 1 };

    expect(expected).toEqual(received);
  });
  test('Test setNotificationFilter', () => {
    const received = setNotificationFilter(NotificationTypeFilters.DEFAULT);
    const expected = { type: SET_TYPE_FILTER, filter: NotificationTypeFilters.DEFAULT };

    expect(expected).toEqual(received);
  });
  test('Test setLoadingState', () => {
    const received = setLoadingState(true);
    const expected = { type: SET_LOADING_STATE, loadingState: true };

    expect(expected).toEqual(received);
  });
  test('Test setNotifications', () => {
    const received = setNotifications('data');
    const expected = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: 'data',
    };

    expect(expected).toEqual(received);
  });
});
