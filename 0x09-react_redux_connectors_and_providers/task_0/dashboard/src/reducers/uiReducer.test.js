import uiReducer, { initial_state } from './uiReducer';
import { selectCourse } from '../actions/courseActionCreators';
import { displayNotificationDrawer } from '../actions/uiActionCreators';
import { is } from 'immutable';

describe('Test uiReducer', () => {
  it('Verify returned state when no action is passed', () => {
    const new_state = uiReducer();
    expect(is(new_state, initial_state)).toBe(true);
  });

  it('Verify returned state when SELECT_COURSE action is passed', () => {
    const new_state = uiReducer(initial_state, selectCourse());
    expect(is(new_state, initial_state)).toBe(true);
  });

  it('Verify returned state when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const state = uiReducer(initial_state, displayNotificationDrawer());
    expect(state.get('isNotificationDrawerVisible')).toBe(true);
  });
});
