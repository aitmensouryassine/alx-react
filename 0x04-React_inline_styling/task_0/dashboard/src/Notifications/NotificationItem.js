import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends PureComponent {
	render() {
		return this.props.html ? (
			<li
				data-notification-type={this.props.type}
				dangerouslySetInnerHTML={this.props.html}
				onClick={() => this.props.markAsRead(this.props.id)}
			></li>
		) : (
			<li data-notification-type={this.props.type} onClick={() => this.props.markAsRead(this.props.id)}>
				{this.props.value}
			</li>
		);
	}
}

NotificationItem.defaultProps = {
	type: 'default',
	value: '',
	markAsRead: () => {},
};
NotificationItem.propType = {
	html: PropTypes.shape({
		__html: PropTypes.string,
	}),
	type: PropTypes.string.isRequired,
	value: PropTypes.string,
	markAsRead: PropTypes.func,
};

export default NotificationItem;
