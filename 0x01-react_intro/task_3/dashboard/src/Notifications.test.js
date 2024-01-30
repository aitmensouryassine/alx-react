import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications', () => {
	it('Notifications renders without crashing', () => {
		const notifications = shallow(<Notifications />);
		expect(notifications.exists()).toBe(true);
	});
	it('Notifications renders three list items', () => {
		const notifications = shallow(<Notifications />);
		const list = notifications.find('li');
		expect(list.length).toBe(3);
	});
	it('Notifications renders the text Here is the list of notifications', () => {
		const notifications = shallow(<Notifications />);
		const text = notifications.text();
		const hasText = text.includes('Here is the list of notifications');
		expect(hasText).toBe(true);
	});
});
