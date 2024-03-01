import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import courseReducer from './courseReducer';

describe('Test coursseReducer', () => {
  it('Test that the default state returns an empty array', () => {
    expect(courseReducer()).toEqual([]);
  });
  it('Test that FETCH_COURSE_SUCCESS returns the data passed', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
    };

    const state = courseReducer([], action);

    expect(state).toEqual(
      action.data.map((course) => ({
        ...course,
        isSelected: false,
      }))
    );
  });
  it('Test that SELECT_COURSE returns the data with the right item updated', () => {
    const initial_state = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ];
    const action = {
      type: SELECT_COURSE,
      index: 2,
    };

    const state = courseReducer(initial_state, action);

    expect(state).toEqual(
      initial_state.map((course) => ({
        ...course,
        isSelected: course.id === action.index ? true : course.isSelected,
      }))
    );
  });
  it('Test that UNSELECT_COURSE returns the data with the right item updated', () => {
    const initial_state = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: true },
      { id: 3, name: 'React', credit: 40, isSelected: false },
    ];
    const action = {
      type: UNSELECT_COURSE,
      index: 2,
    };

    const state = courseReducer(initial_state, action);

    expect(state).toEqual(
      initial_state.map((course) => ({
        ...course,
        isSelected: course.id === action.index ? false : course.isSelected,
      }))
    );
  });
});
