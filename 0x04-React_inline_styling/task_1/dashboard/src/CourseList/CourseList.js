import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

export default function CourseList({ listCourses }) {
	return (
		<table id='CourseList' className={css(styles.table)}>
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

const styles = StyleSheet.create({
	table: {
		width: '100%',
		borderCollapse: 'collapse',
	},
});

CourseList.defaultProps = {
	listCourses: [],
};
CourseList.propTypes = {
	listCourses: PropTypes.arrayOf(CourseShape),
};
