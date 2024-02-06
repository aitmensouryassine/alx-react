import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
	it('Renders without crashing', () => {
		shallow(<NotificationItem />);
	});
	it('Dummy type and value props', () => {
		const wrapper = shallow(<NotificationItem type='default' value='test' />);
		expect(wrapper.html()).toBe('<li data-notification-type="default">test</li>');
	});
	it('Dummy html prop', () => {
		const wrapper = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
		expect(wrapper.html()).toBe('<li data-notification-type="default"><u>test</u></li>');
	});
});
