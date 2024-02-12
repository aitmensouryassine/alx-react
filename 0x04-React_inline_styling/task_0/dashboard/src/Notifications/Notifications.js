import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

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
				<div className='menuItem'>Your notifications</div>
				{this.props.displayDrawer ? (
					<div className='Notifications'>
						<button aria-label='Close' onClick={this.closeHandler} style={{ float: 'right' }}>
							<img src={closeIcon} alt='Close notifications' />
						</button>

						{this.props.listNotifications.length ? (
							<>
								<p>Here is the list of notifications</p>
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

Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: [],
};
Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
