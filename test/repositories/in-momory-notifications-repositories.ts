import { Notification } from '../../src/app/entities/notifications';
import { NotificationRepository } from '../../src/app/repositories/notification-repository';

export class InMemoryNotificationsRepository implements NotificationRepository {
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
