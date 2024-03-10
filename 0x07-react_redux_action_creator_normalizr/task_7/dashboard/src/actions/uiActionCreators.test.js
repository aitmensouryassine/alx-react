import { LOGIN, LOGOUT, HIDE_NOTIFICATION_DRAWER, DISPLAY_NOTIFICATION_DRAWER } from './uiActionTypes';
import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
  loginSuccess,
  loginFailure,
} from './uiActionCreators';
import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
const thunk = require('redux-thunk').thunk;

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

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

  test('API request success', () => {
    const store = mockStore();

    const baseURL = 'http://localhost:8080';
    fetchMock.get(new URL('/login-success.json', baseURL), { status: 200 });

    const email = 'yassine@alx.com';
    const pass = '123456';

    store.dispatch(loginRequest(email, pass)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(login(email, pass));
      expect(actions[1]).toEqual(loginSuccess());
    });

    fetchMock.restore();
    fetchMock.reset();
  });

  test('API request failed', () => {
    const store = mockStore();

    const baseURL = 'http://localhost:8080';
    fetchMock.get(new URL('/login-success.json', baseURL), { status: 400 });

    const email = 'yassine@alx.com';
    const pass = '123456';

    store.dispatch(loginRequest(email, pass)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(login(email, pass));
      // expect(actions[1]).toEqual(loginFailure());
    });

    fetchMock.restore();
    fetchMock.reset();
  });
});
