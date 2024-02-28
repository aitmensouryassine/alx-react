/**
 * @jest-environment jsdom
 */
import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<App />', () => {
	it('App renders without crashing', () => {
		const app = shallow(<App />);
		expect(app.exists()).toBe(true);
	});
	it('App contain Notifications component', () => {
		const app = shallow(<App />);
		const component = app.find(Notifications);
		expect(component).toHaveLength(1);
	});
	it('App contain Header component', () => {
		const app = shallow(<App />);
		const component = app.find(Header);
		expect(component).toHaveLength(1);
	});
	it('App contain Login component', () => {
		const app = shallow(<App />);
		const component = app.find(Login);
		expect(component).toHaveLength(1);
	});
	it('App contain Footer component', () => {
		const app = shallow(<App />);
		const component = app.find(Footer);
		expect(component).toHaveLength(1);
	});
	it('CourseList is not displayed', () => {
		const app = shallow(<App />);
		const component = app.find(CourseList);
		expect(component).toHaveLength(0);
	});
	it('Test when `CTRL` + `h` are pressed the logOut and alert funcs are called', async () => {
		const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

		const wrapper = mount(<App />);
		wrapper.instance().state.user = { email: 'yassine@email.com', password: '123456', isLoggedIn: true };

		document.dispatchEvent(new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' }));

		expect(wrapper.instance().state.user.isLoggedIn).toBe(false);
		expect(alertMock).toHaveBeenCalledWith('Logging you out');

		alertMock.mockRestore();
		wrapper.unmount();
	});

	it('the default state for displayDrawer is false', () => {
		const app = shallow(<App />);
		expect(app.state().displayDrawer).toBe(false);
	});
	it('after calling handleDisplayDrawer, the state should now be true', () => {
		const app = shallow(<App />);
		app.instance().handleDisplayDrawer();
		expect(app.state().displayDrawer).toBe(true);
	});
	it('after calling handleHideDrawer, the state is updated to be false', () => {
		const app = shallow(<App />);
		app.instance().handleHideDrawer();
		expect(app.state().displayDrawer).toBe(false);
	});

	it('logIn function updates the state correctly', () => {
		const app = mount(<App />);

		app.instance().logIn('email@test.com', '123456');

		expect(app.state('user').email).toBe('email@test.com');
		expect(app.state('user').password).toBe('123456');
		expect(app.state('user').isLoggedIn).toBe(true);
	});

	it('logOut function updates the state correctly', () => {
		const app = mount(<App />);

		app.instance().logIn('email@test.com', '123456');
		app.state().logOut();

		expect(app.state('user').email).toBe('');
		expect(app.state('user').password).toBe('');
		expect(app.state('user').isLoggedIn).toBe(false);
	});
});

describe('<App /> isLoggedIn true:', () => {
	let app;
	beforeEach(() => {
		app = mount(<App />);
		app.setState({ user: { email: 'yassine@email.com', password: '123456', isLoggedIn: true } });
	});
	it('Login is not displayed', () => {
		const component = app.find(Login);
		expect(component).toHaveLength(0);
	});
	it('CourseList is displayed', () => {
		const component = app.find(CourseList);
		expect(component).toHaveLength(1);
	});
	it('verify that markNotificationAsRead works as intended', () => {
		const notificationsBeforeRemove = app.state('listNotifications');
		app.instance().markNotificationAsRead(0);
		const notificationsAfterRemove = app.state('listNotifications');

		expect(notificationsAfterRemove.length).not.toBe(notificationsBeforeRemove.length);
	});
});
