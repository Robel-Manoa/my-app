export interface NotificationPort {
  notify(to: string[], subject: string, body: string): Promise<void>
}
