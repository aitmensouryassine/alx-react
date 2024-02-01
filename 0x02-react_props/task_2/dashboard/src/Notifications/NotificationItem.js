import React from 'react';

export default function NotificationItem({ type, html, value }) {
	return html ? (
		<li data-priority={type} data-notification-type={type} dangerouslySetInnerHTML={html}></li>
	) : (
		<li data-priority={type} data-notification-type={type}>
			{value}
		</li>
	);
}
