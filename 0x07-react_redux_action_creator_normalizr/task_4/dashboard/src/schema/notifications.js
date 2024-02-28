import { schema, normalize } from 'normalizr';
import * as notificationsData from '../../../../notifications.json';

const notifications = notificationsData.default;

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', { author: user, context: message });

const normalizedData = normalize(notifications, [notification]);

export default function getAllNotificationsByUser(userId) {
  const userMessages = [];
  const notifications = normalizedData.entities.notifications;
  const messages = normalizedData.entities.messages;

  for (const guid in notifications) {
    if (notifications[guid].author === userId) {
      userMessages.push(messages[notifications[guid].context]);
    }
  }

  return userMessages;
}

export { normalizedData };
