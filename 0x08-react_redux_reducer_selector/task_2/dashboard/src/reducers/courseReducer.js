import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';

const initial_state = [];

export default courseReducer = (state = initial_state, action) => {
  switch (action?.type) {
    case FETCH_COURSE_SUCCESS:
      return action.data.map((course) => ({
        ...course,
        isSelected: false,
      }));
    case SELECT_COURSE:
      return state.map((course) => ({
        ...course,
        isSelected: course.id === action.index ? true : course.isSelected,
      }));
    case UNSELECT_COURSE:
      return state.map((course) => ({
        ...course,
        isSelected: course.id === action.index ? false : course.isSelected,
      }));
    default:
      return state;
  }
};
