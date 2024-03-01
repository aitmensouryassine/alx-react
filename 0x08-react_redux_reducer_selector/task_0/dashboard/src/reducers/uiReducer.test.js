import uiReducer, { initial_state } from './uiReducer';
import { selectCourse } from '../actions/courseActionCreators';
import { displayNotificationDrawer } from '../actions/uiActionCreators';

describe('Test uiReducer', () => {
  it('Verify returned state when no action is passed', () => {
    const state = uiReducer();
    expect(state).toEqual(initial_state);
  });

  it('Verify returned state when SELECT_COURSE action is passed', () => {
    const state = uiReducer(initial_state, selectCourse());
    expect(state).toEqual(initial_state);
  });

  it('Verify returned state when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const state = uiReducer(initial_state, displayNotificationDrawer());
    expect(state.isNotificationDrawerVisible).toBe(true);
  });
});
