import React from 'react';
import { shallow } from 'enzyme';
import App from './App/App';
import Notifications from './Notifications/Notifications';
import Header from './Header/Header';
import Login from './Login/Login';
import Footer from './Footer/Footer';

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
});
