import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications/Notifications';
import NotificationItem from './Notifications/NotificationItem';

describe('<Notifications', () => {
	it('Notifications renders without crashing', () => {
		const notifications = shallow(<Notifications />);
		expect(notifications.exists()).toBe(true);
	});
	it('Notifications renders three list items', () => {
		const notifications = shallow(<Notifications />);
		const list = notifications.find(NotificationItem);
		expect(list.length).toBe(3);
	});
	it('Notifications renders the text Here is the list of notifications', () => {
		const notifications = shallow(<Notifications />);
		const text = notifications.text();
		const hasText = text.includes('Here is the list of notifications');
		expect(hasText).toBe(true);
	});
	it('first NotificationItem element renders the right html', () => {
		const notifications = shallow(<Notifications />);
		const first = notifications.find(NotificationItem).first();
		expect(first.html()).toBe('<li data-notification-type="default">New course available</li>');
	});
});
