import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import './CourseList.css';

export default function CourseList({ listCourses }) {
	return (
		<table id='CourseList'>
			<thead>
				<CourseListRow textFirstCell='Available courses' isHeader={true} />
				<CourseListRow textFirstCell='Course name' textSecondCell='Credit' isHeader={true} />
			</thead>
			<tbody>
				{listCourses.length ? (
					listCourses.map((course) => (
						<CourseListRow
							key={course.id}
							textFirstCell={course.name}
							textSecondCell={course.credit}
							isHeader={false}
						/>
					))
				) : (
					<CourseListRow textFirstCell='No course available yet' isHeader={false} />
				)}
			</tbody>
		</table>
	);
}

CourseList.defaultProps = {
	listCourses: [],
};
CourseList.propTypes = {
	listCourses: PropTypes.arrayOf(CourseShape),
};
