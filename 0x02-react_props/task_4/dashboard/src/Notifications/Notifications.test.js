import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications', () => {
	it('Notifications renders without crashing', () => {
		const notifications = shallow(<Notifications />);
		expect(notifications.exists()).toBe(true);
	});
	it('Notifications renders three list items', () => {
		const notifications = shallow(<Notifications displayDrawer={true} />);
		const list = notifications.find(NotificationItem);
		expect(list.length).toBe(3);
	});
	it('Notifications renders the text Here is the list of notifications', () => {
		const notifications = shallow(<Notifications displayDrawer={true} />);
		const text = notifications.text();
		const hasText = text.includes('Here is the list of notifications');
		expect(hasText).toBe(true);
	});
	it('first NotificationItem element renders the right html', () => {
		const notifications = shallow(<Notifications displayDrawer={true} />);
		const first = notifications.find(NotificationItem).first();
		expect(first.html()).toBe('<li data-notification-type="default">New course available</li>');
	});
	it('menu item is being displayed when displayDrawer is false', () => {
		const notifications = shallow(<Notifications />);
		const menuItem = notifications.find('div.menuItem');
		expect(menuItem.exists()).toBe(true);
	});
	it('menu item is being displayed when displayDrawer is true', () => {
		const notifications = shallow(<Notifications displayDrawer={true} />);
		const menuItem = notifications.find('div.menuItem');
		expect(menuItem.exists()).toBe(true);
	});
	it('div.Notifications is not being displayed when displayDrawer is false', () => {
		const notifications = shallow(<Notifications />);
		const notifDiv = notifications.find('div.Notifications');
		expect(notifDiv.exists()).toBe(false);
	});
	it('div.Notifications is being displayed when displayDrawer is true', () => {
		const notifications = shallow(<Notifications displayDrawer={true} />);
		const notifDiv = notifications.find('div.Notifications');
		expect(notifDiv.exists()).toBe(true);
	});
});
