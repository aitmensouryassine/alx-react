import React from 'react';
import Header from './Header/Header';
import { shallow } from 'enzyme';

describe('<Header />', () => {
	it('Header renders without crashing', () => {
		const header = shallow(<Header />);
		expect(header.exists()).toBe(true);
	});
	it('Header renders img and h1 tag', () => {
		const header = shallow(<Header />);
		const img = header.find('img');
		const h1 = header.find('h1');

		expect(img.exists()).toBe(true);
		expect(h1.exists()).toBe(true);
	});
});
