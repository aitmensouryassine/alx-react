import { mapStateToProps } from './App';
import { StyleSheetTestUtils } from 'aphrodite';
import { fromJS } from 'immutable';

StyleSheetTestUtils.suppressStyleInjection();

describe('Test mapStateToProps ', () => {
  it('verify that the function returns the right object', () => {
    let state = fromJS({
      isUserLoggedIn: true,
    });
    expect(mapStateToProps(state)).toEqual({ isLoggedIn: true });
  });
});
