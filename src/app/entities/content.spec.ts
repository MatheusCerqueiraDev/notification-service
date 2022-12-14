import { Content } from './content';

describe('Notification content ', () => {
  it('should be able to created notification content', () => {
    const content = new Content('Você recebeu tem uma nova notificação');

    expect(content).toBeTruthy();
  });

  it('should not be able to created notification content with less than five characters', () => {
    expect(() => new Content('três')).toThrow();
  });

  it('should not be able to created notification content with more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});