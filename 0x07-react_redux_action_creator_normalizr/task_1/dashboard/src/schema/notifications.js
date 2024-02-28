import { schema, normalize } from 'normalizr';
import * as notificationsData from '../../../../notifications.json';

const notifications = notificationsData.default;

export default function getAllNotificationsByUser(userId) {
  return notifications
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', { author: user, context: message });

const normalizedData = normalize(notifications, [notification]);

export { normalizedData };
