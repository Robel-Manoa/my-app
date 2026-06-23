import { v4 as uuidv4 } from 'uuid'
import { Feedback } from '../../domain/entities/Feedback'
import { FeedbackStatus } from '../../domain/value-objects/FeedbackStatus'
import { FeedbackRepositoryPort } from '../../ports/FeedbackRepositoryPort'

export class SubmitFeedback {
  constructor(private feedbackRepo: FeedbackRepositoryPort) {}

  async execute(authorId: string, message: string, targetAnnouncementId?: string) {
    const now = new Date().toISOString()
    const feedback = new Feedback({
      id: uuidv4(),
      authorId,
      message,
      targetAnnouncementId: targetAnnouncementId ?? null,
      status: FeedbackStatus.SUBMITTED,
      createdAt: now,
      reviewedAt: null,
    })

    await this.feedbackRepo.save(feedback)
    return feedback.toJSON()
  }
}
