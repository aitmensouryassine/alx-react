import { fromJS } from 'immutable';

const accessImmutableObject = (object, array) => fromJS(object).getIn(array);

export default accessImmutableObject;
