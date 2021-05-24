export type notificationType = 'success' | 'error';

export interface INotificationState {
  id: number;
  visible: boolean;
  hideForever: boolean;
  params: {
    type: notificationType;
    title: string;
    text?: string;
  };
}
