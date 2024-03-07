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

const boundLogin = (email, password) => (dispatch) => dispatch(login(email, password));
const boundLogout = () => dispatch(logout());
const boundDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer());
const boundHideNotificationDrawer = () => dispatch(hideNotificationDrawer());

function loginRequest(email, password) {
  return (dispatch) => {
    boundLogin(email, password);

    return fetch('/login-success.json')
      .then((res) => res.json())
      .then((json) => dispatch(loginSuccess()))
      .catch((error) => dispatch(loginFailure()));
  };
}

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
