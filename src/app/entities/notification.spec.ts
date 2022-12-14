import { Content } from './content';
import { Notification } from './notifications';

describe('Notification ', () => {
  it('should be able to create notification ', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: '1',
    });

    expect(notification).toBeTruthy();
  });
});
