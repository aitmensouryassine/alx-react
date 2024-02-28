import { LOGIN, LOGOUT, HIDE_NOTIFICATION_DRAWER, DISPLAY_NOTIFICATION_DRAWER } from './uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';

describe('Test iActionCreator.js', () => {
  test('Test login action creator', () => {
    const expected = { type: LOGIN, user: { email: 'yassine@alx.com', password: '123456' } };
    const received = login('yassine@alx.com', '123456');

    expect(received).toEqual(expected);
  });

  test('Test logout action creator', () => {
    const expected = { type: LOGOUT };
    const received = logout();

    expect(received).toEqual(expected);
  });

  test('Test displayNotificationDrawer action creator', () => {
    const expected = { type: DISPLAY_NOTIFICATION_DRAWER };
    const received = displayNotificationDrawer();

    expect(received).toEqual(expected);
  });

  test('Test hideNotificationDrawer action creator', () => {
    const expected = { type: HIDE_NOTIFICATION_DRAWER };
    const received = hideNotificationDrawer();

    expect(received).toEqual(expected);
  });
});
