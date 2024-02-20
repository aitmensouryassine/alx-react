import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
	const immObj = Map(object);

	return immObj.getIn(array);
}
