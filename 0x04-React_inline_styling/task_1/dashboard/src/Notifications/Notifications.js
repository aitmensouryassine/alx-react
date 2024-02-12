import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends Component {
	constructor(props) {
		super(props);
		this.closeHandler = this.closeHandler.bind(this);
		this.markAsRead = this.markAsRead.bind(this);
	}

	shouldComponentUpdate(nextProps) {
		if (nextProps.listNotifications.length > this.props.listNotifications.length) {
			return true;
		}
		return false;
	}

	closeHandler() {
		console.log('Close button has been clicked');
	}

	markAsRead(id) {
		console.log(`Notification ${id} has been marked as read`);
	}

	render() {
		return (
			<>
				<div className={['menuItem', css(styles.menuItem)].join(' ')}>Your notifications</div>
				{this.props.displayDrawer ? (
					<div className={['Notifications', css(styles.notifications)].join(' ')}>
						<button
							className={css(styles.btn)}
							aria-label='Close'
							onClick={this.closeHandler}
							style={{ float: 'right' }}
						>
							<img className={css(styles.closeIcon)} src={closeIcon} alt='Close notifications' />
						</button>

						{this.props.listNotifications.length ? (
							<>
								<p className={css(styles.p)}>Here is the list of notifications</p>
								<ul>
									{this.props.listNotifications.map((notif) => (
										<NotificationItem
											key={notif.id}
											id={notif.id}
											type={notif.type}
											html={notif.html}
											value={notif.value}
											markAsRead={this.markAsRead}
										/>
									))}
								</ul>
							</>
						) : (
							<p>No new notification for now</p>
						)}
					</div>
				) : null}
			</>
		);
	}
}

const styles = StyleSheet.create({
	menuItem: {
		width: '100%',
		textAlign: 'right',
	},
	notifications: {
		border: '2px dashed red',
		padding: '1rem',
		float: 'right',
	},
	p: {
		display: 'block',
		minWidth: '250px',
	},
	btn: {
		backgroundColor: 'transparent',
		border: 'none',
	},
	closeIcon: {
		width: '15px',
		height: '15px',
	},
});

Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: [],
};
Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
