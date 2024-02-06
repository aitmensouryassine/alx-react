/**
 * @jest-environment jsdom
 */
import React from 'react';
import { mount, shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

const listNotifications = [
	{
		id: 0,
		type: 'default',
		value: 'New course available',
	},
	{
		id: 1,
		type: 'urgent',
		value: 'New resume available',
	},
	{
		id: 2,
		type: 'urgent',
		html: { __html: getLatestNotification() },
	},
];

describe('<Notifications', () => {
	let notifications;
	beforeEach(() => {
		notifications = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
	});

	it('Notifications renders without crashing', () => {
		const notifications = shallow(<Notifications />);
		expect(notifications.exists()).toBe(true);
	});
	it('Notifications renders three list items', () => {
		const list = notifications.find(NotificationItem);
		expect(list.length).toBe(3);
	});
	it('Notifications renders the text Here is the list of notifications', () => {
		const text = notifications.text();
		const hasText = text.includes('Here is the list of notifications');
		expect(hasText).toBe(true);
	});
	it('first NotificationItem element renders the right html', () => {
		const first = notifications.find(NotificationItem).first();
		expect(first.html()).toBe('<li data-notification-type="default">New course available</li>');
	});
	it('menu item is being displayed when displayDrawer is false', () => {
		const notifications = shallow(<Notifications />);
		const menuItem = notifications.find('div.menuItem');
		expect(menuItem.exists()).toBe(true);
	});
	it('menu item is being displayed when displayDrawer is true', () => {
		const menuItem = notifications.find('div.menuItem');
		expect(menuItem.exists()).toBe(true);
	});
	it('div.Notifications is not being displayed when displayDrawer is false', () => {
		const notifications = shallow(<Notifications displayDrawer={false} />);
		const notifDiv = notifications.find('div.Notifications');
		expect(notifDiv.exists()).toBe(false);
	});
	it('div.Notifications is being displayed when displayDrawer is true', () => {
		const notifDiv = notifications.find('div.Notifications');
		expect(notifDiv.exists()).toBe(true);
	});

	it('Renders correctly when listNotifications is not passed or empty', () => {
		shallow(<Notifications />);
		shallow(<Notifications listNotifications={[]} />);
	});

	it('Renders correctly a listNotifications with the right number of NotificationItem', () => {
		const list = notifications.find(NotificationItem);
		expect(list.length).toBe(3);
	});
	it('when listNotifications is empty the message Here is the list of notifications is not displayed, but No new notification for now is', () => {
		const notifications = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
		const text = notifications.text();

		expect(text.includes('Here is the list of notifications')).toBe(false);
		expect(text.includes('No new notification for now')).toBe(true);
	});

	it('Check if we get the right msg consoled when the function markAsRead is called', () => {
		const consoleLogMock = jest.spyOn(window.console, 'log').mockImplementation(() => {});

		const wrapper = mount(<Notifications />);
		const instance = wrapper.instance();

		instance.markAsRead(5);

		expect(consoleLogMock).toHaveBeenCalledWith('Notification 5 has been marked as read');

		consoleLogMock.mockRestore();
		wrapper.unmount();
	});
});
