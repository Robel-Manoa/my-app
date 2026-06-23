import { FeedbackStatus } from '../value-objects/FeedbackStatus'

export interface FeedbackProps {
  id: string
  authorId: string
  message: string
  targetAnnouncementId?: string | null
  status: FeedbackStatus
  createdAt: string
  reviewedAt?: string | null
}

export class Feedback {
  constructor(private props: FeedbackProps) {}

  get id() {
    return this.props.id
  }

  markReviewed(at: string) {
    this.props.status = FeedbackStatus.REVIEWED
    this.props.reviewedAt = at
  }

  toJSON() {
    return { ...this.props }
  }
}
