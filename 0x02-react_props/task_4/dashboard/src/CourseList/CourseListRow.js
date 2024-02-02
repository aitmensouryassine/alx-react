import React from 'react';

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
	return (
		<tr>
			isHeader ? textSecondCell ?<th>{textFirstCell}</th>
			<th>{textSecondCell}</th>:<th colSpan={2}>{textFirstCell}</th>:<td>{textFirstCell}</td>
			<td>{textSecondCell}</td>
		</tr>
	);
}

export default CourseListRow;
