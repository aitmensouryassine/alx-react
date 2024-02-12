import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
	const bg = { backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab' };
	return (
		<tr style={bg}>
			{isHeader ? (
				textSecondCell ? (
					<>
						<th>{textFirstCell}</th>
						<th>{textSecondCell}</th>
					</>
				) : (
					<th colSpan={2}>{textFirstCell}</th>
				)
			) : (
				<>
					<td>{textFirstCell}</td>
					<td>{textSecondCell}</td>
				</>
			)}
		</tr>
	);
}

export default CourseListRow;

CourseListRow.defaultProps = {
	isHeader: false,
	textFirstCell: '',
	textSecondCell: '',
};

CourseListRow.propTypes = {
	textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
