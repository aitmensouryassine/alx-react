import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
	default: {
		color: 'blue',
	},
	urgent: {
		color: 'red',
	},
});

class NotificationItem extends PureComponent {
	liStyle = this.props.type == 'default' ? css(styles.default) : css(styles.urgent);

	render() {
		return this.props.html ? (
			<li
				data-notification-type={this.props.type}
				dangerouslySetInnerHTML={this.props.html}
				onClick={() => this.props.markAsRead(this.props.id)}
				className={this.liStyle}
			></li>
		) : (
			<li
				data-notification-type={this.props.type}
				onClick={() => this.props.markAsRead(this.props.id)}
				className={this.liStyle}
			>
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
