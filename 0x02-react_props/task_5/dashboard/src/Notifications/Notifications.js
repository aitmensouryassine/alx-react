import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

export default function Notifications({ displayDrawer, listNotifications }) {
	function closeHandler() {
		console.log('Close button has been clicked');
	}

	return (
		<>
			<div className='menuItem'>Your notifications</div>
			{displayDrawer ? (
				<div className='Notifications'>
					<button aria-label='Close' onClick={closeHandler} style={{ float: 'right' }}>
						<img src={closeIcon} alt='Close notifications' />
					</button>

					{listNotifications.length ? (
						<>
							<p>Here is the list of notifications</p>
							<ul>
								{listNotifications.map((notif) => (
									<NotificationItem
										key={notif.id}
										type={notif.type}
										html={notif.html}
										value={notif.value}
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

Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: [],
};
Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
