export type notificationType = 'success' | 'error';

export interface INotificationState {
  id: number;
  isVisible: boolean;
  params: {
    type: notificationType;
    title: string;
    text?: string;
  };
}
