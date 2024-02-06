import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
	it('component renders one cell with colspan = 2 when textSecondCell does not exist', () => {
		const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='first' />);
		expect(wrapper.html()).toBe('<tr><th colSpan="2">first</th></tr>');
	});
	it('component renders two cells when textSecondCell is present', () => {
		const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell='first' textSecondCell='second' />);
		expect(wrapper.html()).toBe('<tr><th>first</th><th>second</th></tr>');
	});
	it('component renders correctly two td elements within a tr element', () => {
		const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell='first' textSecondCell='second' />);
		expect(wrapper.html()).toBe('<tr><td>first</td><td>second</td></tr>');
	});
});
