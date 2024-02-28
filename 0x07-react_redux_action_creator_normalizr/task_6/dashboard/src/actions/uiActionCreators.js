import { LOGIN, LOGOUT, HIDE_NOTIFICATION_DRAWER, DISPLAY_NOTIFICATION_DRAWER } from './uiActionTypes';

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

const boundLogin = (email, password) => dispatch(login(email, password));
const boundLogout = () => dispatch(logout());
const boundDisplayNotificationDrawer = () => dispatch(displayNotificationDrawer());
const boundHideNotificationDrawer = () => dispatch(hideNotificationDrawer());

export {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  boundLogin,
  boundLogout,
  boundDisplayNotificationDrawer,
  boundHideNotificationDrawer,
};
