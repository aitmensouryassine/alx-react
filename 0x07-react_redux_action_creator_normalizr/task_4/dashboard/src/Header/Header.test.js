/**
 * @jest-environment jsdom
 */
import React from 'react';
import Header from './Header';
import { mount, shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext from '../App/AppContext';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Header />', () => {
	let header;

	beforeEach(() => {
		const user = {
			email: '',
			password: '',
			isLoggedIn: false,
		};
		const logOut = () => {};

		header = mount(
			<AppContext.Provider value={{ user, logOut }}>
				<Header />
			</AppContext.Provider>
		);
	});

	it('renders without crashing', () => {
		expect(header.exists()).toBe(true);
	});

	it('renders img and h1 tag', () => {
		const img = header.find('img');
		const h1 = header.find('h1');

		expect(img.exists()).toBe(true);
		expect(h1.exists()).toBe(true);
	});

	it('logoutSection is not created', () => {
		const logoutSection = header.find('section#logoutSection');
		expect(logoutSection.exists()).toBe(false);
	});

	it('logoutSection is created', () => {
		const user = {
			email: 'email@email.com',
			password: '123456',
			isLoggedIn: true,
		};
		const logOut = () => {};

		const header = mount(
			<AppContext.Provider value={{ user, logOut }}>
				<Header />
			</AppContext.Provider>
		);

		const logoutSection = header.find('section#logoutSection');
		expect(logoutSection.exists()).toBe(true);
	});

	it('Test calling logOut', () => {
		const logOutMock = jest.fn();

		const user = {
			email: 'email@email.com',
			password: '123456',
			isLoggedIn: true,
		};
		const logOut = logOutMock;

		const header = mount(
			<AppContext.Provider value={{ user, logOut }}>
				<Header />
			</AppContext.Provider>
		);

		const logoutBtn = header.find('a#logOut');
		logoutBtn.simulate('click');

		expect(logOutMock).toHaveBeenCalled();
	});
});
