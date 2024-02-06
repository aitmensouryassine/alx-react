import React from 'react';
import PropTypes from 'prop-types';

export default function NotificationItem({ type, html, value }) {
	return html ? (
		<li data-notification-type={type} dangerouslySetInnerHTML={html}></li>
	) : (
		<li data-notification-type={type}>{value}</li>
	);
}

NotificationItem.defaultProps = {
	type: 'default',
	value: '',
};
NotificationItem.propType = {
	html: PropTypes.shape({
		__html: PropTypes.string,
	}),
	type: PropTypes.string.isRequired,
	value: PropTypes.string,
};
