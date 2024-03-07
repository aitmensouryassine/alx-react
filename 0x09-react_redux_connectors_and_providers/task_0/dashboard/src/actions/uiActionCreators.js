import {
  LOGIN,
  LOGOUT,
  HIDE_NOTIFICATION_DRAWER,
  DISPLAY_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './uiActionTypes';
import fetch from 'node-fetch';

function login(email, password) {
  return {
    type: LOGIN,
    user: { email, password },
  };
}

function logout() {
  return {
    type: LOGOUT,
  };
}

function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
}

function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
}

function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

function loginFailure() {
  return {
    type: LOGIN_FAILURE,
  };
}

const boundLogin = (email, password) => dispatch(login(email, password));
const boundLogout = () => dispatch(logout());
const boundDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer());
const boundHideNotificationDrawer = () => dispatch(hideNotificationDrawer());

const loginRequest = (email, password) => {
  return async (dispatch) => {
    try {
      boundLogin(email, password);

      const response = await fetch('/login-success.json');
      const data = await response.json();
      return dispatch(loginSuccess);
    } catch (err) {
      return dispatch(loginFailure);
    }
  };
};

export {
  login,
  logout,
  loginSuccess,
  loginFailure,
  displayNotificationDrawer,
  hideNotificationDrawer,
  boundLogin,
  boundLogout,
  boundDisplayNotificationDrawer,
  boundHideNotificationDrawer,
  loginRequest,
};
