import React from 'react';
import './Notifications.css';
import { getLatestNotification } from './utils';
import closeIcon from './close-icon.png';

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
				<li data-priority='default'>New course available</li>
				<li data-priority='urgent'>New resume available</li>
				<li data-priority='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
			</ul>
		</div>
	);
}
