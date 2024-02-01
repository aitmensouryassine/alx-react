import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';

export default function Notifications() {
	function closeHandler() {
		console.log('Close button has been clicked');
	}

	return (
		<div className='Notifications'>
			<button aria-label='Close' onClick={closeHandler} style={{ float: 'right' }}>
				<img src={closeIcon} alt='Close notifications' />
			</button>
			<p>Here is the list of notifications</p>
			<ul>
				<NotificationItem type='default' value='New course available' />
				<NotificationItem type='urgent' value='New resume available' />
				<NotificationItem type='urgent' html={{ __html: getLatestNotification() }} />
			</ul>
		</div>
	);
}
